import React from 'react';
import RoundedImage from '../RoundedImage';
import { SEEN_BUBBLE_GRADIENT, UNSEEN_BUBBLE_GRADIENT } from '../../../configs/themes';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { BsThreeDots } from 'react-icons/bs';

const PostHeader = () => {
  return (
		<div className="feedpost-origin flex flex-row justify-between items-center">
			<div className="feedpost-origin-main w-fit flex flex-row gap-1 items-center">
				<RoundedImage
					className="w-10 cursor-pointer mr-2"
					img="/proto/profile/sontungmtp.jpg"
					outlineBg={UNSEEN_BUBBLE_GRADIENT}
				/>
				<span className="text-sm font-semibold cursor-pointer">sontungmtp</span>
				<VscVerifiedFilled size="1rem" title="Verified" color="#068FFF" />
				<p className="text-sm text-gray-500">&bull;</p>
				<p className="text-sm text-gray-500 cursor-pointer" title="Oct 11, 2023">
					1d
				</p>
			</div>

			<button className="cursor-pointer p-2">
				<BsThreeDots size="1rem" />
			</button>
		</div>
  );
}

export default PostHeader