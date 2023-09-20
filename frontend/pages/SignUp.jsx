import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import {
	validateEmail,
	validatePhoneNumber,
	validateUsername,
	validatePassword,
	validateFullName,
} from '../helpers/formValidators';

const SignUp = () => {
	const [userCreds, setUserCreds] = useState({
		firstCred: '',
		fullname: '',
		username: '',
		password: '',
	});

	const [credsValidity, setCredsValidity] = useState({
		firstCred: false,
		fullname: false,
		username: false,
		password: false,
	});

	const debouncedCreds = useDebounce(userCreds, 500);

	useEffect(() => {
		setCredsValidity({
			firstCred:
				validateEmail(debouncedCreds.firstCred) ||
				validatePhoneNumber(debouncedCreds.firstCred),
			fullname: validateFullName(debouncedCreds.fullname),
			username: validateUsername(debouncedCreds.username),
			password: validatePassword(debouncedCreds.password),
		});
	}, [debouncedCreds]);

	const handleInputChange = ({ target }) => {
		setUserCreds((prevUserCred) => ({
			...prevUserCred,
			[target.name]: target.value,
		}));
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="flex flex-col gap-4">
				<div className="signup-box px-12 py-8 border-[1px] flex flex-col gap-6">
					<img className="w-44 h-auto mx-auto mt-4 mb-2" src="/instaclone-black.png" />
					<div className="w-64 text-center text-slate-500 font-semibold">
						Sign up to see photos and videos from your friends
					</div>
					<form className="w-64 flex flex-col gap-2 text-xs">
						<input
							className={`bg-slate-50 p-3 rounded ${
								userCreds.firstCred.length > 0 && !credsValidity.firstCred
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="text"
							name="firstCred"
							value={userCreds.firstCred}
							onChange={handleInputChange}
							placeholder="Mobile Number or email"
						/>
						<input
							className={`bg-slate-50 p-3 rounded ${
								userCreds.fullname.length > 0 && !credsValidity.fullname
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="text"
							name="fullname"
							value={userCreds.fullname}
							onChange={handleInputChange}
							placeholder="Full Name"
						/>
						<input
							className={`bg-slate-50 p-3 rounded ${
								userCreds.username.length > 0 && !credsValidity.username
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="text"
							name="username"
							value={userCreds.username}
							onChange={handleInputChange}
							placeholder="Username"
						/>
						<input
							className={`bg-slate-50 p-3 rounded ${
								userCreds.password.length > 0 && !credsValidity.password
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="password"
							name="password"
							value={userCreds.password}
							onChange={handleInputChange}
							placeholder="Password"
						/>
						<p className="text-center text-slate-500 mt-6">
							By signing up, you agree to our Terms, Privacy Policy and Cookies Policy
						</p>
						<button
							type="button"
							className={`mt-2 bg-blue-500 text-sm text-white text-center font-bold py-2 rounded-lg ${
								credsValidity.firstCred &&
								credsValidity.fullname &&
								credsValidity.password &&
								credsValidity.username
									? ''
									: 'bg-opacity-70 pointer-events-none'
							}`}
							disabled={
								!credsValidity.firstCred ||
								!credsValidity.fullname ||
								!credsValidity.username ||
								!credsValidity.password
							}
							onClick={() => console.log('Signing up')}
						>
							Sign up
						</button>
					</form>
					{/* <div className="separator flex items-center">
						<div className="w-full h-[1px] bg-slate-200"></div>
						<span className="mx-4 text-slate-500 text-xs font-semibold">OR</span>
						<div className="w-full h-[1px] bg-slate-200"></div>
					</div> */}
				</div>
				<div className="signin-box text-sm text-center border-[1px] py-4">
					Have an account?{' '}
					<Link className="text-blue-500 font-semibold" to="/signin">
						Log in
					</Link>
				</div>
			</div>
			<div className="credit-line fixed bottom-10 text-sm text-slate-600 select-none">
				&copy; 2023 Duy Nguyen Le
			</div>
		</div>
	);
};

export default SignUp;
