//dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

	useEffect(() => {
		document.title = "Home"
	}, [])


	return (
		<div>
			<h1>Home</h1>
			<Link to="/docs">Documents</Link>
		</div>
	)
}

export default Home;