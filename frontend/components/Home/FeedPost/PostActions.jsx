import React, { useState } from 'react';
import { FiHeart, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { PiPaperPlaneTiltBold } from 'react-icons/pi';

const PostActions = (props) => {
	// TODO get initial state from props
	const [fillHeart, setFillHeart] = useState(false);
	const [fillBookmark, setFillBookmark] = useState(false);

	const toggleHeart = () => {
		setFillHeart((prev) => !prev);
	};

	const toggleBookmark = () => {
		setFillBookmark((prev) => !prev);
	};

	return (
		<div className="flex flex-row justify-between items-center">
			<div className="flex flex-row gap-4 items-center">
				<FiHeart
					className={`overflow-visible cursor-pointer hover:grayout ${
						fillHeart ? 'heart-filled stop-grayout' : ''
					}`}
					size="1.7rem"
					onClick={toggleHeart}
				/>
				{/* {fillHeart ? <AiFillHeart size="1.7rem" onClick={toggleHeart}/> : <AiOutlineHeart size="1.7rem" onClick={toggleHeart}/>} */}
				<FaRegComment className="cursor-pointer hover:grayout" size="1.5rem" />
				<PiPaperPlaneTiltBold className="cursor-pointer hover:grayout" size="1.6rem" />
			</div>
			<div>
				<FiBookmark
					className={`cursor-pointer hover:grayout ${
						fillBookmark ? 'bookmark-filled stop-grayout' : ''
					}`}
					size="1.6rem"
					onClick={toggleBookmark}
				/>
			</div>
		</div>
	);
};

export default PostActions;
