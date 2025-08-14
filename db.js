const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb+srv://bhrithiraina:bhrithi123@cluster0.qyfkbus.mongodb.net/userappnew?")

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async  function(req, res) {
  const username = req.body.username;
  const password = req.body.password ;
  const name = req.body.name ;

  // User.update, User.delete

  const existingUser = await User.findOne({email: username});
  // CRUD => Create, Update, Read, Delete
  if (existingUser) {
    return res.status(400).send("Username already exists")
  }
  
  const user = new User({ 
    name: name,
    email: username,
    password: password
  });

  await user.save();

  res.json({
  msg: "User created successfully"
  })
})

app.listen(3000);



// why can't we store data in a file or notepad , why we use databases
// 1. you don't have a standard way to store data 
// 2. Hard to distribute
// 3. Dbs are optimised for reads and writes
// 4. Dbs have logic for indexing to make some queries faster
