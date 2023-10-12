import React from 'react';
import PostHeader from './FeedPost/PostHeader';
import PostGallery from './FeedPost/PostGallery';
import PostActions from './FeedPost/PostActions';
import PostContent from './FeedPost/PostContent';
import PostComments from './FeedPost/PostComments';
import PropTypes from 'prop-types';

const FeedPost = (props) => {
	const { className, data } = props;

	if (!data) {
		return (
			<h1 className="p-4 m-4 bg-gray-500">Something went wrong when loading this post!</h1>
		);
	}

	return (
		<div className={`${className} feedpost flex flex-col gap-3 p-2`}>
			<PostHeader
				username={data.username}
				userImg={data.userImg}
				userVerified={data.userVerified}
				hasStories={data.hasStories}
				hasUnseenStories={data.hasUnseenStories}
				postedSince={data.postContent.postedSince}
				postedFor={data.postContent.postedFor}
			/>
			<PostGallery srcSet={data.postContent.images} />
			<PostActions />
			<PostContent
				username={data.username}
				caption={data.postContent.caption}
				nLikes={data.postContent.nLikes}
				likedContact={data.postContent.likedContact}
			/>
			<PostComments />
		</div>
	);
};

FeedPost.propTypes = {
	className: PropTypes.string,
	data: PropTypes.object,
};

FeedPost.defaultProps = {
	className: '',
	data: null,
};

export default FeedPost;
