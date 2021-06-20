const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/momentousv2",
  { useNewUrlParser: true }, { useUnifiedTopology: true }
);

const eventSeed = [
  {
    title: "Test Event 1",
    description: " Event Testing is super fun, join in the testing event, right meow"
  },

];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/momentousv2",
    { useNewUrlParser: true }
  );
  
  const userSeed = [
    {
     firstName: "Test",
     lastName: "User",
     username: "testusername",
     password: "Pass123",
     email: "test@email.com"
    },
  
  ];
  
  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });