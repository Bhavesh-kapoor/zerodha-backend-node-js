import express from "express";
import { fakeData, get } from "../controllers/HoldingController.js";
const router = express.Router();

router.get("/fake",fakeData);
router.get('/',get);

export default router;
