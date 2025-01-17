//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';

import { Badge } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

const DocBadge = () => {

	return (
		<>
			<h1>Badge</h1>
			<p>A badge is usually used beside some element to show a status.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Badge</b>, import the badge's path. You can pass in the <code className='q'>label</code> prop, but you can also wrap any text within the <b>Badge</b> tags.</p>
				<Highlight className='javascript'>
					{`import { Badge } from 'your-path-to-badge';\n\n<Badge>Undefined</Badge>\n<Badge label='Undefined' />`}
				</Highlight>
				<span style={{ display: 'inline-block' }}>
					<Badge label='Undefined' />
				</span>
				<div className='divider'></div>
				<p>Sometimes you might want a hover effect, but it's not necessary. The <b>Badge</b> component does offer a simple hover background to it though.</p>
				<Highlight className='javascript'>
					{`import { Badge } from 'your-path-to-badge';\n\n<Badge variant='solid' allowHover={true}>Solid</Badge>\n<Badge variant='outline' allowHover={true}>Outline</Badge>\n<Badge allowHover={true}>Soft</Badge>\n<Badge variant='soft-border' allowHover={true}>Soft border</Badge>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Badge variant='solid' allowHover={true}>Solid</Badge>
					<Badge variant='outline' allowHover={true}>Outline</Badge>
					<Badge allowHover={true}>Soft</Badge>
					<Badge variant='soft-border' allowHover={true}>Soft border</Badge>
				</span>
				<div className='divider'></div>
				<p>The default color of the badge isn't to your liking? Fortunately, you can pass in a <code className='q'>bgColor</code> prop to change that. By default, every variant except for the <code className='q'>variant='solid'</code> will have a little darker text color. You can pass in <code className='q'>color</code> to overwrite it.</p>
				<Highlight className='javascript'>
{`import { Badge } from 'your-path-to-badge';\n\n<Badge
  padding='5px 15px'
  borderRadius='15px'
  bgColor='#F16244'
>
  Not started
</Badge>
<Badge
  ...
  bgColor='#CF3197'
  color='#009688'
>
  In-progress
</Badge>
<Badge
  ...
  bgColor='#B1CF31'
  fontWeight='600'
>
  Complete
</Badge>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Badge padding='5px 15px' borderRadius='15px' bgColor='#F16244'>Not started</Badge>
					<Badge padding='5px 15px' borderRadius='15px' bgColor='#CF3197' color='#009688'>In-progress</Badge>
					<Badge padding='5px 15px' borderRadius='15px' bgColor='#B1CF31' fontWeight='600'>Complete</Badge>
				</span>
				<div className='divider'></div>
				<p>The badge is just like a decoration. There's nothing else to it!</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Badge</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'badge')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'badge')].propsStyles} />
			</section>
		</>
	)
}

export default DocBadge;