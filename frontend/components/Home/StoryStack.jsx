import React, { useEffect, useState, useRef } from 'react';
import StoryBubble from './StoryBubble';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import PropTypes from 'prop-types';

const StoryStack = (props) => {
	const { data, className } = props;

	const prevBut = useRef();
	const nextBut = useRef();

	const bubbles = data.map((item) => (
		<StoryBubble
			className="flex-grow-0 flex-shrink-0 basis-auto"
			key={item.key}
			img={item.profilePic}
			hasSeen={item.hasSeen}
			text={item.username}
			imageWidth={'w-16'}
		/>
	));

	let n = data.length;
	let pivotBubble = 1;
	const slideForward = () => {
		let tmp = Math.min(pivotBubble + 4, n);
		if (n - tmp < 4) {
			tmp = tmp - (4 - (n - tmp));
		}
		pivotBubble = tmp;
		const element = document.querySelector(
			`.storystack-container > :nth-child(${pivotBubble})`
		);
		element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
		changeButtonsVisibility();
	};

	const slideBackward = () => {
		pivotBubble = Math.max(pivotBubble - 4, 1);
		const element = document.querySelector(
			`.storystack-container > :nth-child(${pivotBubble})`
		);
		element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
		changeButtonsVisibility();
	};

	const changeButtonsVisibility = () => {
		if (pivotBubble == 1) prevBut.current.style.opacity = '0';
		else if (pivotBubble == n - 4) nextBut.current.style.opacity = '0';
		else {
			prevBut.current.style.opacity = '1.0';
			nextBut.current.style.opacity = '1.0';
		}
	};

	useEffect(() => {
		if (pivotBubble == 1) prevBut.current.style.opacity = '0';
		else if (pivotBubble == n - 4) nextBut.current.style.opacity = '0';
		else {
			prevBut.current.style.opacity = '1.0';
			nextBut.current.style.opacity = '1.0';
		}
	}, [pivotBubble, n]);

	return (
		<div className={`${className} relative`}>
			<div className="storystack-container flex w-96 flex-row gap-4 overflow-hidden">
				{/* REMEMBER TO SET className="flex-grow-0 flex-shrink-0 basis-auto" */}
				{bubbles}
			</div>
			<button
				className="absolute left-2 top-7 w-fit bg-white rounded-full cursor-pointer"
				onClick={slideBackward}
				ref={prevBut}
			>
				<MdOutlineNavigateBefore size={'1.2rem'} />
			</button>
			<button
				className="absolute right-2 top-7 w-fit bg-white rounded-full cursor-pointer"
				onClick={slideForward}
				ref={nextBut}
			>
				<MdOutlineNavigateNext size={'1.2rem'} />
			</button>
		</div>
	);
};

StoryStack.propTypes = {
	data: PropTypes.array,
	className: PropTypes.string
};

StoryStack.defaultProps = {
	className: '',
};

export default StoryStack;
