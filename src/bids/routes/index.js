/**
 * Created by M-Rayees on 6/24/2017.
 */

const express = require("express");
const router = express.Router();
const Bids = require('../controllers');

router.route("/auction")
	.post(Bids.postBid);

router.route("/room/:roomId")
	.get(Bids.getBidByRoomId);

router.route("/:bidId")
	.get(Bids.getBidDetails);


module.exports = router;