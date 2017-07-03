/**
 * Created by M-Rayees on 02/07/2017.
 */

const express = require("express");
const router = express.Router();
const Rooms = require('../controllers');


router.route("/")
	.get(Rooms.getRoomsOnAuction)
router.route("/startAuction/:id")
	.get(Rooms.auctionSingleRoom)
router.route("/auction/all")
	.get(Rooms.auctionAllRooms)



module.exports = router;