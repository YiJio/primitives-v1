//dependencies
import React, { useState } from 'react';

import { Code } from '../../../components/typography';
import { Box, Button, Tooltip } from '../../../components/primitives';

import '../docs.css';

const margins = ['mt, marginTop', 'mr, marginRight', 'mb, marginBottom', 'ml, marginLeft', 'mx, marginX', 'my, marginY'];
const paddings = ['pt, paddingTop', 'pr, paddingRight', 'pb, paddingBottom', 'pl, paddingLeft', 'px, paddingX', 'py, paddingY'];

const DocTable = ({ propData }) => {

	return (
		<table cellPadding={0} cellSpacing={0} border={0}>
			<thead>
				<tr>
					<th width="30%">Prop</th>
					<th width="15%">Type</th>
					<th width="15%">Default</th>
					<th>Possible values</th>
				</tr>
			</thead>
			<tbody>
				{propData.map((prop, index) => (
					<tr key={index}>
						<td>
							{/*38baed*/}
							{prop.name.split(', ').map((n, i) => (
								<Code key={i} margin='5px 0' marginRight='5px' bgColor='blue' fontSize='12px' label={n} />
							))}
							<Tooltip width='200px' text={prop.description.map((desc, index2) => (
								<p key={index2}>{desc}</p>
							))}>
								<Button variant='outline' margin='0 5px 0 0' padding='2px 0' width='20px' borderRadius='5px' fontSize='12px'>?</Button>
							</Tooltip>
							{prop.note && <Tooltip width='200px' text={prop.note.map((n, index2) => (
								<p key={index2}>Note: {n}</p>
							))}>
								<Button variant='outline' padding='2px 0' width='20px' borderRadius='5px' fontSize='12px'>!</Button>
							</Tooltip>}
							{prop.name.indexOf('margin') !== -1 && <>
								{margins.map((row, ri) => (
									<Box key={ri} padding='0 10px' lineHeight='inherit'>
										{row.split(', ').map((m, mi) => (
											<Code key={mi} margin='5px 5px 0 0' bgColor='blue' fontSize='12px' label={m} />
										))}
									</Box>
								))}
							</>}
							{prop.name.indexOf('padding') !== -1 && <>
								{paddings.map((row, ri) => (
									<Box key={ri} padding='0 10px' lineHeight='inherit'>
										{row.split(', ').map((m, mi) => (
											<Code key={mi} margin='5px 5px 0 0' bgColor='blue' fontSize='12px' label={m} />
										))}
									</Box>
								))}
							</>}
						</td>
						<td><Code margin='5px 0' fontSize='12px' label={prop.type} /></td>
						<td>{/*96e2ff*/}{prop.default !== '' ? <Code margin='5px 0' bgColor='cyan' fontSize='12px' label={prop.default} /> : <p>-</p>}</td>
						<td>
							{prop.anyCodes !== '' ? <>
								{prop.anyCodes.split(', ').map((code, index3) => (
									<span key={index3}>
										<Code margin='5px 5px 0 0' fontSize='12px' label={code} />
									</span>
								))}
							</> : <>
								{prop.anyValues.map((value, index4) => (
									<p key={index4}>{value}</p>
								))}
							</>}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default DocTable;