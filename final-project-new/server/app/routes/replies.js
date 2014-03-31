/*'use strict';

var Reply = require('../models/reply');
var Mongo = require('mongodb');

exports.create = function(req, res){
  var db = global.nss.db;
  var replies = db.collection('replies');
  var reply = new Reply(req.body);
  replies.insert(reply, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = global.nss.db;
  var replies = db.collection('replies');
  replies.find().toArray(function(err,records){
    res.send({replies:records});
  });
};

exports.query = function(req, res){
  var db = global.nss.db;
  var replies = db.collection('replies');
  replies.find(req.query).toArray(function(err, records){
    res.send({replies:records});
  });
};

*/


