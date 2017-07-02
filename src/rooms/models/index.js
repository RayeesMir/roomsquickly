/**
 *	Created by M-Rayees on 6/24/2017.
 */

'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const RoomSchema = new Schema({
	hotel_name: {
		type: String,
		trim: true,
		default: '',
		required: "Hotel Name is Required"
	},
	room_number: {
		type: String,
		trim: true,
		required: "Room Number is Required",
		index: true,
		default: ''
	},
	image: {
		type: String,
		default: 'default.png'
	},
	minimal_bid: {
		type: Number,
		required: "Minimum Allowed bid is Required "
	},
	expiry: {
		type: Date
	},
	winner: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bid',
		index: true
	}
}, {
	timestamps: true
});
/**
 * @param  {[Mongoose Object Id]}
 * @return {[Boolean]}
 */
RoomSchema.statics.validateRoomId = function(id) {
	return mongoose.Types.ObjectId.isValid(mongoose.Types.ObjectId(id))
}
module.exports = mongoose.model('Room', RoomSchema);