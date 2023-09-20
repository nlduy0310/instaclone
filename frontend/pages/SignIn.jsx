import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	validateEmail,
	validatePhoneNumber,
	validateUsername,
	validatePassword,
} from '../helpers/formValidators';
import useDebounce from '../hooks/useDebounce';
const SignIn = () => {
	const [loginCreds, setLoginCreds] = useState({
		firstCred: '',
		password: '',
	});

	const [credsValidity, setCredsValidity] = useState({
		firstCred: false,
		password: false,
	});

	const debouncedCreds = useDebounce(loginCreds, 500);

	useEffect(() => {
		setCredsValidity({
			firstCred:
				validateEmail(debouncedCreds.firstCred) ||
				validatePhoneNumber(debouncedCreds.firstCred) ||
				validateUsername(debouncedCreds.firstCred),
			password: validatePassword(debouncedCreds.password),
		});
	}, [debouncedCreds]);

	const handleInputChange = ({ target }) => {
		setLoginCreds((prevLoginCreds) => ({
			...prevLoginCreds,
			[target.name]: target.value,
		}));
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="flex flex-col gap-4">
				<div className="signin-box px-12 py-8 border-[1px] flex flex-col gap-6">
					<img className="w-44 h-auto mx-auto mt-4 mb-6" src="/instaclone-black.png" />
					<form className="flex flex-col gap-2 text-xs">
						<input
							className={`w-64 bg-slate-50 p-3 rounded ${
								loginCreds.firstCred.length > 0 && !credsValidity.firstCred
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="text"
							name="firstCred"
							value={loginCreds.firstCred}
							onChange={handleInputChange}
							placeholder="Phone number, username, or email"
						/>
						<input
							className={`w-64 bg-slate-50 p-3 rounded ${
								loginCreds.password.length > 0 && !credsValidity.password
									? 'border-red-600 border-2'
									: 'border-[1px]'
							}`}
							type="password"
							name="password"
							value={loginCreds.password}
							onChange={handleInputChange}
							placeholder="Password"
						/>
						<button
							type="button"
							className={`mt-2 bg-blue-500 text-sm text-white text-center font-bold py-2 rounded-lg cursor-pointer ${
								!credsValidity.firstCred || !credsValidity.password
									? 'opacity-70 pointer-events-none'
									: ''
							}`}
							disabled={!credsValidity.firstCred || !credsValidity.password}
							onClick={() => console.log('Loggin in')}
						>
							Log in
						</button>
					</form>
					<div className="separator flex items-center">
						<div className="w-full h-[1px] bg-slate-200"></div>
						<span className="mx-4 text-slate-500 text-xs font-semibold">OR</span>
						<div className="w-full h-[1px] bg-slate-200"></div>
					</div>
					<Link className="text-center text-xs text-blue-900" to="/resetpassword">
						Forgot password?
					</Link>
				</div>
				<div className="signup-box text-sm text-center border-[1px] py-4">
					Don&prime;t have an account?{' '}
					<Link className="text-blue-500 font-semibold" to="/signup">
						Sign up
					</Link>
				</div>
			</div>
			<div className="credit-line fixed bottom-10 text-sm text-slate-600 select-none">
				&copy; 2023 Duy Nguyen Le
			</div>
		</div>
	);
};

export default SignIn;
