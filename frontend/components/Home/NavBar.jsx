import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDensityMedium } from 'react-icons/md';
import { BiSearch, BiMessageRounded } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';
import { RiCompassLine } from 'react-icons/ri';
import { PiVideo } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';

import NavItem from './NavItem';
const NavBar = () => {
	return (
		<div className="flex flex-col justify-between px-2 py-6 max-w-[12rem] w-full border-r">
			<div>
				<div className="logo p-2 mb-8">
					<Link to="/">
						<img src="/instaclone-black.png" className="w-24"></img>
					</Link>
				</div>
				<div className="nav-main flex flex-col gap-2">
					<NavItem Icon={GoHome} text="Home" />
					<NavItem Icon={BiSearch} text="Search" />
					<NavItem Icon={RiCompassLine} text="Explore" />
					<NavItem Icon={PiVideo} text="Reels" />
					<NavItem Icon={BiMessageRounded} text="Messages" />
					<NavItem Icon={AiOutlineHeart} text="Notifications" />
					<NavItem Icon={BsPlusCircle} text="Create" />
				</div>
			</div>
			<div className="nav-more">
				<NavItem Icon={MdOutlineDensityMedium} text="More" />
			</div>
		</div>
	);
};

export default NavBar;
