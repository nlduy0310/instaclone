import React, { useState, useEffect } from 'react';
import { Link, json, useAsyncError } from 'react-router-dom';
import axios from 'axios';
import RequireLogin from '../components/Home/RequireLogin';
import PropagateLoader from 'react-spinners/PropagateLoader';
import NavBar from '../components/Home/NavBar';

const Home = () => {
	// const [isLoading, setIsLoading] = useState(true);
	// const [authStatus, setAuthStatus] = useState(false);
	// const [userData, setUserData] = useState({});

	// useEffect(() => {
	// 	axios
	// 		.get('/auth/status')
	// 		.then((response) => {
	// 			if (response?.data) {
	// 				if (response.data?.isAuthenticated) setAuthStatus(true);
	// 				else setAuthStatus(false);
	// 				setIsLoading(false);
	// 			} else {
	// 				// TODO show error message
	// 				setAuthStatus(false);
	// 				setIsLoading(false);
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.error(err.message);
	// 		});
	// }, []);

	// if (authStatus) {
	// 	axios
	// 		.get('/auth/userdata')
	// 		.then((response) => {
	// 			setUserData(response.data);
	// 		})
	// 		.catch((err) => {
	// 			setUserData({ error: 'Bad request' });
	// 		});
	// }

	return (
		// <>
		// 	{isLoading ? (
		// 		<div className="w-full h-full flex items-center justify-center">
		// 			<PropagateLoader></PropagateLoader>
		// 		</div>
		// 	) : authStatus ? (
		// 		<div>
		// 			<div>You are logged in</div>
		// 			<div>{JSON.stringify(userData)}</div>
		// 			<button>Log out</button>
		// 		</div>
		// 	) : (
		// 		<RequireLogin />
		// 	)}
		// </>
		<div className="w-full h-full flex flex-row">
			<NavBar />
		</div>
	);
};

export default Home;
