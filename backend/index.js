const express = require('express'); 
const app = express();             
const port = 5000;                  
const cors = require('cors');       
const ClubRouter = require('./routers/ClubRouter'); 
const UserRouter = require('./routers/UserRouter'); 
const utilRouter = require('./routers/utils'); 
const ContactRouter = require('./routers/ContactRouter');
const EventRouter = require('./routers/EventRouter');
const AnnouncementsRouter = require('./routers/AnnouncementsRouter')
const JoinClubRouter = require('./routers/JoinClubRouter');


app.use(express.json());            

// Using the cors() middleware to allow cross-origin requests. (For development purposes only.
app.use(cors(
    {
        origin: 'http://localhost:3000', // The origin URL of the frontend application that is allowed to access the server.
        credentials: true,               // Setting the credentials option to true to allow cookies to be sent from the frontend to the server.
    }
));                    

app.use('/user', UserRouter);  
app.use('/club',ClubRouter);  
app.use('/util',utilRouter); 
app.use('/contact',ContactRouter);
app.use('/event',EventRouter);
app.use('/announcements',AnnouncementsRouter)
app.use(express.static('./uploads')); 
app.use('/joinclub',JoinClubRouter);


// Starting the server on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});