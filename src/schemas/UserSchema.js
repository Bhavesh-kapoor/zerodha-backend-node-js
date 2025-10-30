import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    required: true,
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre("save", async  function(next) {
    if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next()
});

export default UserSchema;
