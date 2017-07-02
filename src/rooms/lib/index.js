const http = require('http');
const RoomModel = require('../models');
const PartnerModels = require('../../partners/models');
const CustomError = require('../../utils/error')
const BidModel = require('../../bids/models');

/**
 * @param  {[Object] Room object as parameter}
 * Logs  if notifications is sent or not	}
 */
function sendNotification(room) {
	const notification = "Your Bid With Bid Id " + room.winner._id; + " on room " + room.hotel_name; + " is no longer winner ";
	const data = {
		notification: notification
	};
	//Fetch loosing partner from Partner collection
	PartnerModels.findById(room.winner.partnerId).exec()
		.then((partner) => {
			const options = {
				method: 'POST',
				uri: partner.api_endpoint,
				body: data,
				json: true
			};
			http.request(options, (error, body, response) => {
				if (!error && response.statusCode == 200) {
					console.log("notification send succesfully")
				} else {
					console.log("Error Sending Notification")
				}
			});
		})
		.catch((error) => {
			console.log(error);
		})
}

/**
 * @param  {[Object] Mongoose Object Id  }
 * @return {Boolean}
 */
function isValidRoomId(id) {
	return RoomModel.validateRoomId(id);
}

function updateOldWinner(bidId) {
	BidModel.findByIdAndUpdate(bidId, {
		$set: {
			winner: false
		}
	}).exec();
}

module.exports = {
	/**
	 * @param  {[ObjectId] RoomId FOr which Auction is to be Started}
	 * @return {[Promise] Promise With Room As argument}
	 */
	startAuctionForSingleRoom: function(roomId) {
		return new Promise((resolve, reject) => {
			if (!isValidRoomId(roomId)) {
				//Throw Error Invalid Room Id
				reject(CustomError.throwError(301));
			}
			RoomModel.findById({
					_id: roomId
				}).populate("winner").exec()
				.then((room) => {
					if (!room) {
						// Throw Error Room Not Found 
						throw CustomError.throwError(404);
					} else {
						const currentDate = new Date();
						//Set Expiry After 10 mins
						currentDate.setMinutes(currentDate.getMinutes() + 10);
						room.expiry = currentDate;
						room.winner = null;
						return room.save();
					}
				})
				.then((room) => {
					resolve(room);
				})
				.catch((error) => {
					reject(error);
				})
		})
	},
	/**
	 * @return {[Promise] Promise With Array of Rooms as argument for which Auction has been started}
	 */
	startAuctionForAllRoom: function() {
		return new Promise((resolve, reject) => {
			const currentDate = new Date();
			//Updates Expiry to of Rooms 10 mins after current date 
			const expiry = currentDate.setMinutes(currentDate.getMinutes() + 10);
			RoomModel.update({}, {
				$set: {
					expiry: expiry
				},
			}, {
				multi: true
			}, (error, result) => {
				if (error) {
					reject(error)
				} else {
					resolve(result);
				}
			})
		})
	},
	/**
	 * @param  {[Object]}
	 * @param  {[Object]}
	 * @return {[Promise] Rturns Promise with room as argument for which bid is beign placed  }
	 */
	decideWinner: function(room, newBid) {
		return new Promise((resolve, reject) => {
			//check if there is a winner for room or not if not set current bid as winner 
			if (room.winner) {
				// if there is winner check if current bid amount is greater than 5% of previous bid amount or not 
				//  if yes set current bid as winner else don't change anything
				if (newBid.amount > room.winner.amount + (room.winner.amount * 0.05)) {
					//if current bid is winner send notification to loosing partner
					sendNotification(room);
					//update previous bid status to winner is equal to false 
					updateOldWinner(room.winner._id);
					room.winner = newBid._id;
					newBid.winner = true;
				}
			} else {
				room.winner = newBid._id;
				newBid.winner = true;
			}
			room.save()
				.then((room) => {
					resolve(room);
				}).catch((error) => {
					reject(error);
				})
		})
	},
	/**
	 * @param  {[Mongoose Object Id]}
	 * @return {[Promise] returns Promise with room as argument}
	 */
	isAuctionable: function(roomid) {
		return new Promise((resolve, reject) => {
			let query = {};
			query._id = roomid;
			query.expiry = {
					$gt: new Date()
				}
				//Check If Expiry Of room is greater than current Date or not 
			RoomModel.findOne(query).populate("winner").exec()
				.then((room) => {
					if (!room) {
						throw CustomError.throwError(302);
					} else {
						resolve(room);
					}
				})
				.catch((error) => {
					reject(error);
				})
		})
	},
	/**
	 * @param  {[Number]}
	 * @param  {[Number]}
	 * @return {[Promise] Return promise with array auctionable rooms as argument }
	 */
	getAuctionableRooms: function(skip, limit) {
		let query = {};
		skip = parseInt(skip) || 0;
		limit = parseInt(limit) || 50;
		query.expiry = {
			$gt: new Date()
		}
		return RoomModel.find(query).sort({
			"expiry": 'desc'
		}).populate("winner").skip(skip).limit(limit).lean().exec();
	}

};