const express = require('express'); // Importing express module to create a server instance and handle the requests and responses from the client side. 
const app = express();              // Creating an instance of express server. 
const port = 5000;                  // Port number where the server will run.
const cors = require('cors');       // Importing cors module to allow cross-origin requests.
const ClubRouter = require('./routers/ClubRouter'); // Importing the UserRouter from the routers folder.
const UserRouter = require('./routers/UserRouter'); // Importing the UserRouter from the routers folder.

app.use(express.json());            // Using the express.json() middleware to parse the incoming requests with JSON payloads.

// Using the cors() middleware to allow cross-origin requests. (For development purposes only.
app.use(cors(
    {
        origin: 'http://localhost:3000', // The origin URL of the frontend application that is allowed to access the server.
        credentials: true,               // Setting the credentials option to true to allow cookies to be sent from the frontend to the server.
    }
));                    

app.use('/user', UserRouter);  // Using the UserRouter for handling the requests to the '/user' endpoint.
app.use('/club',ClubRouter);  // Using the ClubRouter for handling the requests to the '/club' endpoint.

// Starting the server on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});