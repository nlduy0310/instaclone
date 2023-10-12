import React from 'react';
import FeedPost from './FeedPost';
import PropTypes from 'prop-types';

const NewsFeed = (props) => {
	const { className } = props;

	return (
		<div className={`${className} feedstack flex flex-col gap-8 overflow-hidden`}>
			<FeedPost />
			<FeedPost />
			<FeedPost />
			<FeedPost />
			<FeedPost />
		</div>
	)
};

NewsFeed.propTypes = {
	className: PropTypes.string
}

NewsFeed.defaultProps = {
	className: ''
}

export default NewsFeed;
