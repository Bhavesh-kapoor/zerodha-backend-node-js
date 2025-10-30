import { HoldingsModel } from "../models/Holdings.js";
import { errorResponse, successResponse } from "../utils/response.js";

export function fakeData(req, res) {
  let holdingData = [
    {
      name: "TCS",
      qty: 25,
      avg: 3600.5,
      price: 3725.9,
      net: "+3.48%",
      day: "+1.24%",
    },
    {
      name: "Infosys",
      qty: 40,
      avg: 1495.8,
      price: 1523.4,
      net: "+1.85%",
      day: "+0.56%",
    },
    {
      name: "HDFC Bank",
      qty: 30,
      avg: 1560.3,
      price: 1588.1,
      net: "+1.78%",
      day: "+0.42%",
    },
    {
      name: "Reliance",
      qty: 20,
      avg: 2475.0,
      price: 2459.8,
      net: "-0.61%",
      day: "-0.33%",
    },
    {
      name: "ICICI Bank",
      qty: 35,
      avg: 1018.4,
      price: 1045.7,
      net: "+2.68%",
      day: "+0.95%",
    },
    {
      name: "Kotak Bank",
      qty: 22,
      avg: 1820.6,
      price: 1798.9,
      net: "-1.19%",
      day: "-0.52%",
    },
    {
      name: "Axis Bank",
      qty: 40,
      avg: 995.3,
      price: 1008.7,
      net: "+1.35%",
      day: "+0.72%",
    },
    {
      name: "Bajaj Finance",
      qty: 10,
      avg: 6980.2,
      price: 7125.5,
      net: "+2.08%",
      day: "+1.01%",
    },
    {
      name: "Adani Ports",
      qty: 18,
      avg: 1215.9,
      price: 1198.2,
      net: "-1.45%",
      day: "-0.69%",
    },
    {
      name: "Asian Paints",
      qty: 14,
      avg: 3105.6,
      price: 3158.9,
      net: "+1.72%",
      day: "+0.58%",
    },
    {
      name: "HUL",
      qty: 16,
      avg: 2390.4,
      price: 2408.1,
      net: "+0.74%",
      day: "+0.22%",
    },
    {
      name: "LT",
      qty: 20,
      avg: 3435.0,
      price: 3452.5,
      net: "+0.51%",
      day: "+0.29%",
    },
  ];

  holdingData.forEach((holding) => {
    let newHolding = new HoldingsModel({
      name: holding.name,
      qty: holding.qty,
      avg: holding.avg,
      price: holding.price,
      net: holding.net,
      day: holding.day,
    });
    newHolding.save();
  });
  res.send("Data saved successfully!");
}

export async function get(req, res) {
 
  try {
      const holdingData = await HoldingsModel.find();
     return  successResponse(
        res,
        holdingData,
        "Holding Data  fetch successfully!",
        200
      );
    } catch (error) {
      errorResponse(res, error, 500);
    }
}
