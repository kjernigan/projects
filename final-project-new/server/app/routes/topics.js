'use strict';

var Topic = require('../models/topic');
var Mongo = require('mongodb');

exports.create = function(req, res){
  var db = global.nss.db;
  var topics = db.collection('topics');
  var topic = new Topic(req.body);
  topics.insert(topic, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = global.nss.db;
  var topics = db.collection('topics');
  topics.find().toArray(function(err,records){
    res.send({topics:records});
  });
};

exports.update = function(req, res){
  var db = global.nss.db;
  var topics = db.collection('topics');

  var topic = new Topic(req.body);
  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};

  topics.update(query, topic, function(err, count){
    res.send({updated:count, id:req.params.id, topic:topic});
  });
};

exports.query = function(req, res){
  var db = global.nss.db;
  var topics = db.collection('topics');
  topics.find(req.query).toArray(function(err, records){
    res.send({topics:records});
  });
};




