/**
 * Created by M-Rayees on 6/24/2017.
 */

'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const BidSchema = new Schema({
	roomId: {
		type: mongoose.Schema.ObjectId,
		ref: 'Room',
		required: true,
		index: true,
	},
	partnerId: {
		type: mongoose.Schema.ObjectId,
		ref: 'Partner',
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	winner:{
		type:Boolean
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Bid', BidSchema);