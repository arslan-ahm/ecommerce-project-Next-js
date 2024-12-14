import mongoose from "mongoose";

export const connectToDb = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
  }
  // Already connected
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
};