import { body } from 'express-validator';

const VALID_EMAIL_PATTERN = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
const VALID_PHONE_PATTERN = new RegExp(/^[0-9]{10,12}$/);
const VALID_USERNAME_PATTERN = new RegExp(/^[a-zA-z0-9]{8,30}$/);
const VALID_PASSWORD_PATTERN = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/); // min 8 chars, at least 1 number and one letter
const VALID_FULLNAME_PATTERN = new RegExp(/^[a-zA-Z][0-9a-zA-Z .,'-]{2,40}$/);

export function validateEmail(email) {
	if (VALID_EMAIL_PATTERN.test(email)) return true;
	return false;
}

export function validatePhoneNumber(phone) {
	if (VALID_PHONE_PATTERN.test(phone)) return true;
	return false;
}

export function validateUsername(username) {
	if (VALID_USERNAME_PATTERN.test(username)) return true;
	return false;
}

export function validatePassword(password) {
	if (VALID_PASSWORD_PATTERN.test(password)) return true;
	return false;
}

export function validateFullName(fullname) {
	if (VALID_FULLNAME_PATTERN.test(fullname)) return true;
	return false;
}

// TODO need refactoring
const emailOrPhoneValidator = () => {
	return body('firstCred')
		.exists()
		.isString()
		.trim()
		.escape()
		.custom((value) => validateEmail(value) || validatePhoneNumber(value));
};

const usernameOrEmailOrPhoneValidator = () => {
	return body('firstCred')
		.exists()
		.isString()
		.trim()
		.escape()
		.custom(
			(value) => validateUsername(value) || validateEmail(value) || validatePhoneNumber(value)
		);
};

const usernameValidator = () => {
	return body('username')
		.exists()
		.isString()
		.trim()
		.escape()
		.custom((value) => validateUsername(value));
};

const fullnameValidator = () => {
	return body('fullname')
		.exists()
		.isString()
		.trim()
		.escape()
		.custom((value) => validateFullName(value));
};

const passwordValidator = () => {
	return body('password')
		.exists()
		.isString()
		.trim()
		.custom((value) => validatePassword(value));
};

export const signupValidator = () => {
	return [emailOrPhoneValidator(), usernameValidator(), fullnameValidator(), passwordValidator()];
};

export const signinValidator = () => {
	return [usernameOrEmailOrPhoneValidator(), passwordValidator()];
};
