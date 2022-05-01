'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var LeaderboardSchema = Schema( {
  userId: ObjectId,
  name: String,
  description: String,
  score: Number,
  createdAt: Date,
} );

module.exports = mongoose.model( 'LeaderboardItem', LeaderboardSchema );
