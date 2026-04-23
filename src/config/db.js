import mongoose from "mongoose";

export async function connectDatabase(uri) {
  console.log(uri)
  await mongoose.connect(uri);
  console.log("User service connected to MongoDB");
}
