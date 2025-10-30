import express from "express";
import env from "dotenv";
import ConnectDb from "./src/config/db.js";
import PositionRoutes from "./src/routes/positionRoute.js";
import HoldingRoute from "./src/routes/holdingsRoute.js";
import orderRoute from "./src/routes/orderRoute.js";
import userRoute from "./src/routes/userRoute.js";
import cors from "cors";
import AuthMiddleware from "./src/middlewares/AuthMiddleware.js";
import cookieParser from "cookie-parser";
env.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/positions", AuthMiddleware, PositionRoutes);
app.use("/api/holdings", HoldingRoute);
app.use("/api/orders", orderRoute);
app.use("/api/users", userRoute);

app.listen(3002, () => {
  console.log("App started!");
  ConnectDb();
});
