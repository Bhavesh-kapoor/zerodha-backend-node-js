import { model } from "mongoose";
import UserSchema from "../schemas/UserSchema.js";

const User = new model("user", UserSchema);
export default User;
