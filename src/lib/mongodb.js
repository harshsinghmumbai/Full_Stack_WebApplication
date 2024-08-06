import mongoose from "mongoose";

export async function ConnectMongoDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error on MongobDB File", error);
  }
}
