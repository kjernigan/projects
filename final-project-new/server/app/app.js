'use strict';

var dbname = 'forum';
var port = process.env.PORT || 4000;

var d = require('./lib/request-debug');
var cors = require('./lib/cors');
var initMongo = require('./lib/init-mongo');
var initRoutes = require('./lib/init-routes');
var topics = require('./routes/topics');
var home = require('./routes/home');

var express = require('express');
var app = express();

/* --- pipeline begins */
app.use(initMongo.connect);
app.use(initRoutes);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(cors);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', d, home.index);
app.post('/topics', d, topics.create);
app.get('/topics', d, topics.index);
app.get('/topics/query', d, topics.query);
app.put('/topics', d, topics.update);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

module.exports = app;

