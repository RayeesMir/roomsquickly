
const Bid = require('../lib');
const ResponseHandler = require('../../utils/response');
/**
 * @module Bids Controllers
 * @type {Object}
 */
module.exports = {
	/**
	 * Return Bid That has been Created with Winner true or False
	 * @param  {[ObjectObject]}
	 * @param  {[Object]}
	 * @return {[Object] }
	 */
	postBid: function(request, response) {
		const {
			partnerId,
			roomId,
			amount
		} = request.body;

		Bid.bidRoom(roomId, partnerId, amount)
			.then((bid) => {
				ResponseHandler.sendSuccess(response, bid, "bid");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	},
	/** Return All Bids By Room Id Unique To Partners 
	 * @param  {[request]}
	 * @param  {[response]}
	 * @return {[Bids]}
	 */
	getBidByRoomId: function(request, response) {
		const skip = parseInt(request.query.skip) || 0;
		const limit = parseInt(request.query.limit) || 20;
		const roomId = request.params.roomId;
		Bid.getBidsByRoomId(roomId, skip, limit)
			.then((bids) => {
				ResponseHandler.sendSuccess(response, bids, "bids");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	},
	/** Return Bid Details Whether the Bid Is winner or not
	 * @param  {[Object]}
	 * @param  {[Object]}
	 * @return {[Object]}
	 */
	getBidDetails: function(request, response) {
		const bidId = request.params.bidId;
		Bid.getBid(bidId)
			.then((bid) => {
				ResponseHandler.sendSuccess(response, bid, "bid");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	}
}