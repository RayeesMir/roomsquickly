const faker = require('faker');
const PartnerModel = require("./partners/models");
const RoomModel = require("./rooms/models");
const config = require('./config')
require('./db').connect(config.database.getConnectionString("dev"));
const numberOfRooms = parseInt(process.argv[3]) || 10;
const numberOfPartners = parseInt(process.argv[2]) || 5;

function createPartner(partners) {
	PartnerModel.insertMany(partners, (error, rooms) => {
		console.log(error)
		if (!error)
			console.log("All " + numberOfPartners + " Partners Created Successfully")
	})
}

function createRooms(rooms) {
	RoomModel.insertMany(rooms, (error, rooms) => {
		if (!error)
			console.log("All " + numberOfRooms + " Rooms Created Successfully")
	})
}



function getRooms(number) {
	const rooms = []
	for (var i = 0; i < number; i++) {
		let room = {
			hotel_name: faker.company.companyName(),
			room_number: faker.random.number(100),
			image: faker.image.imageUrl(),
			minimal_bid: faker.random.number(10000),
			expiry: faker.date.future(),
			winner: null
		}
		rooms.push(room);
	}
	return rooms
}

function getPartners(number) {
	const partners = []
	for (var i = 0; i < number; i++) {
		let partner = {
			name: faker.name.firstName(),
			email: faker.internet.email(),
			api_endpoint: faker.internet.url()
		}
		partners.push(partner);
	}
	return partners
}
createRooms(getRooms(numberOfRooms));
createPartner(getPartners(numberOfPartners));