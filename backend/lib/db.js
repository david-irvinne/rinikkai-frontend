import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("konekin dulu bang");
  console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected ${conn.connection.host}`);
  } catch (error) {
    console.log("error connecting to database", error);
    process.exit(1);
  }
}

