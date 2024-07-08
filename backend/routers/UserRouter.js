const express = require('express'); // Importing express module to create a server instance and handle the requests and responses from the client side.
const router = express.Router();    // Creating an instance of express router.
const Model = require('../Models/UserModel'); // Importing the user model.
const verifyToken = require('./VerifyToken'); // Importing the verifyToken function from the VerifyToken.js file.
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken module to create a token.
require('dotenv').config(); // Importing the dotenv module to access the environment variables.

 router.post('/add',  (req, res)=>{
     console.log(req.body);
     new Model(req.body).save()
    
     .then((result)=>{
         res.send(result);
     }).catch((err)=>{
         res.send(err);
    })
})

router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id,first_name, last_name, email, contact  } = result
                const payload = { _id, first_name, last_name, email, contact  };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '10 days' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error creating token' })
                        } else {
                            res.status(200).json({ token, first_name, last_name, email, contact })
                        }
                    }
                )
            }
            else res.status(401).json({ message: 'Login Failed' })
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})



module.exports = router; // Exporting the router to be used in other files.