const testData = require('./testData');
const roomIdToActivate = testData.activeRoomId;
const lessAmount = testData.lessAmount
const validAmount = testData.validAmount
const expiredRoomId = testData.expiredRoomId
const testPartnerId = testData.testPartnerId;
const validBidId = testData.validBidId;
const invalidBidId = testData.invalidBidId;
const bidForExpiredRoom = testData.bidForExpiredRoom;
const lessWithAmountBid = testData.lessWithAmountBid;
const validBid = testData.validBid;


describe('Test cases For Bidding Module', () => {

	describe('Internal/Library Functions', () => {

		describe('BidRoom Function', () => {
			before(() => {
				Room.startAuctionForSingleRoom(roomIdToActivate);
			})

			it('should return a promise function', () => {
				const promise = Bid.bidRoom(roomIdToActivate, testPartnerId, validAmount);
				expect(Bid.bidRoom).to.be.a('function')
				expect(promise.then).to.be.a('function')
				expect(promise.catch).to.be.a('function')
			})


			it('should return an Error "Bid Amount Is less than minimal Bid Amount"', () => {
				const promise = Bid.bidRoom(roomIdToActivate, testPartnerId, lessAmount);
				return promise.catch((error, result) => {
					expect(result).to.be.an('undefined');
				})
			})

			it('should Fail with Error Room Is not Auctionable', () => {
				const promise = Bid.bidRoom(expiredRoomId, testPartnerId, validAmount);
				return promise.catch((error, result) => {
					expect(result).to.be.an('undefined');
				})
			})

			it('should return a bid For valid data', () => {
				const promise = Bid.bidRoom(roomIdToActivate, testPartnerId, validAmount);
				return promise.then((result, error) => {
					expect(result).to.be.an('object');
					expect(error).to.be.an('undefined');
				})
			})
		})

		describe('getBid Function', () => {

			it('should return a promise function', () => {
				const promise = Bid.getBid(validBidId);
				expect(Bid.getBid).to.be.a('function')
				expect(promise.then).to.be.a('function')
				expect(promise.catch).to.be.a('function')
			})

			it('should return an Error "Invalid Bid"', () => {
				const promise = Bid.getBid(invalidBidId);
				return promise.catch((error, result) => {
					expect(result).to.be.an('undefined');
				})
			})

			it('should return a bid for valid Bid Id', () => {
				const promise = Bid.getBid(validBidId);
				return promise.then((result, error) => {
					expect(result).to.be.an('object');
					expect(error).to.be.an('undefined');
				})
			})
		})


		describe('getBidsByRoomId Function', () => {

			it('should return a promise function', () => {
				const promise = Bid.getBidsByRoomId(roomIdToActivate);
				expect(Bid.getBidsByRoomId).to.be.a('function')
				expect(promise.then).to.be.a('function')
				expect(promise.catch).to.be.a('function')
			})

			it('should return array of bids for roomId Provided', () => {
				const promise = Bid.getBidsByRoomId(roomIdToActivate);
				return promise.then((result, error) => {
					expect(result).to.be.an('array');
					expect(error).to.be.an('undefined');
				})
			})

		})

	})

	describe('Bid Routes ', () => {

		describe('POST /bids', () => {
			afterEach(() => {
				Room.startAuctionForSingleRoom(roomIdToActivate);
			})
			it('POST to an Expired Room must fail', (done) => {
				chai.request(app)
					.post("/bids/auction")
					.send(bidForExpiredRoom)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(400);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.message).to.be.an('object')
						expect(response.body.message).to.have.property('error');
						expect(response.body.message.error).to.be.equal('Room is Not Auctionable');
						expect(error).to.have.status(400);
						done();
					})
			});
			it('POST bid with amount less than minimal_bid must fail', (done) => {
				chai.request(app)
					.post("/bids/auction")
					.send(lessWithAmountBid)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(400);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.message).to.be.an('object')
						expect(response.body.message).to.have.property('error');
						expect(response.body.message.error).to.be.equal('Bid Amount Is less than minimal Bid Amount');
						expect(error).to.have.status(400);
						done();
					})
			});

			it('POST to Auctionable Room must Succed', (done) => {
				chai.request(app)
					.post("/bids/auction")
					.send(validBid)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(200);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.message).to.be.an('object')
						expect(response.body.message).to.have.property('bid');
						expect(error).to.be.equal(null);
						done();
					})
			})
		})

		describe('GET /bids/:bidId', () => {

			it('should return bid ', (done) => {
				chai.request(app)
					.get("/bids/" + validBidId)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(200);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.status).to.be.equal('success');
						expect(response.body.code).to.be.equal(200);
						expect(response.body.message).to.be.an('object')
						expect(response.body.message).to.have.property('bid');
						expect(error).to.be.equal(null);
						done();
					})
			})

			it('should return bid with null for invalid bidID', (done) => {
				chai.request(app)
					.get("/bids/" + invalidBidId)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(400);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.message).to.be.an('object')
						expect(response.body.status).to.be.equal('failure');
						expect(response.body.code).to.be.equal(500);
						done();
					})
			})
		})

		describe('GET /bids/room/:roomId', () => {

			it('should return bids for room Id provided ', (done) => {
				chai.request(app)
					.get("/bids/room/" + roomIdToActivate)
					.end((error, response) => {
						expect(response.statusCode).to.be.equal(200);
						expect(response.body).to.have.property('status');
						expect(response.body).to.have.property('code');
						expect(response.body).to.have.property('message');
						expect(response.body.status).to.be.equal('success');
						expect(response.body.code).to.be.equal(200);
						expect(response.body.message).to.be.an('object')
						expect(response.body.message).to.have.property('bids');
						expect(response.body.message.bids).to.have.an('array');
						expect(error).to.be.equal(null);
						done();
					})
			})
		})

	})



});