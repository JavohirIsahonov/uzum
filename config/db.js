const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);  // This sets 'strictQuery' to true, which allows stricter query behavior
    const connecting = await mongoose.connect(process.env.MONGO_URI);  // Mongoose connection using URI from .env file
    console.log(`Mongose connected: ${connecting.connection.host}`.bgGreen);  // Logging successful connection
  } catch (err) {
    console.log(`Error mavjud Chotta, ${err.message}`);  // Error message with a playful note in Uzbek
    process.exit(1);  // Exit the process with a failure code if connection fails
  }
};

module.exports = connectDB;  // Exporting the function to be used elsewhere in your project
