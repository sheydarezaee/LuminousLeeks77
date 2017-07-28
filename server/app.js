'use strict';
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//module.exports.io = io;
const path = require('path');
const middleware = require('./middleware');
const sockets = require('./sockets/socketIO');

const routes = require('./routes');

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize()); 
app.use(middleware.passport.session()); 
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

sockets.socketIO.init(io);

app.use('/', routes.auth); 
app.use('/api', routes.api);
app.use('/api/profiles', routes.profiles);
app.use('/api/queueinfo', routes.queueInfo);
app.use('/api/partyinfo', routes.partyInfo);


module.exports.server = server;
