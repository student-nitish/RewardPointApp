const mongoose = require('mongoose');

// Define the schema
const historySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",  
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  pointsAdded:{
    type:Number,
    
  }
});

// Export the model
module.exports = mongoose.model('History', historySchema);
