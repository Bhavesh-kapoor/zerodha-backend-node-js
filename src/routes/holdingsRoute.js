import express from "express";
import { fakeData } from "../controllers/HoldingController.js";
const router = express.Router();

router.get("/holdings/fake",fakeData);

export default router;
