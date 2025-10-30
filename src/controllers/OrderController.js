import Order from "../models/Order.js";
import { successResponse, errorResponse } from "../utils/response.js";

//get orders list
export async function get(req, res) {
  try {
    const orderData = await Order.find().sort();
    successResponse(res, orderData, `Order fetched successfully `, 200);
  } catch (error) {
    errorResponse(res, error, 500);
  }
}
// store order in db
export async function store(req, res) {
  try {
    const { name, quantity, price, mode } = req.body;

    const OrderData = new Order({
      name: name,
      qty: quantity,
      price: price,
      mode: mode,
    });
    let data = await OrderData.save();
   return successResponse(res, data, `Order ${mode} successfully `, 201);
  } catch (error) {
    return errorResponse(res, error, 500);
  }
}
