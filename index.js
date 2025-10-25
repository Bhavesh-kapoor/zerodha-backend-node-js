import express from "express";
import env from "dotenv";
import ConnectDb from "./src/config/db.js";
import PositionRoutes from "./src/routes/positionRoute.js";
import HoldingRoute from "./src/routes/holdingsRoute.js";
env.config();
const app = express();

app.use(express.json());
app.use("/api", PositionRoutes);
app.use("/api", HoldingRoute);

app.listen(3002, () => {
  console.log("App started!");
  ConnectDb();
});
