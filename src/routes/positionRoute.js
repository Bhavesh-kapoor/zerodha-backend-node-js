import express from "express";
import { fakeData, get } from "../controllers/PositionController.js";

const router = express.Router();
router.get("/fake-data", fakeData);
router.get("/", get);

export default router;
