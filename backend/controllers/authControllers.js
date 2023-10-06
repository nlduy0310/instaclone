import { validationResult } from 'express-validator';
import { validateEmail } from '../configs/validators.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { PWHASH_SALT_ROUNDS } from '../configs/app.config.js';
import passport from 'passport';
let controllers = {};

controllers.handleRegister = (req, res, next) => {
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

controllers.handleLogin = (req, res, next) => {
	const valRes = validationResult(req);

	if (!valRes.isEmpty()) {
		console.log(valRes);
		return res.json({ success: false, message: 'Invalid request!' });
	}

	passport.authenticate('local', (err, user, info) => {
		if (err) return next(err);

		if (!user) return res.json(info);

		req.login(user, function (err) {
			if (err) return next(err);
			return res.json(info);
		});
	})(req, res, next);
};

controllers.handleLogout = (req, res, next) => {
	req.logout(function (err) {
		if (err) return next(err);
		res.send({ success: true, message: 'Logged out successfully' });
	});
};

controllers.sendUserData = async (req, res, next) => {
	// retrieve data from db
	let data = await User.findById(req.user._id);

	return res.json(data);
};

controllers.getAuthStatus = (req, res) => {
	if (req.isAuthenticated()) return res.json({ isAuthenticated: true });
	return res.json({ isAuthenticated: false });
};

export default controllers;
