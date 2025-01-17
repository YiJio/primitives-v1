//dependencies
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Documents = () => {
	const [documents, setDocuments] = useState(['Accordion', 'Alert', 'Avatar', 'Badge', 'Box', 'Breadcrumb', 'Button', 'Context Menu', 'Dropdown Menu', 'Flex', 'Image', 'Modal', 'Navigation Menu', 'Popover', 'Separator', 'Splitter', 'Tabs', 'Text', 'Tooltip']);

	useEffect(() => {
		document.title = "Documentation"
	}, [])


	return (
		<div className='docpage'>
			<div className='header'>
				<div className='wrapper'>Documentation</div>
			</div>
			<div className='docs'>
				<div className='wrapper'>
					<h3>Overview</h3>
					<div className='item'>
						<Link to='/docs/getting-started'>Getting started</Link>
					</div>
					<div className='item'>
						<Link to='/docs/style-props'>Style props</Link>
					</div>
					<h3>Components</h3>
					{documents.map((doc, index) => {
						var url = doc.toLowerCase();
						var menuIndex = url.indexOf('menu');
						if (menuIndex !== -1) {
							url = url.substring(0, menuIndex - 1) + '-' + url.substring(menuIndex);
						}
						return (
							<div className='item' key={index}>
								<Link to={'/docs/component/' + url}>{doc}</Link>
							</div>
						)
					})}
				</div>
			</div>
			<div className='footer'>
				<div className='wrapper'>Footer</div>
			</div>
		</div>
	)
}

export default Documents;