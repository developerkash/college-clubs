const express = require("express");
const router = express.Router();
const Model = require("../models/EventModel");

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

  router.get("/getall", (req, res) => {
    Model.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json.apply(err);
      });
  });

module.exports = router;  