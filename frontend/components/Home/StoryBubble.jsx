import React from 'react';
import PropTypes from 'prop-types';
import RoundedImage from './RoundedImage';

const UNSEEN_BUBBLE_GRADIENT = 'bg-gradient-to-tr from-yellow-500 to-fuchsia-600';
const SEEN_BUBBLE_GRADIENT = 'bg-neutral-300';

const StoryBubble = (props) => {
	const { className, img, hasSeen, text, imageWidth, textSize } = props;

	const shortenUsername = (username) => {
		let res = username;
		if (username.length > 13) {
			res = res.slice(0, 10) + '...';
		}
		return res;
	};

	return (
		<div className={className + ' cursor-pointer'}>
			<RoundedImage
				className={imageWidth}
				img={img}
				outlineBg={hasSeen ? SEEN_BUBBLE_GRADIENT : UNSEEN_BUBBLE_GRADIENT}
			/>
			<span className={textSize}>{shortenUsername(text)}</span>
		</div>
	);
};

StoryBubble.propTypes = {
	className: PropTypes.string,
	img: PropTypes.string.isRequired,
	hasSeen: PropTypes.bool,
	text: PropTypes.string.isRequired,
	imageWidth: PropTypes.string,
	textSize: PropTypes.string,
};

StoryBubble.defaultProps = {
	className: '',
	hasSeen: false,
	imageWidth: 'w-16',
	textSize: 'text-xs',
};

export default StoryBubble;
