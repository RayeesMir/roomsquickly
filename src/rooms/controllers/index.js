const Room = require('../lib');
const ResponseHandler = require('../../utils/response');
module.exports = {

	getRoomsOnAuction: function(request, response) {
		Room.getAuctionableRooms()
			.then((rooms) => {
				ResponseHandler.sendSuccess(response, rooms,"rooms");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	},
	auctionSingleRoom: function(request, response) {
		const roomId = request.params.id;
		Room.startAuctionForSingleRoom(roomId)
			.then((room) => {
				ResponseHandler.sendSuccess(response, room,"room");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	},
	auctionAllRooms: function(request, response) {
		Room.startAuctionForSingleRoom(roomId)
			.then((result) => {
				ResponseHandler.sendSuccess(response, result,"data");
			})
			.catch((error) => {
				ResponseHandler.sendError(response, error);
			})
	}

}