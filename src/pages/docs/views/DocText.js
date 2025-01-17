//dependencies
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Text } from '../../../components/primitives';

import DocTableCSS from '../components/DocTableCSS';

import { textAttributes } from '../docDataCSS';

const DocText = () => {

	return (
		<>
			<h1>Text</h1>
			<p>A text is a <Link to='/docs/box'><b>Box</b></Link> component used mostly for texts/typography.</p>
			<hr />
			<section>
				<h2>Basics</h2>
				<p>To define a <b>Text</b>, import the text's path.</p>
				<Highlight className='javascript'>
					{`import { Text } from 'your-path-to-text';\n\n<Text>Just some information here.</Text>`}
				</Highlight>
				<Text>Just some information here.</Text>
				<div className='divider'></div>
				<p>The <b>Text</b> is really just a paragraph with the <code className='q'>p</code> tags. As you can see, it is inheriting the base paragraph styles with <code className='q'>margin='16px'</code>, which is the default margin.</p>
				<p>If you know typography, then you can adjust your texts easily. You can also customize inline styles (usually by setting <code className='q'>as='span'</code>). Look below for an example.</p>
				<Highlight className='javascript'>
{`import { Text } from 'your-path-to-text';\n\n<Text
  as='h3'
  color='blue'
  family='"DM Sans", sans-serif'
  tracking='2px'
>
  Styled heading
</Text>
<Text
  color='blue'
  family='"DM Sans", sans-serif'
  size='14px'
  tracking='2px'
  spacing='10px'
  align='justify'
>
  <a>Lorem ipsum</a> dolor sit amet, <Text as='a'>consectetur</Text> adipiscing elit. Ut congue lacinia erat eu lobortis. <Text as='a' color='maroon' size='20px'>Phasellus viverra</Text> blandit sapien ut mattis. <Text as='span' color='red'>Cras</Text> fermentum tristique leo a egestas. Ut iaculis nulla lacus, eu egestas mi gravida ac.
</Text>`}
				</Highlight>
				<Text as='h3' color='blue' family='"DM Sans", sans-serif' tracking='2px'>Styled heading</Text>
				<Text color='blue' family='"DM Sans", sans-serif' size='14px' tracking='2px' spacing='10px' align='justify'><a>Lorem ipsum</a> dolor sit amet, <Text as='a'>consectetur</Text> adipiscing elit. Ut congue lacinia erat eu lobortis. <Text as='a' color='maroon' size='20px'>Phasellus viverra</Text> blandit sapien ut mattis. <Text as='span' color='red'>Cras</Text> fermentum tristique leo a egestas. Ut iaculis nulla lacus, eu egestas mi gravida ac.</Text>
				<div className='divider'></div>
				<p>Note that in the above example, the regular HTML anchor <code>a</code> tag was used and then the another <b>Text</b> with <code className='q'>as='a'</code>. You will not notice the difference since the CSS of this documentation sets links without an underline. However, you can see a changing color of another link in action.</p>
				<p>You can still use the regular <code className='q'>p</code> tags and other HTML elements. You can pass in <code className='q'>className</code>s to do the styling, but you can also use the <b>Text</b> component to pass in variable props that change the text (which is visually better than inline CSS).</p>
			</section>
			<hr />
			<section>
				<h2>API Reference</h2>
				<h3>Text</h3>
				<p>By default, the <b>Text</b> is just a <b>Box</b> component with the prop <code className='q'>as='p'</code>, so you can pass in the box props to do the styling. Please check <a href='https://www.w3schools.com/html/html_blocks.asp' target='_blank'>here</a> to see what different HTML elements can be used, both block and inline.</p>
				<p>The below are the props and their equivalent CSS styling attributes that can be customized in the <b>Text</b> component (assuming you know what they are).</p>
				<Text as='p' color='red'>Note: Most of these are shorthands and can only be used in this component!</Text>
				{textAttributes.map((row, index) => (
					<>
						<DocTableCSS key={index} array={row} />
					</>
				))}
			</section>
		</>
	)
}

export default DocText;