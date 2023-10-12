import React from 'react';
import RoundedImage from '../RoundedImage';
import PropTypes from 'prop-types';

const PostContent = (props) => {
	const { username, caption, nLikes, likedContact } = props;

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				{likedContact && (
					<RoundedImage
						className="w-4 h-4 cursor-pointer inline"
						img={likedContact.userImg}
					/>
				)}
				<span className="cursor-pointer text-sm font-semibold">
					{numberWithCommas(nLikes)} likes
				</span>
			</div>
			<div className="w-fit ">
				<span className="text-sm font-semibold cursor-pointer">{username}</span>
				<span className="text-sm ms-1">{caption}</span>
			</div>
		</div>
	);
};

PostContent.propTypes = {
	username: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	nLikes: PropTypes.number.isRequired,
	likedContact: PropTypes.object,
};

export default PostContent;
