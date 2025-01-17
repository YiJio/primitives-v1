//dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import { Breadcrumb, BreadcrumbItem, Box } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

import { RiSeedlingFill, RiArrowRightSLine } from 'react-icons/ri';
import Base from '../../../components/primitives/Base';

const DocBreadcrumb = () => {

	return (
		<>
			<h1>Breadcrumb</h1>
			<p>A breadcrumb is used as a way to navigate back to the previous page(s).</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Breadcrumb</b>, import the breadcrumb's path. In order for a breadcrumb to work, you need to also define the <b>BreadcrumbItem</b>. All items before the last one requires the <code className='q'>link</code> prop. The <code className='q'>title</code> prop can also be passed to show the text on hover.</p>
				<Highlight className='javascript'>
					{`import { Breadcrumb } from 'your-path-to-breadcrumb';\n\n<Breadcrumb>
  <BreadcrumbItem link='/docs' title='Docs'>Docs</BreadcrumbItem>
  <BreadcrumbItem link='/docs/component' title='Component'>Component</BreadcrumbItem>
  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Breadcrumb>
						<BreadcrumbItem link='/docs' title='Docs'>Docs</BreadcrumbItem>
						<BreadcrumbItem link='/docs/component' title='Component'>Component</BreadcrumbItem>
						<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
					</Breadcrumb>
				</span>
				<div className='divider'></div>
				<p>As you can see, the breadcrumb doesn't look styled. You are able to pass in any of the styles listed on this <Link to='/docs/style-props' title='Style props'><b>page</b></Link>, as well as a <code className='q'>separator</code> prop to customize your separator. It can be a text string or an element.</p>
				<Highlight className='javascript'>
{`import { Breadcrumb } from 'your-path-to-breadcrumb';\nimport { RiSeedlingFill } from 'react-icons/ri';\n\n<Breadcrumb separator={<RiSeedlingFill />}>
  <BreadcrumbItem link='/docs' title='Docs'>Docs</BreadcrumbItem>
  <BreadcrumbItem link='/docs/component' title='Component'>Component</BreadcrumbItem>
  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Breadcrumb separator={<RiSeedlingFill />}>
						<BreadcrumbItem link='/docs' title='Docs'>Docs</BreadcrumbItem>
						<BreadcrumbItem link='/docs/component' title='Component'>Component</BreadcrumbItem>
						<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
					</Breadcrumb>
				</span>
				<div className='divider'></div>
				<p>No separator? Well, you can do that by replacing the value with a blank space enclosed in single/double quotes. By default, it will return the <code className='q'>/</code> string.</p>
				<p>Let's make the breadcrumb look more nice by utilizing the styles from the <Link to='/docs/style-props' title='Style props'><b>styles page</b></Link>.</p>
				<Highlight className='javascript'>
{`import { Breadcrumb } from 'your-path-to-breadcrumb';\nimport { RiArrowRightSLine } from 'react-icons/ri';\n\n<Breadcrumb
  padding='10px'
  gap='5px'
  alignItems='center'
  bgColor='rgba(0,0,0,0.8)'
  color='white'
  borderRadius='10px'
  separator={<RiArrowRightSLine />}
>
  <BreadcrumbItem
    link='/docs'
    title='Docs'
    padding='5px'
    bgColor='rgba(255,255,255,0.5)'
    color='black'
    borderRadius='5px'
  >
    Docs
  </BreadcrumbItem>
  <BreadcrumbItem
    link='/docs/component'
    title='Component'
    ...
  >
    Component
  </BreadcrumbItem>
  <BreadcrumbItem
    padding='5px'
    bgColor='rgba(0,0,0,0.5)'
    borderRadius='5px'
  >
    Breadcrumb
  </BreadcrumbItem>
</Breadcrumb>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Breadcrumb separator={<RiArrowRightSLine />} padding='10px' gap='5px' alignItems='center' bgColor='rgba(0,0,0,0.8)' color='white' borderRadius='10px'>
						<BreadcrumbItem link='/docs' title='Docs' padding='5px' bgColor='rgba(255,255,255,0.5)' borderRadius='5px' color='black'>Docs</BreadcrumbItem>
						<BreadcrumbItem link='/docs/component' title='Component' padding='5px' bgColor='rgba(255,255,255,0.5)' borderRadius='5px' color='black'>Component</BreadcrumbItem>
						<BreadcrumbItem padding='5px' bgColor='rgba(0,0,0,0.5)' borderRadius='5px'>Breadcrumb</BreadcrumbItem>
					</Breadcrumb>
				</span>
				<div className='divider'></div>
				<p>Go ahead and customize your breadcrumbs however you like.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<p>Check <Link to='/docs/style-props' title='Style props'><b>style props</b></Link> if you just want to change the styling.</p>
				<h3>Breadcrumb</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'breadcrumb')].propsMain} />
				<div className='divider'></div>
				<h3>BreadcrumbItem</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'breadcrumb-item')].propsMain} />
			</section>
		</>
	)
}

export default DocBreadcrumb;