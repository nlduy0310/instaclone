import React, { useState, useEffect } from 'react';
import { Link, json, useAsyncError } from 'react-router-dom';
import axios from 'axios';
import RequireLogin from '../components/RequireLogin';
import PropagateLoader from 'react-spinners/PropagateLoader';
import NavBar from '../components/layout/NavBar';
import StoryStack from '../components/Home/StoryStack';
import NewsFeed from '../components/Home/NewsFeed';
import SidePanel from '../components/Home/SidePanel';

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

	const [stories, setStories] = useState([]);

	useEffect(() => {
		// load data from db
		let data = [
			{
				key: 0,
				profilePic: '/proto/lalalalisa_m.jpg',
				hasSeen: false,
				username: 'lalalalisa_m',
			},
			{
				key: 1,
				profilePic: '/proto/mia.soya.jpg',
				hasSeen: false,
				username: 'mia.soya',
			},
			{
				key: 2,
				profilePic: '/proto/cloud.dokhanhvan.jpg',
				hasSeen: false,
				username: 'cloud.dokhanhvan',
			},
			{
				key: 3,
				profilePic: '/proto/smudge_lord.jpg',
				hasSeen: false,
				username: 'smudge_lord',
			},
			{
				key: 4,
				profilePic: '/proto/lnavna.jpg',
				hasSeen: false,
				username: 'lnavna',
			},
			{
				key: 5,
				profilePic: '/proto/jessybarden.jpg',
				hasSeen: false,
				username: 'jessybarden',
			},
			{
				key: 6,
				profilePic: '/proto/kickthepj.jpg',
				hasSeen: false,
				username: 'kickthepj',
			},
			{
				key: 7,
				profilePic: '/proto/may__lily.jpg',
				hasSeen: false,
				username: 'may__lily',
			},
			{
				key: 8,
				profilePic: '/proto/ananasvn.jpg',
				hasSeen: false,
				username: 'ananasvn',
			},
			{
				key: 9,
				profilePic: '/proto/itsmarziapie.jpg',
				hasSeen: true,
				username: 'itsmarziapie',
			},
			{
				key: 10,
				profilePic: '/proto/billieeilish.jpg',
				hasSeen: true,
				username: 'billieeilish',
			},
			{
				key: 11,
				profilePic: '/proto/vac.closet.jpg',
				hasSeen: true,
				username: 'vac.closet',
			},
		];
		setStories(data);
	}, []);

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
		<div className="bg-gray-200 w-full h-full text-center">
			<div className="w-fit mx-auto mt-12 flex flex-row gap-12">
				<div className="shrink-0">
					<StoryStack data={stories} />
					<NewsFeed />
				</div>
				<div>
					<SidePanel />
				</div>
			</div>
		</div>
	);
};

export default Home;
