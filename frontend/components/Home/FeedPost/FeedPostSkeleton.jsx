import React from 'react';
import Skeleton from 'react-loading-skeleton';

const FeedPostSkeleton = () => {
	return (
		<div className="w-postimage">
			<div className="flex flex-row mb-2">
				<Skeleton circle width={'3rem'} height={'3rem'} />
                <div className="mx-4 w-full flex flex-col items-start justify-center">
                    <p>
                        <Skeleton width={'5rem'} />
                    </p>
                    <p>
                        <Skeleton width={'10rem'} />
                    </p>
				</div>
			</div>
			<Skeleton width={'28rem'} height={'28rem'} />
		</div>
	);
};

export default FeedPostSkeleton;
