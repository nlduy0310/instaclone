import {mockStories, mockFeedPosts} from '../mock_data/index.js';

let controllers = {}

controllers.getStories = (req, res, next) => {
    return res.status(200).json(mockStories);
}

controllers.getFeedPosts = (req, res, next) => {
    return res.status(200).json(mockFeedPosts);
}

export default controllers;