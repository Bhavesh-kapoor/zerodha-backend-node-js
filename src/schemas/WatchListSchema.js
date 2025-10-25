import { Schema } from "mongoose";

const watchlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  percent: {
    type: String,
    required: true,
  },
  isDown: {
    type: Boolean,
    required: true,
  },
});
mnodule.exports = { watchlistSchema };
