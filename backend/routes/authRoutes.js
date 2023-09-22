import express from 'express';
import AuthControllers from '../controllers/authControllers.js';
import { signupValidator } from '../configs/validators.js';
import { validationResult } from 'express-validator';

const router = express.Router();

router.post('/register', signupValidator(), AuthControllers.handleRegister);

export default router;
