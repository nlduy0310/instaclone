import { validationResult } from 'express-validator';
import { validateEmail } from '../configs/validators.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { PWHASH_SALT_ROUNDS } from '../configs/app.config.js';
let controllers = {};

controllers.handleRegister = (req, res) => {
	const valRes = validationResult(req);

	if (!valRes.isEmpty()) {
		console.log(valRes);
		return res.json({ success: false, message: 'Invalid request!' });
	}

	let firstCredFieldName;
	if (validateEmail(req.body.firstCred)) firstCredFieldName = 'email';
	else firstCredFieldName = 'phone';

	let userData = {
		[firstCredFieldName]: req.body.firstCred,
		username: req.body.username,
		fullname: req.body.fullname,
		email: req.body.email,
		pwhash: bcrypt.hashSync(req.body.password, PWHASH_SALT_ROUNDS),
	};

	User.create(userData)
		.then((response) => {
			console.log(`Successful sign up: ${response}`);
			return res.json({
				success: true,
				message: 'Signed up successfully! Try logging in with your account!',
			});
		})
		.catch((err) => {
			console.log(`Sign up failed: ${err}`);
			// TODO Return specific error message to client
			return res.json({
				success: false,
				message: 'Failed to sign up, please try again!',
			});
		});
};

export default controllers;
