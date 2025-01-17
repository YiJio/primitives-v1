//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';

import { Alert, Badge } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

import { HiCheckCircle, HiXCircle, HiArrowUpCircle, HiMinusCircle } from 'react-icons/hi2';

const DocAlert = () => {

	return (
		<>
			<h1>Alert</h1>
			<p>An alert is used to show the state after any action or event.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Alert</b>, import the alert's path. You can pass in the <code className='q'>description</code> prop, but you can also wrap any text within the <b>Alert</b> tags.</p>
				<Highlight className='javascript'>
					{`import { Alert } from 'your-path-to-alert';\n\n<Alert title='Success'>Your input was successful.</Alert>\n<Alert title='Success' description='Your input was successful.' />`}
				</Highlight>
				<Alert title='Success' description='Your input was successful.' />
				<div className='divider'></div>
				<p>That doesn't look like a success without the colors. You can customize the background color and also add an icon to make it look more like it. The below uses an icon from the <code className='q'>react-icons</code> library.</p>
				<Highlight className='javascript'>
{`import { Alert } from 'your-path-to-alert';\nimport { HiCheckCircle } from 'react-icons/hi2';\n\n<Alert
  title='Success'
  bgColor='#B1CF31'
  icon={<HiCheckCircle />}
>
  Your input was successful.
</Alert>`}
				</Highlight>
				<Alert icon={<HiCheckCircle />} title='Success' description='Your input was successful.' bgColor='#B1CF31' />
				<div className='divider'></div>
				<p>You can choose from one of these variant styles to customize the alert further. Note the different color codes/names passed in.</p>
				<Highlight className='javascript'>
{`import { Alert } from 'your-path-to-alert';\nimport { HiXCircle, HiMinusCircle, HiArrowUpCircle, HiCheckCircle } from 'react-icons/hi2';\n\n<Alert
  variant='solid'
  title='Warning'
  bgColor='hsl(0,50%,50%)'
  color='#FFFFFF'
  icon={<HiXCircle/>}
>
  Your edit was not successfully saved.
</Alert>
<Alert
  variant='outline'
  title='Being reviewed'
  bgColor='#FFC107'
  icon={<HiMinusCircle/>}
>
  Your edit is being processed and reviewed.
</Alert>
<Alert
  variant='soft'
  title='Sending'
  bgColor='skyblue'
  icon={<HiArrowUpCircle/>}
>
  Your edit is being sent upstream.
</Alert>
<Alert
  variant='left-accent'
  title='Success'
  bgColor='rgba(0%,50%,40%,50%)'
  icon={<HiCheckCircle/>}
>
  Your edit is successfully verified.
</Alert>`}
				</Highlight>
				<Alert icon={<HiXCircle/>} title='Warning' description='Your edit was not successfully saved.' variant='solid' bgColor='hsl(0,50%,50%)' color='#FFFFFF' />
				<Alert icon={<HiMinusCircle/>} title='Being reviewed' description='Your edit is being processed and reviewed.' variant='outline' bgColor='#FFC107' />
				<Alert icon={<HiArrowUpCircle/>} title='Sending' description='Your edit is being sent upstream.' variant='soft' bgColor='skyblue' />
				<Alert icon={<HiCheckCircle/>} title='Success' description='Your edit is successfully verified.' variant='left-accent' bgColor='rgba(0%,50%,40%,50%)' />
				<div className='divider'></div>
				<p>Check out the API reference for more props that you can pass in to customize the <b>Alert</b> component.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Alert</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'alert')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'alert')].propsStyles} />
			</section>
		</>
	)
}

export default DocAlert;