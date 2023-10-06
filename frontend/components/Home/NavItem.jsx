import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineQuestionMark } from 'react-icons/md';

const NavItem = (props) => {
	const { Icon, text, linkTo } = props;
	return (
		<div className="relative flex flex-row items-center py-2 hover:bg-slate-200 rounded-lg">
			{linkTo && <Link className="absolute w-full h-full" to={linkTo}></Link>}
			<div className="px-2">
				<Icon size={'1.2rem'} />
			</div>
			<span className="text-sm px-2">{text}</span>
		</div>
	);
};

NavItem.propTypes = {
	Icon: PropTypes.IconType,
	text: PropTypes.string,
	linkTo: PropTypes.string,
};

NavItem.defaultProps = {
	Icon: MdOutlineQuestionMark,
	text: '',
	linkTo: '',
};

export default NavItem;
