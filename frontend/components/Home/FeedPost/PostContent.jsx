import React from 'react';
import RoundedImage from '../RoundedImage';

const PostContent = () => {
	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				<RoundedImage
					className="w-4 h-4 cursor-pointer inline"
					img="/proto/posts/sontungmtp/1/liked_by/lq.haitu.jpg"
				/>
				<span className="cursor-pointer text-sm font-semibold">181,752 likes</span>
			</div>
			<div className="w-fit ">
				<span className='text-sm font-semibold cursor-pointer'>sontungmtp</span>
				<span className='text-sm ms-1'>Thứ tư nên cứ từ từ ... 😌</span>
			</div>
		</div>
	);
};

export default PostContent;
