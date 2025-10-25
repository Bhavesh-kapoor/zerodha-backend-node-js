import express from "express";
import { fakeData } from "../controllers/PositionController.js";

const router = express.Router();
router.get("/positions/fake-data", fakeData);

export default router;
