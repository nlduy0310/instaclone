import React from 'react';
import { Link } from 'react-router-dom';

const RequireLogin = () => {
    return (
        // TODO Add a suitable background for the page
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-fit px-8 py-4 text-center border-[1px] border-slate-400 rounded-sm shadow-lg">
				You are not authenticated!
				<br />
				Please{' '}
				<Link className="text-blue-400 font-semibold" to="/signin">
					log in
				</Link>{' '}
				or{' '}
				<Link className="text-blue-400 font-semibold" to="/signup">
					register a new account!
				</Link>
			</div>
		</div>
	);
};

export default RequireLogin;
