import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";
import User from "../models/User.js";

const AuthMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
      console.log(req.cookies,'cookies');
      console.log(req.headers.cookies,'cookies');
    if (!token)
      return errorResponse(
        res,
        { message: "Unauthorized: Token missing" },
        401
      );

    //verify the token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded);
  } catch (error) {
    return errorResponse(res, error, 500);
  }
};

export default AuthMiddleware;
