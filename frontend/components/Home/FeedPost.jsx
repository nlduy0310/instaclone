import React from 'react';
import PostHeader from './FeedPost/PostHeader';
import PostGallery from './FeedPost/PostGallery';
import PostActions from './FeedPost/PostActions';

const FeedPost = () => {
	return (
		<div className="feedpost flex flex-col gap-3 p-2">
			<PostHeader />
			<PostGallery
				srcSet={[
					'/proto/posts/sontungmtp/1/1.jpg',
					'/proto/posts/sontungmtp/1/2.jpg',
					'/proto/posts/sontungmtp/1/3.jpg',
					'/proto/posts/sontungmtp/1/4.jpg',
				]}
			/>
			<PostActions />
		</div>
	);
};

export default FeedPost;
