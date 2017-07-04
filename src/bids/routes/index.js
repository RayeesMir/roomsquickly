/**
 * Created by M-Rayees on 02/07/2017.
 */

const express = require("express");
const router = express.Router();
const Bids = require('../controllers');

/**
 * @api {post} /api/v1/bids/auction/ Post Bid For a Room
 * @apiName postBid
 * @apiGroup Bids
 *
 * @apiParam {String} partnerId  Id of the Partner who is posting Bid for Room.
 * @apiParam {String} roomId     Id of the Room for which room bid is being posted. 
 * @apiParam {Number} amount    Bidding Amount.
 *
 * 
 * @apiSuccess {String} _id Bid id .
 * @apiSuccess {String} roomId is the id of the Room.
 * @apiSuccess {String} partnerId  is the Id of the Partner Who Posted Bid to Room.
 * @apiSuccess {Number} amount  is Bid Amount for the Room.
 * @apiSuccess {Date} updatedAt  Updated time of Bid for the Rooom.
 * @apiSuccess {Date} createdAt  Created time of Bid for the Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "updatedAt": "2017-07-04T20:17:06.859Z",
 *        "createdAt": "2017-07-04T20:17:06.859Z",
 *        "partnerId": "59510550bbd96816cb522289",
 *        "roomId": "595baf90e6da0d61d541a45c",
 *        "amount": 11076,
 *        "_id": "595bf7c229a6632c37abd0a7"
 *    }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *  	"status": "failure",
 *  	"code": 302,
 *  	"message": {
 *      	"error": "Room is Not Auctionable"
 *  		}
 *	     }
 *
 *@apiErrorExample Error-Response:
 *		HTTP/1.1 400 Not Found
 *    {
 *  	"status": "failure",
 *  	"code": 300,
 *  	"message": {
 *      	"error": "Bid Amount Is less than minimal Bid Amount"
 *  		}
 *	  }
 *
 * 
 */
router.route("/auction")
	.post(Bids.postBid);

/**
 * @api {get} /api/v1/bids/room/:roomId Get All Bid For a Room With no Duplicates 
 * @apiName getBidByRoomId
 * @apiGroup Bids

 *
 * 
 * @apiSuccess {String} _id Bid id .
 * @apiSuccess {String} roomId is the id of the Room.
 * @apiSuccess {String} partnerId  is the Id of the Partner Who Posted Bid to Room.
 * @apiSuccess {Number} amount  is Bid Amount for the Room.
 * @apiSuccess {Date} updatedAt  Updated time of Bid for the Rooom.
 * @apiSuccess {Date} createdAt  Created time of Bid for the Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
 *   "code": 200,
 *   "message": {
 *       "bids": [
 *           {
 *               "bid": {
 *                   "_id": "595bf7c229a6632c37abd0a7",
 *                   "updatedAt": "2017-07-04T20:17:06.859Z",
 *                   "createdAt": "2017-07-04T20:17:06.859Z",
 *                   "partnerId": "59510550bbd96816cb522289",
 *                   "roomId": "595baf90e6da0d61d541a45c",
 *                   "amount": 11076,
 *                   "__v": 0
 *               },
 *               "partnerId": "59510550bbd96816cb522289"
 *           }
 *       ]
 *   }
 *	}
 *
 * 
 */

router.route("/room/:roomId")
	.get(Bids.getBidByRoomId);

/**
 * @api {get} /api/v1/bids/:bidId Get Bid Details Whether Bid Is a winner 
 * @apiName getBidDetails
 * @apiGroup Bids

 *
 * 
 * @apiSuccess {String} _id Bid id .
 * @apiSuccess {String} roomId is the id of the Room.
 * @apiSuccess {String} partnerId  is the Id of the Partner Who Posted Bid to Room.
 * @apiSuccess {Number} amount  is Bid Amount for the Room.
 * @apiSuccess {Date} updatedAt  Updated time of Bid for the Rooom.
 * @apiSuccess {Date} createdAt  Created time of Bid for the Rooom.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *   "status": "success",
 *   "code": 200,
 *   "message": {
 *       "bid": {
 *           "_id": "595bf7c229a6632c37abd0a7",
 *           "updatedAt": "2017-07-04T20:17:06.859Z",
 *           "createdAt": "2017-07-04T20:17:06.859Z",
 *           "partnerId": {
 *               "_id": "59510550bbd96816cb522289",
 *               "updatedAt": "2017-07-01T13:57:09.685Z",
 *               "createdAt": "2017-07-01T13:57:09.685Z",
 *               "__v": 0,
 *               "api_endpoint": "http://bell.biz",
 *               "email": "rodrigo_zulauf@gmail.com",
 *               "name": "Sally"
 *           },
 *           "roomId": "595baf90e6da0d61d541a45c",
 *           "amount": 11076,
 *           "__v": 0
 *       }
 *   }
 *	}
 *
 * 
 */	

router.route("/:bidId")
	.get(Bids.getBidDetails);


module.exports = router;

