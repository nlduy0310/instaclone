import React from 'react';
import FeedPostSkeleton from './FeedPost/FeedPostSkeleton';

const FeedStackSkeleton = () => {
	return (
		<div className='flex flex-col gap-20 my-8'>
			<FeedPostSkeleton />
			<FeedPostSkeleton />
		</div>
	);
};

export default FeedStackSkeleton;
