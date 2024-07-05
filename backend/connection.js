const mongoose = require('mongoose'); // Importing mongoose module to connect to the MongoDB database.

// Connecting to the MongoDB database using the connect method of mongoose.
const url = 'mongodb+srv://mongodbakash:root@cluster0.61pu3kq.mongodb.net/mongodatabase?retryWrites=true&w=majority&appName=Cluster0'; // URL of the MongoDB database.
mongoose.connect(url)  // Connecting to the MongoDB database using the connect method of mongoose.



// Handling the promise returned by the connect method.
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database', err);
});


module.exports = mongoose; // Exporting the mongoose module to be used in other files.