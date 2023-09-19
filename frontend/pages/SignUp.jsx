import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const [userCred, setUserCred] = useState({
		firstCred: '',
		fullname: '',
		username: '',
		password: '',
	});

	const handleInputChange = ({ target }) => {
		setUserCred((prevUserCred) => ({
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
							className="border-[1px] bg-slate-50 p-3 rounded"
							type="text"
							name="firstCred"
							value={userCred.firstCred}
							onChange={handleInputChange}
							placeholder="Mobile Number or email"
						/>
						<input
							className="border-[1px] bg-slate-50 p-3 rounded"
							type="text"
							name="fullname"
							value={userCred.fullname}
							onChange={handleInputChange}
							placeholder="Full Name"
						/>
						<input
							className="border-[1px] bg-slate-50 p-3 rounded"
							type="text"
							name="username"
							value={userCred.username}
							onChange={handleInputChange}
							placeholder="Username"
						/>
						<input
							className="border-[1px] bg-slate-50 p-3 rounded "
							type="password"
							name="password"
							value={userCred.password}
							onChange={handleInputChange}
							placeholder="Password"
						/>
						<p className="text-center text-slate-500 mt-6">
							By signing up, you agree to our Terms, Privacy Policy and Cookies Policy
						</p>
						<div className="mt-2 bg-blue-500 text-sm text-white text-center font-bold py-2 rounded-lg cursor-pointer">
							Sign up
						</div>
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
