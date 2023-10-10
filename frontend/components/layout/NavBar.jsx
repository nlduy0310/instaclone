import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDensityMedium } from 'react-icons/md';
import { BiSearch, BiSolidSearch, BiMessageRounded, BiSolidMessageRounded } from 'react-icons/bi';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { RiCompassLine, RiCompassFill } from 'react-icons/ri';
import { PiVideo, PiVideoFill } from 'react-icons/pi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';

import NavItem from './NavItem';

const UrlToItemNameLookup = {
	['/explore']: 'explore',
	['/reels']: 'reels',
	['/messages']: 'messages',
};

const NavBar = () => {
	// handle togglings of items
	const location = useLocation();
	const [toggledItem, setToggledItem] = useState(() => {
		// set toggled item on first load
		// refactor if possible
		let curLoc = location.pathname;
		let curItem = 'home';

		if (curLoc !== '/')
			for (const [k, v] of Object.entries(UrlToItemNameLookup)) {
				if (curLoc.startsWith(k)) {
					curItem = UrlToItemNameLookup[k];
					break;
				}
			}

		return curItem;
	});

	const isToggled = (itemName) => {
		return itemName === toggledItem;
	};

	return (
		<div className="flex flex-col justify-between px-4 py-6 w-60 shrink-0 border-r">
			<div>
				<div className="logo p-2 mb-8">
					<Link to="/">
						<img src="/instaclone-black.png" className="w-24"></img>
					</Link>
				</div>
				<div className="nav-main flex flex-col gap-4">
					<NavItem
						iconSet={[GoHome, GoHomeFill]}
						text="Home"
						linkTo="/"
						toggled={isToggled('home')}
						uiOnToggle={() => setToggledItem('home')}
					/>
					<NavItem
						iconSet={[BiSearch, BiSolidSearch]}
						text="Search"
						toggled={isToggled('search')}
						uiOnToggle={() => setToggledItem('search')}
					/>
					<NavItem
						iconSet={[RiCompassLine, RiCompassFill]}
						text="Explore"
						linkTo="/explore"
						toggled={isToggled('explore')}
						uiOnToggle={() => setToggledItem('explore')}
					/>
					<NavItem
						iconSet={[PiVideo, PiVideoFill]}
						text="Reels"
						linkTo="/reels"
						toggled={isToggled('reels')}
						uiOnToggle={() => setToggledItem('reels')}
					/>
					<NavItem
						iconSet={[BiMessageRounded, BiSolidMessageRounded]}
						text="Messages"
						linkTo="/messages"
						toggled={isToggled('messages')}
						uiOnToggle={() => setToggledItem('messages')}
					/>
					<NavItem
						iconSet={[AiOutlineHeart, AiFillHeart]}
						text="Notifications"
						toggled={isToggled('noti')}
						uiOnToggle={() => setToggledItem('noti')}
					/>
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
