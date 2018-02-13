const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    first_name: "Alex",
    last_name: "Walz",
    email:"alexwalz@icloud.com",
    phone: "801-661-4344",
    message: "I'm interested in selling your products.  How do I get in touch with your company?",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Ryan",
    last_name: "Walz",
    email:"rynwlz@gmail.com",
    phone: "801-377-3234",
    message: "This is just a fake message to seed information with.  I have no idea what else to write on here.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Lexie",
    last_name: "Walz",
    email:"lexiewalz@icloud.com",
    phone: "801-435-6372",
    message: "This is a message from Lexie.  I am inquiring information about your stuff for sale.  I'm really interested in it.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },  {
    first_name: "Brian",
    last_name: "Bolnick",
    email:"brianbolnick@icloud.com",
    phone: "801-478-1205",
    message: "This is a message from Brian.  I am inquiring information about your stuff for sale.  I'm really interested in it.  I don't really know what else to write.",
    business: "Gilla Goat",
    status: "Pending",
    role: "End User",
    date: new Date(Date.now())
  },

  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
