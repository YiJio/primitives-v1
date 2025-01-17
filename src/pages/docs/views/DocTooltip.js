//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';

import { Button, Tooltip } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';

const DocTooltip = () => {

	return (
		<>
			<h1>Tooltip</h1>
			<p>A tooltip contains additional information when hovered over an element.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Tooltip</b>, import the tooltip's path. In a tooltip, what's important is the <code className='q'>text</code> prop, which is where the additional, brief information for your label resides. You can pass in the <code className='q'>label</code> prop, but you can also wrap any text for the label within the <b>Tooltip</b> tags.</p>
				<Highlight className='javascript'>
					{`import { Tooltip } from 'your-path-to-tooltip';\n\n<Tooltip text='You see me when you hover!' isHelp={true}>Hover me</Tooltip>\n<Tooltip label='Hover me' text='You see me when you hover!' isHelp={true} />`}
				</Highlight>
				<span style={{ display: 'inline-block' }}>
					<Tooltip text='You see me when you hover!' isHelp={true}>Hover me</Tooltip>
				</span>
				<div className='divider'></div>
				<p>You probably noticed that the <code className='q'>isHelp</code> prop was added. This adds a dotted line under the label with a help cursor on hover. This is best used on text labels and not on some element label.</p>
				<p>You might want to place the tooltip in a specific direction. The following introduces the four main directions, but you can also customize it to appear on the start or end.</p>
				<Highlight className='javascript'>
					{`import { Tooltip } from 'your-path-to-tooltip';\n\n<Tooltip placement='top' text='I am placed on the top.'>Top</Tooltip>\n<Tooltip placement='bottom' text='I am placed on the bottom.'>Bottom</Tooltip>\n<Tooltip placement='left' text='I am placed to the left.'>Left</Tooltip>\n<Tooltip placement='right' text='I am placed to the right.'>Right</Tooltip>`}
				</Highlight>
				<span style={{ display: 'flex', gap: '10px' }}>
					<Tooltip placement='top' text='I am placed on the top.'>Top</Tooltip>
					<Tooltip placement='bottom' text='I am placed on the bottom.'>Bottom</Tooltip>
					<Tooltip placement='left' text='I am placed to the left.'>Left</Tooltip>
					<Tooltip placement='right' text='I am placed to the right.'>Right</Tooltip>
				</span>
				<div className='divider'></div>
				<p>A tooltip usually comes with an arrow, but you might also want to take that away when necessary. Let's try using the tooltip with a button label, expanding the default width of <code className='q'>130px</code>, and center align the text.</p>
				<Highlight className='javascript'>
{`import { Tooltip } from 'your-path-to-tooltip';\n\n<Tooltip
  text='Wow, you took the arrow away from me!'
  placement='right'
  width='175px'
  textAlign='center'
  hasArrow={false}
>
  <Button>Hover me</Button>
</Tooltip>`}
				</Highlight>
				<span style={{ display: 'inline-block' }}>
					<Tooltip text='Wow, you took the arrow away from me!' placement='right' width='175px' textAlign='center' hasArrow={false}>
						<Button>Hover me</Button>
					</Tooltip>
				</span>
				<div className='divider'></div>
				<p>What if you have a light and dark theme, or you just prefer having a black background? That would make the tooltip look invisible! Well, you can give it a color, too. Note that it is preferable with an alpha value. If you do decide on an alpha value, it can only be written in HEXA or RGBA format (HSLA not supported for now).</p>
				<Highlight className='javascript'>
{`import { Tooltip } from 'your-path-to-tooltip';\n\n<Tooltip
  text='Nice and bright!'
  bgColor='rgba(56,186,237,0.9)'
  textAlign='center'
>
  Hover me
</Tooltip>`}
				</Highlight>
				<span style={{ display: 'inline-block' }}>
					<Tooltip text='Nice and bright!' bgColor='rgba(56,186,237,0.9)' textAlign='center'>Hover me</Tooltip>
				</span>
				<div className='divider'></div>
				<p>That concludes the basics of the tooltip component. You can always check the reference for more props.</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Tooltip</h3>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'tooltip')].propsMain} />
				<p>Styling props:</p>
				<DocTable propData={docData[docData.findIndex(d => d.name === 'tooltip')].propsStyles} />
			</section>
		</>
	)
}

export default DocTooltip;