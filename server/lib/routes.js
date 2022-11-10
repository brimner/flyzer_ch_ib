const express = require('express');
const discs = require('./controllers/discs');
//const assignmensts = require('./controllers/assignments');

let routes = express.Router();

routes.route('/discs')
  .get(discs.root)

routes.route('/discs/:disc')
  .get(discs.byDisc)

//routes.route('/assignments/:class')

//routes.route('/assignments/:class/:assignment')

module.exports = routes;
