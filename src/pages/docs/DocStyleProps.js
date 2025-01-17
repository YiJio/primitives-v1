//dependencies
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DocTableCSS from './components/DocTableCSS';

import { attributes, attributeTitles } from './docDataCSS';

import './docs.css';

const DocStyleProps = () => {

	return (
		<div className='docpage'>
			<div className='header'>
				<div className='wrapper'>Header</div>
			</div>
			<div className='doc'>
				<div className='wrapper'>
					<h1>Style props</h1>
					<p>You are able to pass in props of CSS attributes to style all components.</p>
					<p>One might think this is the same as defining an inline <code className='q'>{`style={{ somestyle... }}`}</code> on a component/element, but if you open inspect, you'd be able to see all the styles on that tag. While this is doable, it may not look good visually on the source code.</p>
					<p>And one might also think to just use a <code className='q'>className</code> with a defined CSS class to pass in all the styles. Yes, I still love doing this, as all my elements are organized by the name and it's easier to define all children and pseudo elements within it.</p>
					<p>However, if you do need to change a value, you'd have to open up <code className='q'>{`style={{}}`}</code> again on the inline. Not that this isn't good, as it's still a quick and easy way, but <b>styled props</b> with the primitive components created here will allow you to pass in only the styles you need to change and use.</p>
					<p>Keep in mind, all of these style props are just CSS. And that you're still able to add your own <code className='q'>className</code>s if you do want to use those.</p>
					<div className='divider'></div>
					{attributes.map((row, index) => (
					<>
						<h3>{attributeTitles[index].title}</h3>
						<p>{attributeTitles[index].description}</p>
						<DocTableCSS key={index} array={row} />
					</>
				))}
				</div>
			</div>
			<div className='footer'>
				<div className='wrapper'>Footer</div>
			</div>
		</div>
	)
}

export default DocStyleProps;