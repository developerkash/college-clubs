const express = require('express');
const router = express.Router();
const Model = require('../models/UserModel');

const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
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

// : denotes url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {

            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

// Login credentials validation and token generation 
router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, first_name,last_name, email, role } = result;
                const payload = { _id, first_name,last_name, email, role };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '10 days' },
                    (err, token) => {

                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error creating token' })
                        } else {
                            res.status(200).json({ token, first_name,last_name,role })
                        }

                    }

                )
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
});

router.get('/getbyemail/:email', (req,res) => {
    Model.findOne({ email: req.params.email})
    .then((result) => {
        if(result) res.status(200).json(result)
        else res.status(404).json({message:'User not found'})
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
    console.log(req.body);
})
module.exports = router;