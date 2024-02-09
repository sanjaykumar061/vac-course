import mongoose from "mongoose";

const connectDB = async () => {
  try {
const MONGO_URI ="mongodb+srv://sibi:MeuYCbR6iEUnptJi@cluster0.3az1wjg.mongodb.net/VAC?retryWrites=true&w=majority"
await mongoose.connect(process.env.MONGO_URL || MONGO_URI);
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
  }
};

export default connectDB;