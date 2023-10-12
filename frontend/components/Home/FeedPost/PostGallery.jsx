import React from 'react';
import PropTypes from 'prop-types';
import MediaSlider from '../MediaSlider';

const PostGallery = (props) => {
	const { srcSet } = props;

	const images = srcSet.map((imageUrl, index) => <img className='w-postimage' key={index} src={imageUrl} />);

	return <MediaSlider>{images}</MediaSlider>;
};

PostGallery.propTypes = {
	srcSet: PropTypes.array.isRequired,
};

export default PostGallery;
