//dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import { Avatar, AvatarGroup, Box } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

const DocAvatar = () => {

	return (
		<>
			<h1>Avatar</h1>
			<p>An avatar is used to show basic information about a user.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define an <b>Avatar</b>, import the avatar's path. Normally, an avatar should come with an image, but if there isn't, a fallback with just the first letters of the name are shown.</p>
				<Highlight className='javascript'>
					{`import { Avatar } from 'your-path-to-avatar';\n\n<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' />\n<Avatar name='Kola Tioluwani' />`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' />
					<Avatar name='Kola Tioluwani' />
				</span>
				<div className='divider'></div>
				<p>You can also customize the background color of the fallback. A border color and width can also be applied with an image and fallback.</p>
				<Highlight className='javascript'>
					{`import { Avatar } from 'your-path-to-avatar';\n\n<Avatar
  name='Dan Abrahmov'
  imgSrc='https://bit.ly/dan-abramov'
  borderColor='#00BCD4'
  borderWidth='3px'
/>\n<Avatar
  name='Kola Tioluwani'
  bgColor='#319795'
  borderColor='#FF5722'
  borderWidth='3px'
/>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' borderColor='#00BCD4' borderWidth='3px' />
					<Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' borderWidth='3px' />
				</span>
				<div className='divider'></div>
				<p>You can also customize the size of the avatar and make it a circle, rounded, or square shape.</p>
				<Highlight className='javascript'>
					{`import { Avatar } from 'your-path-to-avatar';\n\n<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='square' />\n<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='round' size='60px' />\n<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' size='80px' />`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='square' />
					<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='round' size='60px' />
					<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' size='80px' />
				</span>
				<div className='divider'></div>
				<p>If you want to show a group of users, there is an <b>AvatarGroup</b> component that you can wrap the <b>Avatar</b> components with. The below also uses the <Link to='/docs/box'><b>Box</b></Link> component.</p>
				<p>Note that the group controls the overall <code className='q'>variant</code>, <code className='q'>size</code>, and <code className='q'>borderWidth</code> of the avatar. If you set an individual avatar to <code className='q'>50px</code> when the group was <code className='q'>40px</code>, it wouldn't work. The only styles you can override with individual components are the coloring: <code className='q'>bgColor</code> and <code className='q'>borderColor</code>.</p>
				<Highlight className='javascript'>
					{`import { Avatar, AvatarGroup } from 'your-path-to-avatar';\nimport { Box } from 'your-path-to-box';\n\n<Box bgColor='black'>
  <AvatarGroup
    maxUsers={3}
    gap='-10px'
    size='45px'
    borderWidth='3px'
    borderColor='#FFFFFF'
  >
    <Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' />
    <Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' borderColor='#FF0000' />
    <Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' />
    <Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
    <Avatar name='Kent Dodds' imgSrc='https://bit.ly/kent-c-dodds' />
    <Avatar name='Prosper Otemuyiwa' imgSrc='https://bit.ly/prosper-baba' />
    <Avatar name='Christian Nwamba' imgSrc='https://bit.ly/code-beast' />
  </AvatarGroup>
</Box>`}
				</Highlight>
				<Box bgColor='black'>
					<AvatarGroup maxUsers={3} gap='-10px' size='45px' borderWidth='3px' borderColor='#FFFFFF'>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' borderColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' />
						<Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
						<Avatar name='Kent Dodds' imgSrc='https://bit.ly/kent-c-dodds' />
						<Avatar name='Prosper Otemuyiwa' imgSrc='https://bit.ly/prosper-baba' />
						<Avatar name='Christian Nwamba' imgSrc='https://bit.ly/code-beast' />
					</AvatarGroup>
				</Box>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Avatar</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'avatar')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'avatar')].propsStyles} />
				<div className='divider'></div>
				<h3>AvatarGroup</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'avatar-group')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'avatar-group')].propsStyles} />
			</section>
		</>
	)
}

export default DocAvatar;