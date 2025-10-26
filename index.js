import express from "express";
import env from "dotenv";
import ConnectDb from "./src/config/db.js";
import PositionRoutes from "./src/routes/positionRoute.js";
import HoldingRoute from "./src/routes/holdingsRoute.js";
import orderRoute from "./src/routes/orderRoute.js";
import cors from 'cors';
import bodyParser from "body-parser";
env.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/positions", PositionRoutes);
app.use("/api/holdings", HoldingRoute);
app.use("/api/orders",orderRoute );

app.listen(3002, () => {
  console.log("App started!");
  ConnectDb();
});
