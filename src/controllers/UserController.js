import User from "../models/User.js";
import { successResponse, errorResponse } from "../utils/response.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
import bcrypt from "bcrypt";
env.config();

export async function singup(req, res) {
  try {
    // get the req body from the req
    const { name, email, password } = req.body;
    // check if email already exist in database
    let userEmailExist = await User.findOne({ email });
    if (userEmailExist) {
      return errorResponse(res, { message: "Email already exist!" }, 409);
    }
    // if exist not exist then register this user
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    // create jwt token and store that token in cookies
    const token = await jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true,
      sameSite: "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });
    return successResponse(res, token, "User Registered Successfully!", 201);
  } catch (error) {
    return errorResponse(res, error, 500);
  }
}

export async function singin(req, res) {
  try {
    // get the req body from the req
    const { email, password } = req.body;
    // check if email already exist in database
    let user = await User.findOne({ email });
    if (!user) {
      return errorResponse(
        res,
        { message: "Invalid username or password" },
        409
      );
    }
    // compare password
    let auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return errorResponse(
        res,
        { message: "Invalid username or password" },
        409
      );
    }

    // create jwt token and store that token in cookies
    const token = await jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true,
      sameSite: "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });
    return successResponse(res, token, "User Login Successfully!", 200);
  } catch (error) {
    return errorResponse(res, error, 500);
  }
}
