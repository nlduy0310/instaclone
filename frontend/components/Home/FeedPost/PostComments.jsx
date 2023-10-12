import React, { useRef, useState } from 'react';
import { PiSmileyBold } from 'react-icons/pi';
import EmojiPicker from 'emoji-picker-react';
import { AiOutlineClose } from 'react-icons/ai';

const PostComments = () => {
    const [text, setText] = useState('');
    console.log(text);
	const taRef = useRef();
	const [showEmotes, setShowEmotes] = useState(false);

	const handleChange = (event) => {
		setText(event.target.value);
	};

	function resizeInput() {
		taRef.current.style.height = 'auto';
		taRef.current.style.height = `${taRef.current.scrollHeight}px`;
	}

    function handleEmojiClick(emojiObj) {
        setText(prev => prev + emojiObj.emoji);
    }

	return (
		<div>
			<p className="w-fit text-sm text-slate-500 mb-2 cursor-pointer">
				View all 1,357 comments
			</p>
			<form className="flex flex-row items-center mb-4">
				<textarea
					className="text-sm w-full resize-none border-none outline-none"
					autoComplete="off"
					autoCorrect="off"
					placeholder="Add a comment..."
					rows={1}
					ref={taRef}
					name="comment"
					value={text}
					onChange={(e) => handleChange(e)}
					onInput={resizeInput}
					maxLength={300}
				></textarea>
				<button
					type="button"
					className="text-sm text-blue-500 font-semibold mx-2"
					hidden={text.length === 0}
				>
					Post
				</button>
				<button type="button">
					{showEmotes ? (
						<AiOutlineClose color="#737373" onClick={() => setShowEmotes(false)}/>
					) : (
						<PiSmileyBold color='#737373' onClick={() => setShowEmotes(true)} />
					)}

                    
					<div className="absolute z-10" hidden={!showEmotes} style={{translate: '2rem -24rem' }}>
						<EmojiPicker theme='auto' onEmojiClick={handleEmojiClick} emojiStyle='native'/>
					</div>
				</button>
			</form>
			<div className="h-px bg-slate-300"></div>
		</div>
	);
};

export default PostComments;
