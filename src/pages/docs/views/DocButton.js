//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';

import { Button } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

import { HiAcademicCap } from 'react-icons/hi2';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const DocButton = () => {

	const onSampleClick = (e) => {
		alert('You clicked a button!');
	}

	return (
		<>
			<h1>Button</h1>
			<p>A button is used to trigger an action or event.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Button</b>, import the button's path. You can pass in the <code className='q'>label</code> prop, but you can also wrap any text within the <b>Button</b> tags.</p>
				<Highlight className='javascript'>
					{`import { Button } from 'your-path-to-button';\n\n<Button>A very cool button</Button>\n<Button label='A very cool button' />`}
				</Highlight>
				<span style={{ display: 'inline-block' }}>
					<Button label='A very cool button' />
				</span>
				<div className='divider'></div>
				<p>There are four variants to the button. If you wish to make the button look different, you can pass in a <code className='q'>variant</code> and <code className='q'>color</code> prop.</p>
				<Highlight className='javascript'>
					{`import { Button } from 'your-path-to-button';\n\n<Button bgColor='#38BAED'>Solid button</Button>\n<Button variant='outline' bgColor='#38BAED'>Outline button</Button>\n<Button variant='ghost' bgColor='#38BAED'>Ghost button</Button>\n<Button variant='soft' bgColor='#38BAED'>Soft button</Button>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Button bgColor='#38BAED' label='Solid button' />
					<Button variant='outline' bgColor='#38BAED' label='Outline button' />
					<Button variant='ghost' bgColor='#38BAED' label='Ghost button' />
					<Button variant='soft' bgColor='#38BAED' label='Soft button' />
				</span>
				<div className='divider'></div>
				<p>You can also put an icon before or after the label (or even without the label). The below uses an icon from the <code className='q'>react-icons</code> library. You can also customize it further like the below:</p>
				<Highlight className='javascript'>
					{`import { Button } from 'your-path-to-button';\nimport { HiAcademicCap } from 'react-icons/hi2';\n\n<Button
  variant='outline'
  padding='5px 10px'
  borderRadius='15px'
  bgColor='#B1CF31'
  leftIcon={<HiAcademicCap />}
>
  Leveled up!
</Button>\n<Button
  ...
  rightIcon={<HiAcademicCap />}
>
  Mastered this!
</Button>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Button variant='outline' padding='5px 10px' borderRadius='15px' bgColor='#B1CF31' leftIcon={<HiAcademicCap />}>Leveled up!</Button>
					<Button variant='outline' padding='5px 10px' borderRadius='15px' bgColor='#B1CF31' rightIcon={<HiAcademicCap />}>Mastered this!</Button>
				</span>
				<div className='divider'></div>
				<p>But what's a button without anything that comes out of clicking it? It's just the same as a regular button: you pass in your action by the <code className='q'>onClick</code> prop.</p>
				<Highlight className='javascript'>
					{`import { Button } from 'your-path-to-button';\n\n// inside your functional component\nconst onSampleClick = (e) => {
  alert('You clicked a button!');
}\n\n// inside your functional component's return\n<Button onClick={onSampleClick}>Click me!</Button>`}
				</Highlight>
				{/*<SyntaxHighlighter language='javascript' style={atomOneDark}>
				{`import { Button } from 'your-path-to-button';\n\n// inside your functional component\nconst onSampleClick = (e) => {
  alert('You clicked a button!');
}\n\n// inside your functional component's return\n<Button onClick={onSampleClick}>Click me!</Button>`}
				</SyntaxHighlighter>*/}
				<span style={{ display: 'inline-block' }}>
					<Button onClick={onSampleClick} label='Click me!' />
				</span>
				<div className='divider'></div>
				<p>And that's it! You can look at the API reference below to customize your buttons further.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Button</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'button')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'button')].propsStyles} />
			</section>
		</>
	)
}

export default DocButton;