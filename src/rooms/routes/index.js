/**
 * Created by M-Rayees on 02/07/2017.
 */

const express = require("express");
const router = express.Router();
const Rooms = require('../controllers');

/**
 * @api {get} /rooms/ Returns Auctionable Rooms
 * @apiName GetRooms
 * @apiGroup Rooms
 * @apiSuccess {String} _id room id of the Room.
 * @apiSuccess {String} room_number  Room Number of the Room.
 * @apiSuccess {String} hotel_name  hotel Name to which room belongs.
 * @apiSuccess {String} winner BidId which is winner for this room.
 * @apiSuccess {Number} minimal_bid  Minimal Bid Amount for the Room.
 * @apiSuccess {Date} expiry  Expiry time of Auction for the Rooom.
 * @apiSuccess {Date} updatedAt  Updated time of Auction for the Rooom.
 * @apiSuccess {Date} createdAt  Created time of Auction for the Rooom.
 * @apiSuccess {String} image  Image of Auctionable Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "595baf90e6da0d61d541a45c",
 *       "updatedAt": "2017-07-04T15:09:04.611Z",
 *       "createdAt": "2017-07-04T15:09:04.611Z",
 *       "minimal_bid": 6754,
 *       "expiry": "2018-05-14T19:52:32.117Z",
 *       "winner": null,
 *       "image": "http://lorempixel.com/640/480",
 *       "room_number": "22",
 *       "hotel_name": "West Inc"	
 *     }
 */
router.route("/")
	.get(Rooms.getRoomsOnAuction)

/**
 * @api {get} /api/v1/rooms/startAuction/:id Starts Auction For a Room
 * @apiName auctionSingleRoom
 * @apiGroup Rooms
 * @apiSuccess {String} _id room id of the Room.
 * @apiSuccess {String} room_number  Room Number of the Room.
 * @apiSuccess {String} hotel_name  hotel Name to which room belongs.
 * @apiSuccess {String} winner BidId which is winner for this room.
 * @apiSuccess {Number} minimal_bid  Minimal Bid Amount for the Room.
 * @apiSuccess {Date} expiry  Expiry time of Auction for the Rooom.
 * @apiSuccess {Date} updatedAt  Updated time of Auction for the Rooom.
 * @apiSuccess {Date} createdAt  Created time of Auction for the Rooom.
 * @apiSuccess {String} image  Image of Auctionable Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "595baf90e6da0d61d541a45c",
 *       "updatedAt": "2017-07-04T15:09:04.611Z",
 *       "createdAt": "2017-07-04T15:09:04.611Z",
 *       "minimal_bid": 6754,
 *       "expiry": "2018-05-14T19:52:32.117Z",
 *       "winner": null,
 *       "image": "http://lorempixel.com/640/480",
 *       "room_number": "22",
 *       "hotel_name": "West Inc"	
 *     }
 */


router.route("/startAuction/:id")
	.get(Rooms.auctionSingleRoom)



/**
 * @api {get} /api/v1/rooms/startAuction/all Starts Auction For all Room
 * @apiName auctionAllRooms
 * @apiGroup Rooms
 * @apiSuccess {String} _id room id of the Room.
 * @apiSuccess {String} room_number  Room Number of the Eoom.
 * @apiSuccess {String} hotel_name  hotel Name to which room belongs.
 * @apiSuccess {String} winner BidId which is winner for this room.
 * @apiSuccess {Number} minimal_bid  Minimal Bid Amount for the Room.
 * @apiSuccess {Date} expiry  Expiry time of Auction for the Rooom.
 * @apiSuccess {String} image  Image of Auctionable Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "595baf90e6da0d61d541a45c",
 *       "updatedAt": "2017-07-04T15:09:04.611Z",
 *       "createdAt": "2017-07-04T15:09:04.611Z",
 *       "minimal_bid": 6754,
 *       "expiry": "2018-05-14T19:52:32.117Z",
 *       "winner": null,
 *       "image": "http://lorempixel.com/640/480",
 *       "room_number": "22",
 *       "hotel_name": "West Inc"	
 *     },
 *     {
 *  "_id": "595baf90e6da0d61d541a45e",
 *	"updatedAt": "2017-07-04T15:09:04.611Z",
 *	"createdAt": "2017-07-04T15:09:04.611Z",
 *	"minimal_bid": 8687,
 *	"expiry": "2018-02-13T02:32:40.817Z",
 *	"winner": null,
 *	"image": "http://lorempixel.com/640/480",
 *	"room_number": "0",
 *	"hotel_name": "Labadie - Hartmann"
 *		}]
 */
router.route("/auction/all")
	.get(Rooms.auctionAllRooms)



module.exports = router;