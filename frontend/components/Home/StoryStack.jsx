import React, { useEffect, useState, useRef } from 'react';
import StoryBubble from './StoryBubble';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import PropTypes from 'prop-types';

const SS_DISPLAY_SIZE = 8;

const StoryStack = (props) => {
	const { data, className } = props;
	const sRef = useRef();
	const [displayItems, setDisplayItems] = useState({
		first: 0,
		last: data.length >= SS_DISPLAY_SIZE ? SS_DISPLAY_SIZE - 1 : data.length - 1,
	});

	console.log(displayItems);

	// const prevBut = useRef();
	// const nextBut = useRef();

	const bubbles = data.map((item, index) => (
		<StoryBubble
			className={`flex-grow-0 flex-shrink-0 basis-auto bubble-id-${item.key}`}
			key={item.key}
			img={item.profilePic}
			hasSeen={item.hasSeen}
			text={item.username}
			imageWidth={'w-16'}
		/>
	));

	useEffect(() => {
		if (data && displayItems) {
			sRef.current
				.querySelector(`.bubble-id-${data[displayItems.first].key}`)
				.scrollIntoView({
					behavior: 'smooth',
					inline: 'start',
				});
		}
	}, [data, displayItems]);

	const slideForward = () => {
		if (displayItems.last === data.length - 1) {
			return;
		} else if (displayItems.last + SS_DISPLAY_SIZE - 1 <= data.length - 1) {
			setDisplayItems((prev) => ({
				first: prev.last,
				last: prev.last + SS_DISPLAY_SIZE - 1,
			}));
		} else {
			setDisplayItems((prev) => ({
				first: data.length - 1 - (SS_DISPLAY_SIZE - 1),
				last: data.length - 1,
			}));
		}
	};

	const slideBackward = () => {
		if (displayItems.first === 0) {
			return;
		} else if (displayItems.first - (SS_DISPLAY_SIZE - 1) >= 0) {
			setDisplayItems((prev) => ({
				first: prev.first - 7,
				last: prev.first,
			}));
		} else {
			setDisplayItems((prev) => ({
				first: 0,
				last: SS_DISPLAY_SIZE - 1,
			}));
		}
	};

	return (
		<div className={`${className} relative `}>
			<div
				className="storystack-container flex flex-row gap-3 w-storystack overflow-hidden"
				ref={sRef}
			>
				{/* REMEMBER TO SET className="flex-grow-0 flex-shrink-0 basis-auto" */}
				{bubbles}
			</div>
			<button
				className={
					'absolute left-2 top-6 w-fit bg-white opacity-80 rounded-full cursor-pointer'
				}
				onClick={slideBackward}
				style={{ visibility: displayItems.first === 0 ? 'hidden' : 'visible' }}
			>
				<MdOutlineNavigateBefore size={'1.2rem'} />
			</button>
			<button
				className="absolute right-2 top-6 w-fit bg-white opacity-80 rounded-full cursor-pointer"
				onClick={slideForward}
				style={{ visibility: displayItems.last === data.length - 1 ? 'hidden' : 'visible' }}
			>
				<MdOutlineNavigateNext size={'1.2rem'} />
			</button>
		</div>
	);
};

StoryStack.propTypes = {
	data: PropTypes.array,
	className: PropTypes.string,
};

StoryStack.defaultProps = {
	className: '',
};

export default StoryStack;
