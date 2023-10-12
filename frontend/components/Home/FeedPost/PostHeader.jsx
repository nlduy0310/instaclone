import React from 'react';
import RoundedImage from '../RoundedImage';
import { SEEN_BUBBLE_GRADIENT, UNSEEN_BUBBLE_GRADIENT } from '../../../configs/themes';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { BsThreeDots } from 'react-icons/bs';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
	const {
		username,
		userImg,
		userVerified,
		hasStories,
		hasUnseenStories,
		postedSince,
		postedFor,
	} = props;

	return (
		<div className="feedpost-origin flex flex-row justify-between items-center">
			<div className="feedpost-origin-main w-fit flex flex-row gap-1 items-center">
				<RoundedImage
					className="w-10 cursor-pointer mr-2"
					img={userImg}
					outlineBg={
						hasStories
							? hasUnseenStories
								? UNSEEN_BUBBLE_GRADIENT
								: SEEN_BUBBLE_GRADIENT
							: 'bg-transparent'
					}
				/>
				<span className="text-sm font-semibold cursor-pointer">{username}</span>
				{userVerified && <VscVerifiedFilled size="1rem" title="Verified" color="#068FFF" />}
				<p className="text-sm text-gray-500">&bull;</p>
				<p className="text-sm text-gray-500 cursor-pointer" title={postedSince}>
					{postedFor}
				</p>
			</div>

			<button className="cursor-pointer p-2">
				<BsThreeDots size="1rem" />
			</button>
		</div>
	);
};

PostHeader.propTypes = {
	username: PropTypes.string,
	userImg: PropTypes.string,
	userVerified: PropTypes.bool,
	hasStories: PropTypes.bool,
	hasUnseenStories: PropTypes.bool,
	postedSince: PropTypes.string,
	postedFor: PropTypes.string,
};

export default PostHeader;
