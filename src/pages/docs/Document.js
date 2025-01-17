//dependencies
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DocAccordion from './views/DocAccordion';
import DocAlert from './views/DocAlert';
import DocAvatar from './views/DocAvatar';
import DocBadge from './views/DocBadge';
import DocBox from './views/DocBox';
import DocBreadcrumb from './views/DocBreadcrumb';
import DocButton from './views/DocButton';
import DocFlex from './views/DocFlex';
import DocText from './views/DocText';
import DocTooltip from './views/DocTooltip';

import './docs.css';

const Document = () => {
	const { url } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		/*setLoading(true);
		var index = docsData.findIndex(s => s.url == url);
		setDoc(docsData[index])
		setLoading(false);
		document.title = doc.title + " | Project";*/
		setLoading(true);
		setLoading(false);
	}, [url])


	return (
		<div className='docpage'>
			{loading ? 'Loading...' : <>
				<div className='header'>
					<div className='wrapper'>Header</div>
				</div>
				<div className='doc'>
					<div className='wrapper'>
						{url === 'accordion' && <DocAccordion />}
						{url === 'alert' && <DocAlert />}
						{url === 'avatar' && <DocAvatar />}
						{url === 'badge' && <DocBadge />}
						{url === 'box' && <DocBox />}
						{url === 'breadcrumb' && <DocBreadcrumb />}
						{url === 'button' && <DocButton />}
						{url === 'flex' && <DocFlex />}
						{url === 'text' && <DocText />}
						{url === 'tooltip' && <DocTooltip />}
					</div>
				</div>
				<div className='footer'>
					<div className='wrapper'>Footer</div>
				</div>
			</>}
		</div>
	)
}

export default Document;