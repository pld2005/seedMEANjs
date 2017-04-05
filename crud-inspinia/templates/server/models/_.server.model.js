'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * <%= humanizedSingularName %> Schema
 */
var <%= classifiedSingularName %>Schema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Ingrese un valor para <%= humanizedSingularName %>, es obligatorio.',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('<%= classifiedSingularName %>', <%= classifiedSingularName %>Schema);
