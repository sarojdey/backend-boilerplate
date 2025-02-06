import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const mongoUri =
      process.env.STATUS === "production"
        ? process.env.MONGO_URI
        : process.env.LOCAL_MONGO_URI || "mongodb://localhost:27017/";

    if (!mongoUri) {
      throw new Error("MongoDB URI not configured");
    }

    const dbConnection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`DB connected to: ${dbConnection.connection.host}`);
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
