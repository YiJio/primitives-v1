import React, { useState } from 'react';

import { Alert, Button, Flex, Tooltip } from './components/primitives';

import { HiAcademicCap } from 'react-icons/hi2';

const Component = (props) => {

	const onClick = () => {
		alert('hello')
	}

	return (
		<>
			<Flex justify='center'>
			</Flex>
			<Flex margin='0 auto' direction='column' justify='center' align='center' width='50%'>
				<Alert icon={<HiAcademicCap/>} title='Warning' description='Your input was not sent.' variant='solid' bgColor='hsl(0,50%,50%)' color='#FFFFFF' />
				<Alert icon={<HiAcademicCap/>} title='Warning' description='Your input was not sent.' variant='solid' bgColor='#FF6653' />
				<Alert icon={<HiAcademicCap/>} title='Success' description='Your input was sent.' variant='soft' bgColor='rgba(0%,50%,40%,50%)' />
				<Alert icon={<HiAcademicCap/>} title='Success' description='Your input was sent.' variant='outline' bgColor='hsl(0,50%,50%)' />
				<Alert icon={<HiAcademicCap/>} title='Success' description='Your input was sent.' variant='left-accent' bgColor='blue' />
			</Flex>
			<Flex justify='center'>
				<Flex direction='column' align='center' justify='center'>
					<Tooltip text='Top (center) tooltip with no arrow' placement='top' hasArrow={false}>
						<Button label='SOLID Top no arrow' icon={<HiAcademicCap />} color='#BAD3A1' variant='solid' borderRadius='15px' onClick={onClick} />
					</Tooltip>
					<Tooltip text='Top (center) tooltip with arrow' placement='top'>
						<Button label='OUTLINE Top with arrow' icon={<HiAcademicCap />} color='#BAD3A1' variant='outline' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Top (start) tooltip with arrow' placement='top-start'>
						<Button label='GHOST Top-start with arrow' icon={<HiAcademicCap />} color='#BAD3A1' variant='ghost' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Top (end) tooltip with arrow' placement='top-end'>
						<Button label='SOFT Top-end with arrow' icon={<HiAcademicCap />} color='#BAD3A1' variant='soft' borderRadius='15px' />
					</Tooltip>
					<Button icon={<HiAcademicCap />} color='#BAD3A1' isDisabled={true}>SOLID Disabled</Button>
				</Flex>
				<Flex direction='column' align='center' justify='center'>
					<Tooltip text='SOLID Right (center) tooltip with no arrow' placement='right' hasArrow={false}>
						<Button label='Right no arrow' icon={<HiAcademicCap />} color='#FF6653' variant='solid' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Right (center) tooltip with arrow' placement='right'>
						<Button label='OUTLINE Right with arrow' icon={<HiAcademicCap />} color='#FF6653' variant='outline' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Right (start) tooltip with arrow' placement='right-start'>
						<Button label='GHOST Right-start with arrow' icon={<HiAcademicCap />} color='#FF6653' variant='ghost' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Right (end) tooltip with arrow' placement='right-end'>
						<Button label='SOFT Right-end with arrow' icon={<HiAcademicCap />} color='#FF6653' variant='soft' borderRadius='15px' />
					</Tooltip>
					<Button icon={<HiAcademicCap />} color='#FF6653' variant='outline' isDisabled={true}>OUTLINE Disabled</Button>
				</Flex>
				<Flex direction='column' align='center' justify='center'>
					<Tooltip text='Bottom (center) tooltip with no arrow' placement='bottom' hasArrow={false}>
						<Button label='SOLID Bottom no arrow' icon={<HiAcademicCap />} color='#DDDDDD' variant='solid' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Bottom (center) tooltip with arrow' placement='bottom'>
						<Button label='OUTLINE Bottom with arrow' icon={<HiAcademicCap />} color='#DDDDDD' variant='outline' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Bottom (start) tooltip with arrow' placement='bottom-start'>
						<Button label='GHOST Bottom-start with arrow' icon={<HiAcademicCap />} color='#DDDDDD' variant='ghost' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Bottom (end) tooltip with arrow' placement='bottom-end'>
						<Button label='SOFT Bottom-end with arrow' icon={<HiAcademicCap />} color='#DDDDDD' variant='soft' borderRadius='15px' />
					</Tooltip>
					<Button icon={<HiAcademicCap />} color='#DDDDDD' variant='ghost' isDisabled={true}>GHOST Disabled</Button>
				</Flex>
				<Flex direction='column' align='center' justify='center'>
					<Tooltip text='Left (center) tooltip with no arrow' placement='left' hasArrow={false}>
						<Button label='SOLID Left no arrow' icon={<HiAcademicCap />} color='#000000' variant='solid' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Left (center) tooltip with arrow' placement='left'>
						<Button label='OUTLINE Left with arrow' icon={<HiAcademicCap />} color='#000000' variant='outline' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Left (start) tooltip with arrow' placement='left-start'>
						<Button label='GHOST Left-start with arrow' icon={<HiAcademicCap />} color='#000000' variant='ghost' borderRadius='15px' />
					</Tooltip>
					<Tooltip text='Left (end) tooltip with arrow' placement='left-end'>
						<Button label='SOFT Left-end with arrow' icon={<HiAcademicCap />} color='#000000' variant='soft' borderRadius='15px' />
					</Tooltip>
					<Button icon={<HiAcademicCap />} color='#000000' variant='soft' isDisabled={true}>SOFT Disabled</Button>
				</Flex>
			</Flex>
			<hr />
		</>
	)
}

export default Component;