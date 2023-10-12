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
	const [posts, setPosts] = useState([]);

	async function fetchPosts() {
		return [
			{
				id: 'ay5o2',
				username: 'sontungmtp',
				userVerified: true,
				userImg: '/proto/profile/sontungmtp.jpg',
				hasStories: false,
				hasUnseenStories: true,
				postContent: {
					// TODO parse this information from a Date object
					postedSince: 'Oct 11, 2023',
					postedFor: '1d',
					images: [
						'/proto/posts/sontungmtp/1/1.jpg',
						'/proto/posts/sontungmtp/1/2.jpg',
						'/proto/posts/sontungmtp/1/3.jpg',
						'/proto/posts/sontungmtp/1/4.jpg',
					],
					caption: 'Thứ tư nên cứ từ từ ... 😌',
					likedContact: {
						username: 'lq.haitu.jpg',
						userImg: '/proto/posts/sontungmtp/1/liked_by/lq.haitu.jpg',
					},
					nLikes: 181752,
					nComments: 1357,
				},
			},
		];
	}

	useEffect(() => {
		// load data from db
		let fetchedStories = [
			{
				key: 0,
				profilePic: '/proto/profile/lalalalisa_m.jpg',
				hasSeen: false,
				username: 'lalalalisa_m',
			},
			{
				key: 1,
				profilePic: '/proto/profile/mia.soya.jpg',
				hasSeen: false,
				username: 'mia.soya',
			},
			{
				key: 2,
				profilePic: '/proto/profile/cloud.dokhanhvan.jpg',
				hasSeen: false,
				username: 'cloud.dokhanhvan',
			},
			{
				key: 3,
				profilePic: '/proto/profile/smudge_lord.jpg',
				hasSeen: false,
				username: 'smudge_lord',
			},
			{
				key: 4,
				profilePic: '/proto/profile/lnavna.jpg',
				hasSeen: false,
				username: 'lnavna',
			},
			{
				key: 5,
				profilePic: '/proto/profile/jessybarden.jpg',
				hasSeen: false,
				username: 'jessybarden',
			},
			{
				key: 6,
				profilePic: '/proto/profile/kickthepj.jpg',
				hasSeen: false,
				username: 'kickthepj',
			},
			{
				key: 7,
				profilePic: '/proto/profile/may__lily.jpg',
				hasSeen: false,
				username: 'may__lily',
			},
			{
				key: 8,
				profilePic: '/proto/profile/ananasvn.jpg',
				hasSeen: false,
				username: 'ananasvn',
			},
			{
				key: 9,
				profilePic: '/proto/profile/itsmarziapie.jpg',
				hasSeen: true,
				username: 'itsmarziapie',
			},
			{
				key: 10,
				profilePic: '/proto/profile/billieeilish.jpg',
				hasSeen: true,
				username: 'billieeilish',
			},
			{
				key: 11,
				profilePic: '/proto/profile/vac.closet.jpg',
				hasSeen: true,
				username: 'vac.closet',
			},
		];
		setStories(fetchedStories);
		fetchPosts().then((res) => setPosts(res));
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
		<div className="w-full h-full text-center">
			<div className="w-fit mx-auto mt-12 flex flex-row gap-12">
				<div className="shrink-0">
					<StoryStack className="mb-10" data={stories} />
					<NewsFeed data={posts} />
				</div>
				<div>
					<SidePanel />
				</div>
			</div>
		</div>
	);
};

export default Home;
