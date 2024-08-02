const express = require("express");
const router = express.Router();
const Model = require("../models/JoinClubModel");

router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body)
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.userid)
    .then((result) => {
      res.json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;  