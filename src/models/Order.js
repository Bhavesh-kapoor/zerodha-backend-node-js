import { model } from "mongoose";
import OrderSchema from "../schemas/OrderSchema.js";
const order = new model("order", OrderSchema);
module.exports = { order };
