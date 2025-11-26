import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URL);

    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`DB name: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // dừng server nếu không connect được
  }
};
