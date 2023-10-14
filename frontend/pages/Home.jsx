import React from 'react';
import StoryStack from '../components/Home/StoryStack';
import NewsFeed from '../components/Home/NewsFeed';
import SidePanel from '../components/Home/SidePanel';

import { getMockStories, getMockFeedPosts } from '../api/mock.js';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
	let {
		data: stories,
		isLoading: storiesIsLoading,
		isError: storiesIsError,
	} = useQuery({
		queryKey: ['stories'],
		queryFn: getMockStories,
		retry: (failureCount, error) => {
			return failureCount > 2 ||
				(error?.statusCode && error.statusCode >= 400 && error.statusCode < 500)
				? false // stop retrying
				: true;
		},
	});

	let {
		data: posts,
		isLoading: postsIsLoading,
		isError: postsIsError,
	} = useQuery({
		queryKey: ['feedPosts'],
		queryFn: getMockFeedPosts,
		retry: (failureCount, error) => {
			return failureCount > 2 || // if exceeds maximum number of failures
				(error?.statusCode && error.statusCode >= 400 && error.statusCode < 500) // or if client error occurred
				? false // stop retrying
				: true; // else continue
		},
	});

	return (
		<div className="w-full h-full text-center">
			<div className="w-fit mx-auto mt-12 flex flex-row gap-12">
				<div className="shrink-0 flex flex-col items-center">
					{/* {(stories && stories.length > 0) && <StoryStack className="mb-10" data={stories} />} */}
					{/* {(posts && posts.length > 0) && <NewsFeed data={posts} />} */}
					{storiesIsLoading ? (
						<h1>Stories is loading.....</h1> // TODO add loading skeleton
					) : storiesIsError ? (
						<h1>Failed to load stories!</h1> // TODO add error message
					) : (
						<StoryStack className="mb-10" data={stories} />
					)}

					{/* // * RENDER NEWS FEED */}
					{postsIsLoading ? (
						<h1>Posts is loading.....</h1> // TODO add loading skeleton
					) : postsIsError ? (
						<h1>Failed to load posts!</h1> // TODO add error message
					) : (
						<NewsFeed data={posts} />
					)}
				</div>
				<div>
					<SidePanel />
				</div>
			</div>
		</div>
	);
};

export default Home;
