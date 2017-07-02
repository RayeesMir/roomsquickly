/**
 * Created by M-Rayees on 02/07/2017.
 */

'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const PartnersSchema = new Schema({
	name: {
		type: String,
		trim: true,
		default: '',
		required: "Name is required"
	},
	email: {
		type: String,
		unique: true,
		required: "Email is required",
		lowercase: true,
		trim: true,
		default: '',
		match: /.+\@.+\..+/
	},
	api_endpoint: {
		type: String
	}
}, {
	timestamps: true
});
module.exports = mongoose.model('Partner', PartnersSchema);