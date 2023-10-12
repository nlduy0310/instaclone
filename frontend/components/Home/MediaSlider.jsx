import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

const MediaSlider = (props) => {
	const { children } = props;
	let n = children.length;
	const [curItem, setCurItem] = useState(0);

	const prevItem = () => setCurItem((cur) => (cur === 0 ? 0 : cur - 1));
	const nextItem = () => setCurItem((cur) => (cur === n - 1 ? cur : cur + 1));

	const indicators = [...Array(n)].map((_, index) => {
		return (
			<div
				key={index}
				className={`bg-white w-1.5 h-1.5 rounded-full transition-opacity ${
					curItem === index ? '' : 'bg-opacity-50'
				}`}
			></div>
		);
	});

	return (
		<div className="relative w-postimage overflow-hidden">
			<div
				className="flex flex-row transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curItem * 100}%)` }}
			>
				{children}
			</div>
			{/* Nav Buttons */}
			<div className="absolute inset-0 flex flex-row justify-between items-center">
				<button
					onClick={prevItem}
					style={{ visibility: curItem === 0 ? 'hidden' : 'visible' }}
				>
					<MdOutlineNavigateBefore
						className="rounded-full m-4"
						size="1.5rem"
						style={{ fill: 'black', background: 'white', opacity: '0.7' }}
					/>
				</button>
				<button
					onClick={nextItem}
					style={{ visibility: curItem === n - 1 ? 'hidden' : 'visible' }}
				>
					<MdOutlineNavigateNext
						className="rounded-full m-4"
						size="1.5rem"
						style={{ fill: 'black', background: 'white', opacity: '0.7' }}
					/>
				</button>
			</div>
			{/* Indicators */}
			<div className="absolute w-full bottom-2 flex flex-row justify-center gap-1">
				{indicators}
			</div>
		</div>
	);
};

MediaSlider.propTypes = {
	children: PropTypes.array.isRequired,
};

export default MediaSlider;
