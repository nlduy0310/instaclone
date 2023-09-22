import { validationResult } from 'express-validator';

let controllers = {};

controllers.handleRegister = (req, res) => {
	const valRes = validationResult(req);
	if (!valRes.isEmpty()) {
		return res.json(valRes);
	}

	res.send('Successful sign up');
};

export default controllers;
