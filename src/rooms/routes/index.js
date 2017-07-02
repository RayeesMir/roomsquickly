/**
 * Created by M-Rayees on 6/24/2017.
 */

const express = require("express");
const router = express.Router();
const Rooms = require('../controllers');


router.route("/")
	.get(Rooms.getRoomsOnAuction)
router.route("/startAuction/:id")
	.get(Rooms.auctionSingleRoom)
router.route("/startAuction/all")
	.get(Rooms.auctionAllRooms)



module.exports = router;