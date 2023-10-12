import React from 'react';
import FeedPost from './FeedPost';
import PropTypes from 'prop-types';

const NewsFeed = (props) => {
	const { className, data } = props;

	const feedPosts = data.map((postData) => {
		return <FeedPost key={postData.id} data={postData} />;
	});

	return (
		<div className={`${className} feedstack w-fit flex flex-col gap-8 overflow-hidden`}>
			{data.length === 0 ? <h1>No posts found!</h1> : feedPosts}
		</div>
	);
};

NewsFeed.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
};

NewsFeed.defaultProps = {
	className: '',
	data: [],
};

export default NewsFeed;
