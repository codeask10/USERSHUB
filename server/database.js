
const mongoose =require( 'mongoose');
const dotenv = require('dotenv');
dotenv.config();

// MongoDB connection URL
const mongoUrl=process.env.REACT_APP_MONGODB_URL;


// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options if needed
};

// Connecting to MongoDB
const connectToMongoose=()=>{
mongoose.connect(mongoUrl, options)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports =  connectToMongoose;
