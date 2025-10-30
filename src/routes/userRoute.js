import express from 'express';
import { singupValidator } from '../validators/singupValidator.js';
import { singinValidator } from '../validators/singninValidator.js';
import { singup ,singin} from '../controllers/UserController.js';
const router   = express.Router();

router.post('/singup',singupValidator,singup);
router.post('/singin',singinValidator,singin);

export default router;