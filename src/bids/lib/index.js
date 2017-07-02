const path = require('path');
const Room = require('../../rooms/lib');
const BidModel = require('../models');
const PartnerModels = require('../../partners/models');
const CustomError = require('../../utils/error')
const mongoose = require('mongoose');


module.exports = {
	/** This Function Return Bid
	 * @param  {[Mongoose Object Id] as RoomId}
	 * @param  {[Mongoose Object Id] as partnerId }
	 * @param  {[Number]  bid amount  }
	 * @return {[Promise] Returns Promise with Bid as argument}
	 */
	bidRoom: function(roomId, partnerId, amount) {
		let biddingRoom;
		let newBid;
		return new Promise((resolve, reject) => {
			Room.isAuctionable(roomId)
				.then((room) => {
					// Check If Amount Is Greater Than minimal Bid
					if (amount <= room.minimal_bid) {
						throw CustomError.throwError(300);
					} else {
						//calculate difference if within 1 minute extend Expiry of the The room
						const difference = (room.expiry - new Date()) / 1000;
						if (difference <= 60 && difference > 0) {
							const expiry = room.expiry.setSeconds(room.expiry.getSeconds() + 60);
							room.markModified('expiry');
						}
						//creating new bid instance 
						newBid = new BidModel({
							partnerId: partnerId,
							roomId: roomId,
							amount: amount
						});
						//call to decide Winner to check whether current bod is winner or not
						return Room.decideWinner(room, newBid);
					}
				})
				.then((room) => {
					//Save Current Bid
					return newBid.save();
				})
				.then((bid) => {
					//Resolve Promise with bid as argument
					resolve(bid)
				})
				.catch((error) => {
					reject(error)
				})
		})
	},
	/**
	 * @param  {[Mongoose Object] }
	 * @param  {[Number]}
	 * @param  {[Number]}
	 * @return {[Promsie] Return Promsie with array of bid for particular room with one latest bid for each Partners }
	 */
	getBidsByRoomId: function(roomId, skip, limit) {
		return new Promise((resolve, reject) => {
			skip = parseInt(skip) || 0;
			limit = parseInt(limit) || 50;
			BidModel.aggregate([{
					$match: {
						roomId: mongoose.Types.ObjectId(roomId)
					}
				}, {
					$group: {
						_id: "$partnerId",
						bids: {
							"$push": "$$ROOT"
						}
					}
				}, {
					$skip: skip
				}, {
					$limit: limit
				}])
				.exec()
				.then((partners) => {
					partners.forEach((partner) => {
						partner.bid = partner.bids.sort((a, b) => {
							return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
						}).reverse()[0]
						partner.partnerId = partner._id;
						delete partner._id;
						delete partner.bids
					})
					resolve(partners)
				})
				.catch((error) => {
					console.log(error);
				})
		})
	},

	/**
	 * @param  {[Mongoose Object Id as BidId]}
	 * @return {[Promise] Returns Promsie with Bid as parameter}
	 */
	getBid: function(bidId) {
		return new Promise((resolve, reject) => {
			//Check If Bid Id is valid mongoose object Id or not
			if (!mongoose.Types.ObjectId.isValid(mongoose.Types.ObjectId(bidId))) {
				//throw Error Invalid Bid
				reject(CustomError.throwError(303))
			} else {
				//get bid and populate with partner Id
				BidModel.findById({
						_id: bidId
					}).populate("partnerId").lean().exec()
					.then((bid) => {
						//Resolve Promise with bid as argument
						resolve(bid)
					})
					.catch((error) => {
						reject(error)
					})
			}
		})
	}
}