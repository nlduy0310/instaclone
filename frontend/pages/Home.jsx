import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = (props) => {
	const { name } = props;

	return (
		<>
			{name ? (
				<h1>Hello, {name}!</h1>
			) : (
				<div>
					Please <Link to="/signin">log in</Link> first
				</div>
			)}
		</>
	);
};

Home.propTypes = {
	name: PropTypes.string,
};

export default Home;
