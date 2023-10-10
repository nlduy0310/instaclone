import React from 'react';
import PropTypes from 'prop-types';

const RoundedImage = (props) => {
	const { className, img, outlineBg } = props;

	if (outlineBg)
		return (
			<div className={`${className} ${outlineBg} p-0.5 rounded-full`}>
				<img className={`rounded-full box-border border-2`} src={img}></img>
			</div>
		);

	return <img className={className + ' rounded-full'} src={img}></img>;
};

RoundedImage.propTypes = {
	className: PropTypes.string,
	img: PropTypes.string.isRequired,
	outlineBg: PropTypes.string,
};

RoundedImage.defaultProps = {
	className: '',
	outlineBg: null,
};

export default RoundedImage;
