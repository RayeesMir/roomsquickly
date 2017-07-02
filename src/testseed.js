const PartnerModel = require("./partners/models");
const RoomModel = require("./rooms/models");
const BidModel = require("./bids/models");
const config = require('./config')
require('./db').connect(config.database.getConnectionString("dev"));

function createPartner(partners) {
	const testPartners = [{
		"_id": "59510550bbd96816cb522288",
		"api_endpoint": "http://marlee.com",
		"email": "miles83@yahoo.com",
		"name": "Royal"
	}, {
		"_id": "59510550bbd96816cb522289",
		"api_endpoint": "http://bell.biz",
		"email": "rodrigo_zulauf@gmail.com",
		"name": "Sally"
	}, {
		"_id": "59510550bbd96816cb52228a",
		"api_endpoint": "https://francisca.info",
		"email": "kris19@hotmail.com",
		"name": "Nels"
	}];
	PartnerModel.insertMany(testPartners, (error, rooms) => {
		if (!error)
			console.log("All  Partners Created Successfully")
	})
}

function createRooms(rooms) {
	const testRrooms = [{
		"_id": "5953cd4ea1a6931875371c69",
		"minimal_bid": 6921,
		"expiry": "2017-07-01T12:47:18.474Z",
		"winner": null,
		"image": "http://lorempixel.com/640/480",
		"room_number": "4",
		"hotel_name": "Adams and Sons"
	}, {
		"_id": "5953cd4ea1a6931875371c6a",
		"minimal_bid": 1625,
		"expiry": "2017-07-01T12:47:18.474Z",
		"winner": null,
		"image": "http://lorempixel.com/640/480",
		"room_number": "54",
		"hotel_name": "Cummings, Fay and Luettgen"
	}, {
		"_id": "5953cd4ea1a6931875371c6b",
		"minimal_bid": 2901,
		"expiry": "2017-07-01T12:47:18.474Z",
		"winner": "5957977e91ac5e3b4e6332ac",
		"image": "http://lorempixel.com/640/480",
		"room_number": "24",
		"hotel_name": "Nolan - Bailey"
	}];
	RoomModel.insertMany(testRrooms, (error, rooms) => {
		if (!error)
			console.log("All  Rooms Created Successfully")
	})
}



function createBids(rooms) {
	const testBids = [{
		"_id": "595251fc2dc5bd144ede7207",
		"winner": false,
		"partnerId": "59510550bbd96816cb522289",
		"roomId": "59510550bbd96816cb52227e",
		"amount": 11076,

	}, {
		"_id": "5952520c2dc5bd144ede7208",
		"winner": true,
		"partnerId": "59510550bbd96816cb522289",
		"roomId": "59510550bbd96816cb52227e",
		"amount": 12076,

	}, {
		"_id": "595565d9b11fbe17514a9333",

		"winner": true,
		"partnerId": "59510550bbd96816cb522289",
		"roomId": "5953cd4ea1a6931875371c69",
		"amount": 12076,

	}];
	BidModel.insertMany(testBids, (error, rooms) => {
		if (!error)
			console.log("All  Rooms Created Successfully")
	})
}

createPartner();
createRooms();
createBids();