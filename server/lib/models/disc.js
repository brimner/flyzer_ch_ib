const mongoose = require('mongoose');

const DiscSchema = mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  manufacturer: String,
  speed: Number,
  glide: Number,
  turn: Number,
  fade: Number
});

DiscSchema.query.byModel = function(name) {
  return this.where({model: name});
}

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
