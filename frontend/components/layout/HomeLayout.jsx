import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Home/NavBar';
const HomeLayout = () => {
	return (
		<div className="w-full h-full flex flex-row">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default HomeLayout;
