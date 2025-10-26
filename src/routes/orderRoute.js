import express from  'express';
import { store ,get} from '../controllers/OrderController.js';
const router = express.Router();

router.get('/',get);
router.post('/',store);

export default router;