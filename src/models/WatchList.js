import { model } from "mongoose";
import { watchlistSchema } from "../schemas/WatchListSchema.js";
const watchList = new model("watchList", watchlistSchema);
module.exports = { watchList };
