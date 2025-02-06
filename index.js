import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./connect.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"], // Add your frontend URL here
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
// Add routes here

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
