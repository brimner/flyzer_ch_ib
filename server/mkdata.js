const mongoose = require('mongoose');
const Disc = require('./lib/models/disc');

const aviar = new Disc({
  model: 'Aviar',
  manufacturer: 'Innova',
  speed: 3,
  glide: 2,
  turn: 0,
  fade: 1
});

const wraith = new Disc({
  model: 'Wraith',
  manufacturer: 'Innova',
  speed: 11,
  glide: 5,
  turn: -1,
  fade: 3
});

const crown = new Disc({
  model: 'Crown',
  manufacturer: 'Westside',
  speed: 3,
  glide: 4,
  turn: 0,
  fade: 1
});

const zone = new Disc({
  model: 'Zone',
  manufacturer: 'Discraft',
  speed: 4,
  glide: 3,
  turn: 0,
  fade: 1
});



mongoose.connect('mongodb://localhost:27017/flyzerOne', {useNewUrlParser: true, useUnifiedTopology: true});

aviar.save().catch(err => console.error(err)).then(() => { console.log('saved aviar') });
wraith.save().catch(err => console.error(err)).then(() => { console.log('saved wraith') });

