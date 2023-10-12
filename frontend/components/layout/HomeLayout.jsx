import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../layout/NavBar';
const HomeLayout = () => {
	return (
		<div className="w-full h-full flex flex-row">
			<NavBar className="fixed top-0 bottom-0 left-0 bg-white" />
			<Outlet />
		</div>
	);
};

export default HomeLayout;
