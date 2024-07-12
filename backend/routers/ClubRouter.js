const express = require('express'); // Importing express module to create a server instance and handle the requests and responses from the client side.
const router = express.Router();    // Creating an instance of express router.
const Model = require('../models/ClubModel'); // Importing the user model.

router.post('/add',  (req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })
})

router.get('/getall' , (req, res)=>{
    Model.find({})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json.apply(err)
    });
})

router.get('/getbyid/:id', (req, res)=>{
    Model.findById(req.params.id)           // params is used to get the parameters from the url.
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router; // Exporting the router to be used in other files.