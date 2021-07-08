const express = require("express");
const path = require("path");
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);
const 

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup store and Connect to the Mongo DB
const mongoDBstore = new MongoDBStore(
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/momentousv2",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  }
  ));
  
//express mongodbstore session
app.use(session({
  url: process.env.MONGOLAB_URI,
    secret: 'This is a secret', //SESS_SECRET
    resave: true,
    saveUninitialized: true, //false
    store: mongoDBstore,
    cookie: {
      // maxAge: 300000,
      // sameSite: false,
      // secure: IS_PROD
    }
  })
);

// Add routes, both API and view
app.use(routes);

// // Serve up static assets 
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


if(process.env.NODE_ENV === 'production'){
  // set static folder:
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("*", (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
