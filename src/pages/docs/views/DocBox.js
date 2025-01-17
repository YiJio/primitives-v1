//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Box, Text } from '../../../components/primitives';

import DocTable from '../components/DocTable';
import DocTableCSS from '../components/DocTableCSS';

import { docData } from '../docData';
import { attributes, attributeTitles } from '../docDataCSS';

const DocBox = () => {

	return (
		<>
			<h1>Box</h1>
			<p>A box is just a regular <code className='q'>div</code> element used as a container of some information.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Box</b>, import the box's path.</p>
				<Highlight className='javascript'>
					{`import { Box } from 'your-path-to-box';\n\n<Box>Just some information here.</Box>`}
				</Highlight>
				<Box>Just some information here.</Box>
				<div className='divider'></div>
				<p>Pretty simple... but boring. The above box's only got a default prop of <code className='q'>padding='20px'</code>. You can pass in some basic styling to make it hold information. Remember: you can pass any component or element inside the tags.</p>
				<Highlight className='javascript'>
					{`import { Box } from 'your-path-to-box';\n\n<Box
  borderWidth='2px'
  borderStyle='dotted'
  borderColor='#B1CF31'
  borderRadius='15px'
>
  Still plain text
</Box>`}
				</Highlight>
				<Box borderWidth='2px' borderStyle='dotted' borderColor='#B1CF31' borderRadius='15px'>Still plain text</Box>
				<div className='divider'></div>
				<p>The box can be used as anything. It can be a parent and or a child element. However, you might want to make the box as your layout, but you should probably check <Link to='/docs/flex'><b>Flex</b></Link> components for that purpose.</p>
				<p>The box has many styling props that you can pass in, most of which can be styled by CSS alone.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Box</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'box')].propsMain} />
				<p>Please check <a href='https://www.w3schools.com/html/html_blocks.asp' target='_blank'>here</a> to see what different HTML elements can be used, both block and inline.</p>
				<p>The below are the props and their equivalent CSS styling attributes that can be customized in the <b>Box</b> component (assuming you know what they are).</p>
				<Text color='red'>Note 1: Only <Link to='/docs/flex'><b>Flex</b></Link> and <Link to='/docs/text'><b>Text</b></Link> components are based off of the <b>Box</b> component. If you try to use these props below from like a <Link to='/docs/button'><b>Button</b></Link> or some other component, it will not work unless specified in the API.</Text>
				<Text color='red'>Note 2: The shorthands here are only possible for this component. If shorthands are not specified in other components, then it will not work!</Text>
				{attributes.map((row, index) => (
					<>
						<h4>{attributeTitles[index]}</h4>
						<DocTableCSS key={index} array={row} />
					</>
				))}
			</section>
		</>
	)
}

export default DocBox;