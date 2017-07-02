/**
 * Created by M-Rayees on 02/07/2017.
 */

const http = require('http');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const logger = require('morgan');
const debug = require('debug')('roomsquickly:server');
const config = require('./config')
require('./db').connect(config.database.getConnectionString("dev"));

let app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

const rooms = require('./rooms/routes');
const bids = require('./bids/routes');
app.use(express.static(path.join(__dirname, 'out/roomsquickly/0.0.0/')));
app.use('/rooms', rooms)
app.use('/bids', bids)

module.exports=app;