import axios from 'axios';
import HTTPError from './HTTPError.js';

const mockApiAxios = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
	timeout: 3000,
	withCredentials: true,
});

export const getMockStories = async () => {
	return mockApiAxios
		.get('/mock/stories')
		.then((res) => res.data)
		.catch((err) => {
			if (err?.response?.status) {
				throw new HTTPError(err.message, err.response.status);
			}
			throw new Error(err.message);
		});
};

export const getMockFeedPosts = async () => {
	return mockApiAxios
		.get('/mock/feedposts')
		.then((res) => res.data)
		.catch((err) => {
			if (err?.response?.status) {
				throw new HTTPError(err.message, err.response.status);
			}
			throw new Error(err.message);
		});
};
