global.chai = require('chai')
global.expect = require('chai').expect
global.app = require('../src/app.js')
global.path = require('path');
chai.use(require('chai-as-promised'));
chai.use(require("chai-sorted"));
chai.use(require('chai-http'));
global.Room = require(path.resolve('./src/rooms/lib/index.js'));
global.Bid = require(path.resolve('./src/bids/lib/index.js'));