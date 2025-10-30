import { body, validationResult } from "express-validator";
import { errorResponse } from "../utils/response.js";

export const singupValidator = [
  body("name").notEmpty().withMessage("Name is required!"),

  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid Email!"),

  body("password").notEmpty().withMessage("Password is required!"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.message = "Validation Failed";
      errorResponse(res, errors, 422);
    }
    next();
  },
];
