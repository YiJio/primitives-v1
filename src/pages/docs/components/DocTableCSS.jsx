//dependencies
import React, { useState } from 'react';

import { Badge, Box, Flex } from '../../../components/primitives';

import '../docs.css';

const DocTableCSS = ({ array }) => {
	var divisibleBy = 1;
	var reduceLength = array.length;
	var lastLineRow = reduceLength % divisibleBy == 0;
	// if last row has exactly divisibleBy items, make the row before be the last one to have lines
	if (lastLineRow) { reduceLength -= divisibleBy; }
	else {
		// if there's no divisibleBy items, get it to the point where the last row's index (should be divisible by divisibleBy) is the last one to render lines
		while (reduceLength % divisibleBy !== 0) { reduceLength--; }
	}

	return (
		<Flex marginTop='10px' wrap='wrap' gap='0' borderRadius='5px' border='1px solid #d9d9d9' fontSize='14px'>
			{array.map((item, index) => (
				<Box key={index} padding='10px' width={'calc(100% / ' + divisibleBy + ')'} borderBottom={index < reduceLength && '1px solid #e5e5e5'}>
					{item.name.split(', ').map((n, i) => (
						<Badge key={i} margin='0' marginRight='5px' bgColor='#38baed' fontSize='12px' label={n} isCode={true} />
					))}
					{item.equal && <>
						=
						{item.equal.split(', ').map((e, i) => (
							<>
								<Badge key={i} margin='0' marginLeft='5px' fontSize='12px' label={e} isCode={true} />
								{i !== item.equal.split(', ').length - 1 && ' +'}
							</>
						))}
					</>}
				</Box>
			))}
		</Flex>
	)
}

export default DocTableCSS;