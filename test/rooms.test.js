const testData = require('./testData');
const roomIdToActivate = testData.activeRoomId
describe('Rooms', () => {
	describe('Internal/Library Functions', () => {

		describe('startAuctionForSingleRoom', () => {

			it('should return a promise function', () => {				
				const promise = Room.startAuctionForSingleRoom(roomIdToActivate);
				expect(Room.startAuctionForSingleRoom).to.be.a('function')
				expect(promise.then).to.be.a('function')
				expect(promise.catch).to.be.a('function')

			})

			it('should return a room Object for which auction has started', () => {
				const promise = Room.startAuctionForSingleRoom(roomIdToActivate);
				return promise.then((room, error) => {
					expect(room).to.be.an('object');
					expect(error).to.be.an('undefined');
					expect(room.expiry.getTime()).to.be.above(new Date().getTime());
					expect(room.winner).to.be.equal(null);
				})

			})

		})


		///-------------This test is to check whether this function is working proper or not
		// Don't execute This test it affects other test becoz it activate all rooms for auction
		// describe('startAuctionForAllRoom', () => {

		// 	it('should return a promise function', () => {
		// 		const promise = Room.startAuctionForAllRoom();
		// 		expect(Room.startAuctionForSingleRoom).to.be.a('function')
		// 		expect(promise.then).to.be.a('function')
		// 		expect(promise.catch).to.be.a('function')

		// 	})

		// 	it('should return a array of rooms for which auction has been started', () => {
		// 		const promise = Room.startAuctionForAllRoom();
		// 		return promise.then((result, error) => {
		// 			expect(result).to.be.an('object');
		// 			expect(error).to.be.an('undefined');
		// 			expect(result.ok).to.be.equal(1);
		// 		})
		// 	})
		// })

		describe('getAuctionableRooms', () => {

			it('should return a promise function', () => {
				const promise = Room.getAuctionableRooms();
				expect(Room.getAuctionableRooms).to.be.a('function')
				expect(promise.then).to.be.a('function')
				expect(promise.catch).to.be.a('function')
			})

			it('should return a array of auctionale Rooms in descending Order by expiry date', () => {
				const promise = Room.getAuctionableRooms();
				return promise.then((rooms, error) => {
					expect(rooms).to.be.an('array');
					expect(error).to.be.an('undefined');
					expect(rooms).to.be.descendingBy("expiry");
				})
			})

		})

	})
	describe('Routes', () => {
		describe('GET /rooms', () => {
			it('should get all Auctionable rooms', (done) => {
				chai.request(app)
					.get("/rooms")
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(200);
						expect(response.body.status).to.be.equal('success')
						expect(response.body.message).to.be.an('object')
						expect(response.body.message.rooms).to.be.an('array')
						expect(error).to.be.equal(null);
						done();
					})
			});

		})
	})
});