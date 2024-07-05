const express = require('express'); // Importing express module to create a server instance and handle the requests and responses from the client side.
const router = express.Router();    // Creating an instance of express router.
const Model = require('../Models/UserModel'); // Importing the user model.

router.post('/add',  (req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })
})



module.exports = router; // Exporting the router to be used in other files.