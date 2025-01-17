import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Component from './Component';
import Documents from './pages/docs/Documents';
import Document from './pages/docs/Document';
import DocStyleProps from './pages/docs/DocStyleProps';

const RoutesList = () => {

	const location = useLocation();

	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="docs" element={<Documents/>} />
				<Route path="docs/style-props" element={<DocStyleProps/>} />
				<Route path="docs/component/:url" element={<Document/>} />
				<Route path="docs/component/:url/:url" element={<Document/>} />
				<Route path="comp" element={<Component/>} />
			</Route>
		</Routes>
	)
}

export default RoutesList;