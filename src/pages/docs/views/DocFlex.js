//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Box, Button, Flex, Text } from '../../../components/primitives';

import DocTableCSS from '../components/DocTableCSS';

import { flexAttributes } from '../docDataCSS';

import { HiAcademicCap, HiHome, HiArrowRightOnRectangle } from 'react-icons/hi2';

const DocFlex = () => {

	return (
		<>
			<h1>Flex</h1>
			<p>A flex is a <Link to='/docs/box'><b>Box</b></Link> component container used as a layout.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Flex</b>, import the flex's path.</p>
				<Highlight className='javascript'>
					{`import { Flex } from 'your-path-to-flex';\n\n<Flex>Just some information here.</Flex>`}
				</Highlight>
				<Flex>Just some information here.</Flex>
				<div className='divider'></div>
				<p>There doesn't seem to be anything besides the text. What flex does is control how the content is displayed inside. You can see that happening below with a regular icon and a centered icon.</p>
				<Highlight className='javascript'>
					{`import { Flex } from 'your-path-to-flex';\nimport { HiAcademicCap } from 'react-icons/hi2';\n\n<Flex gap='10px'>
  <Flex
    width='50px'
    height='50px'
    borderRadius='50%'
    bgColor='#B1CF31'
    fontSize='20px'
  >
    {<HiAcademicCap />}
  </Flex>
  <Flex
    align='center'
    justify='center'
    ...
  >
    {<HiAcademicCap />}
  </Flex>
</Flex>`}
				</Highlight>
				<Flex gap='10px'>
					<Flex width='50px' height='50px' borderRadius='50%' bgColor='#B1CF31' fontSize='20px'>{<HiAcademicCap />}</Flex>
					<Flex align='center' justify='center' width='50px' height='50px' borderRadius='50%' bgColor='#B1CF31' fontSize='20px'>{<HiAcademicCap />}</Flex>
				</Flex>
				<div className='divider'></div>
				<p>Let's try an example of a typical header.</p>
				<Highlight className='javascript'>
					{`import { Flex } from 'your-path-to-flex';\nimport { HiHome, HiArrowRightOnRectangle } from 'react-icons/hi2';\n\n<Flex
  padding='10px'
  align='center'
  justify='space-between'
  bgColor='#F8F8F8'
  borderColor='transparent transparent skyblue'
  borderWidth='2px'
  borderStyle='solid'
>
  <Box
    padding='0'
    color='skyblue'
    fontSize='20px'
    fontWeight='600'
  >
    Dashboard
  </Box>
  <Flex>
    <Button
      borderRadius='5px'
      bgColor='skyblue'
      leftIcon={<HiHome/>}
    >
      Home
    </Button>
    <Button
      ...
      rightIcon={<HiArrowRightOnRectangle/>}
    >
      Sign out
    </Button>
  </Flex>
</Flex>`}
				</Highlight>
				<Flex padding='10px' align='center' justify='space-between' bgColor='#F8F8F8' borderColor='transparent transparent skyblue' borderWidth='2px' borderStyle='solid'>
					<Box padding='0' color='skyblue' fontSize='20px' fontWeight='600'>Dashboard</Box>
					<Flex>
						<Button borderRadius='5px' bgColor='skyblue' leftIcon={<HiHome />}>Home</Button>
						<Button borderRadius='5px' bgColor='skyblue' rightIcon={<HiArrowRightOnRectangle />}>Sign out</Button>
					</Flex>
				</Flex>
				<div className='divider'></div>
				<p>Ultimately, the flex is mostly used as a row or column (<code className='q'>direction='column'</code>). It doesn't come with the grid properties, but it can definitely be turned into a simple grid with <code className='q'>wrap='wrap'</code> and contains items with the same widths and heights. The flex can also be nested with other flex boxes.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Flex</h3>
				<p>By default, the <b>Flex</b> is just a <b>Box</b> component with the attribute <code className='q'>display='flex'</code>, so you can pass in the box props to do the styling.</p>
				<p>The below are the props and their equivalent CSS styling attributes that can be customized in the <b>Flex</b> component (assuming you know what they are).</p>
				<Text color='red'>Note: Most of these are shorthands and can only be used in this component!</Text>
				{flexAttributes.map((row, index) => (
					<DocTableCSS key={index} array={row} />
				))}
			</section>
		</>
	)
}

export default DocFlex;