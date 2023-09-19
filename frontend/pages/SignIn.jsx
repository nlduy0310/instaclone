import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const [loginCreds, setLoginCreds] = useState({
		firstCred: '',
		password: '',
	});

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
							className="w-64 border-[1px] bg-slate-50 p-3 rounded"
							type="text"
							name="firstCred"
							value={loginCreds.firstCred}
							onChange={handleInputChange}
							placeholder="Phone number, username, or email"
						/>
						<input
							className="w-64 border-[1px] bg-slate-50 p-3 rounded "
							type="password"
							name="password"
							value={loginCreds.password}
							onChange={handleInputChange}
							placeholder="Password"
						/>
						<div className="mt-2 bg-blue-500 text-sm text-white text-center font-bold py-2 rounded-lg cursor-pointer">
							Log in
						</div>
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
