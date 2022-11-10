const Disc = require('../models/disc');

module.exports = {
  root: (req, res) => {
    Disc.find().exec((err, discs) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let disk of discs) {
        ret.push(disk);
      }
      res.json(ret);
    })
  },
  byDisc: (req, res) => {
    const model = req.params.disc;

    Disc.findOne().byModel(model).exec((err, disk) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!disk) {
        res.status(404);
        res.json({'err': 'disc not found'});
        return;
      }
      console.log('sending disc: ' + disk)
      res.json(disk);
    })
  }
}
