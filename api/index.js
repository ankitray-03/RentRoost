import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// all routes
import UserRoutes from "./routes/user.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import ListingRoutes from "./routes/listing.routes.js";
import path from "path";

// connection to mongodb databse
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection to database Successfull !!");
  })
  .catch((err) => {
    console.log(err);
  });
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

// running the app
app.listen(process.env.PORT, () => {
  console.log("Running on PORT : 3000");
});

// all api's routes
app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/listing", ListingRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// middlewares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
