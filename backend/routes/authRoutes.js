import express from 'express';
import AuthControllers from '../controllers/authControllers.js';
import { signupValidator, signinValidator } from '../configs/validators.js';
import { ensureAuthenticated } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.post('/register', signupValidator(), AuthControllers.handleRegister);
router.post('/login', signinValidator(), AuthControllers.handleLogin);
router.post('/logout', ensureAuthenticated, AuthControllers.handleLogout);
router.get('/userdata', ensureAuthenticated, AuthControllers.sendUserData);

export default router;
