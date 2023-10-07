import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import { MdOutlineQuestionMark } from 'react-icons/md';

const NavItem = (props) => {
	const [hover, setHover] = useState(false);

	const { Icon, iconSet, text, linkTo, toggled, uiOnToggle } = props;
	let DefaultIcon, ToggledIcon;
	if (iconSet) {
		[DefaultIcon, ToggledIcon] = iconSet;
	}

	return (
		<div
			className="nav-item relative flex flex-row items-center py-2 hover:bg-slate-200 rounded-lg cursor-pointer duration-200"
			onClick={uiOnToggle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{linkTo && <Link className="absolute w-full h-full" to={linkTo}></Link>}
			<div className="icon-wrapper px-2">
				{iconSet ? (
					toggled ? (
						<ToggledIcon size={'1.2rem'} />
					) : (
						<DefaultIcon size={'1.2rem'} />
					)
				) : (
					<Icon size={'1.2rem'} />
				)}
			</div>

			<span className={`text-xs px-2 ${toggled ? 'font-bold' : ''}`}>{text}</span>
		</div>
	);
};

NavItem.propTypes = {
	Icon: PropTypes.any,
	iconSet: PropTypes.array,
	text: PropTypes.string,
	linkTo: PropTypes.string,
	toggled: PropTypes.bool,
	uiOnToggle: PropTypes.func,
};

NavItem.defaultProps = {
	Icon: MdOutlineQuestionMark,
	text: '',
	linkTo: '',
	toggled: false,
	uiOnToggle: null,
};

export default NavItem;
