import React from 'react';
import Skeleton from 'react-loading-skeleton';

const StoryStackSkeleton = () => {
	return (
		<div className="flex flex-row gap-4 p-2">
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
			<Skeleton circle width={'4rem'} height={'4rem'} />
		</div>
	);
};

export default StoryStackSkeleton;
