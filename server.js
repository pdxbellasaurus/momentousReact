const express = require("express");
const path = require("path");
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup store and Connect to the Mongo DB
const mongoDBstore = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/momentousv2", 
  collection: "sessions"
})
  
//express mongodbstore session
app.use(session({
    secret: 'This is a secret', //SESS_SECRET
    resave: true,
    saveUninitialized: true, //false
    store: mongoDBstore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

// Add routes, both API and view
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/momentousv2",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
      }
  );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
