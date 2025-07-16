// db.js
 
const mongoose = require('mongoose');
const User = require("../models/User");
require('dotenv').config();

const users = ['Nitin', 'Kamal', 'Ritu', 'Anuj', 'Rohan', 'Divya', 'Manish', 'Priya', 'Sharvan', 'Kriti'];

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Delete all existing users (optional)
    await User.deleteMany({});

    // Insert new users
    await User.insertMany(users.map(name => ({ name })));

    console.log('Users seeded successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  } 
}

// Export the function properly:
module.exports =  seedUsers ;
