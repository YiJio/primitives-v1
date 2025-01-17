/** @jsxRuntime classic */
/** @jsx jsx */
//dependencies
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import { jsx, css, useTheme, ThemeProvider } from '@emotion/react';

import { Box, Flex as LFlex, Grid } from '../../../components/layout';
import { Code, TextBlock } from '../../../components/typography';
import { Accordion, AccordionItem, AccordionHeader, AccordionContent, AvatarParty, AvatarBadge, AvatarGroup, Avatar, Button, Flex, Alert, Tag, ContextMenu, ContextMenuList, ContextMenuTrigger, Pagination, PaginationGoTo, Popover, PopoverTrigger, PopoverContent, Tooltip, DropdownMenu, DropdownMenuTrigger, DropdownMenuList, DropdownMenuGroup, DropdownMenuItem, MegaMenu, MegaMenuItem, MegaMenuTrigger, MegaMenuContent, Tabs, TabList, TabIndicator, Tab, TabContents, TabContent, Badge, Breadcrumb, BreadcrumbItem, IconButton, Chip, Checkbox, Slider, CheckboxGroup, Counter } from '../../../components/primitives';

import DocTable from '../components/DocTable';

import { docData } from '../docData';
import data from '../mockData.json';
import theme from '../../../theme';

import { RiSeedlingFill, RiArrowRightSLine, RiAncientGateFill, RiAncientGateLine } from 'react-icons/ri';
import Card from '../../../components/primitives/Card';
import { HiArrowUpCircle, HiAcademicCap, HiCheck, HiChevronDown } from 'react-icons/hi2';

let pageSize = 15;

const DocAccordion = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPage = (currentPage - 1) * pageSize;
		const lastPage = firstPage + pageSize;
		return data.slice(firstPage, lastPage);
	}, [currentPage]);

	const [checkValue, setCheckValue] = useState([]);

	const handleCheck = (e) => {
		if (e.target.checked) {
			setCheckValue([...checkValue, e.target.value]);
		} else {
			setCheckValue(checkValue.filter((i) => i !== e.target.value));
		}
	}

	const handleCheckGroup = (checks) => {
		console.log(checks)
		setCheckValue(checks);
	}

	return (
		<>
			<h1>Accordion</h1>
			<p></p>
			<hr />
			<section>
				<h2>Basics</h2>
				<ThemeProvider theme={theme}>
				<input type='range' min={1} max={100} value={50}/>
					<Slider hasStepper></Slider>
					<Counter hasStepper></Counter>
					<label htmlFor='who'>Who</label>
					<CheckboxGroup round='4px' checkType='check-mark' colorScheme='red' onChange={handleCheckGroup}>
						<Checkbox name='who' label='Me' value='me' />
						<Checkbox name='who' label='Them' value='them' />
					</CheckboxGroup>
					{/*checkValue.join(',')*/}
					<Chip type='action' label='Action' icon={<HiAcademicCap />}></Chip>
					<Chip type='filter' label='Filter' defaultChecked></Chip>
					<Chip type='filter' label='Filter' hasAdd></Chip>
					<Chip type='choice' label='Choice' defaultChecked></Chip>
					<Chip type='choice' label='Choice'></Chip>
					<Breadcrumb>
						<BreadcrumbItem label='Docs' link='/docs' title='Docs' />
						<BreadcrumbItem label='Component' link='/docs/component' title='Component' />
						<BreadcrumbItem label='Accordion' />
					</Breadcrumb>
					<Badge size='S' hasBorder />
					<Badge variant='number' value='12390' hasBorder />
					<Badge variant='action' icon={<HiAcademicCap />} hasBorder />
					<LFlex>
						<IconButton icon={<HiAcademicCap />} label='Graduation' hasLabel={false} />
						<IconButton type='toggle' iconOn={<RiAncientGateFill />} iconOff={<RiAncientGateLine />} label='Gate' hasLabel={false} />
						<Button variant='solid' colorScheme='green' round='15px' leftIcon={<HiAcademicCap />} rightIcon={<HiAcademicCap />}>Hello</Button>
						<Button variant='elevated' colorScheme='green' round='15px' leftIcon={<HiAcademicCap />} rightIcon={<HiAcademicCap />}>Hello</Button>
						<Button variant='soft' colorScheme='green' round='15px'>Hello</Button>
						<Button variant='outline' colorScheme='green' round='15px'>Hello</Button>
						<Button variant='ghost' colorScheme='green' round='15px'>Hello</Button>
					</LFlex>
					<Tooltip text={'asdjka hsauidh ias dashd uias dauisdh uias duias duas d ad as'} placement='top-start' width='250px' cursor='pointer'>hello</Tooltip>
					<hr />
					<Tabs variant='text'>
						<TabList>
							<Tab link='first'>Tab 1</Tab>
							<Tab link='second'>Tab 2</Tab>
							<Tab link='third' hasBadge>Tab 3</Tab>
						</TabList>
						<TabContents>
							<TabContent>Hello this is tab 1</TabContent>
							<TabContent>tab 2</TabContent>
							<TabContent>Hello this is tab 3</TabContent>
						</TabContents>
					</Tabs>
					<hr />
					<DropdownMenu>
						<DropdownMenuTrigger>Hello</DropdownMenuTrigger>
						<DropdownMenuList>
							<DropdownMenuGroup name='commands'>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧W' onClick={() => alert('write')}>Write</DropdownMenuItem>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧E' onClick={() => alert('edit')}>Edit</DropdownMenuItem>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧S' onClick={() => alert('save')}>Save</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuGroup name='options'>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧W' onClick={() => alert('1')}>Value 1</DropdownMenuItem>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧E' onClick={() => alert('2')}>Value 2</DropdownMenuItem>
								<DropdownMenuItem icon={<HiChevronDown />} command='⌘⇧S' onClick={() => alert('3')}>Value 3</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuList>
					</DropdownMenu>
					<hr />
					<Popover>
						<PopoverTrigger><span style={{ background: 'salmon', padding: '4px' }}>Hello</span></PopoverTrigger>
						<PopoverContent width='250px'>
							Cool things<br />ashdja
						</PopoverContent>
					</Popover>
					<Popover triggerType='hover'>
						<PopoverTrigger><span style={{ background: 'lightgreen', padding: '4px' }}>Hello</span></PopoverTrigger>
						<PopoverContent width='250px' bColor='none'>
							Cool things<br />ashdja
						</PopoverContent>
					</Popover>
					<hr />
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>FIRST NAME</th>
								<th>LAST NAME</th>
								<th>EMAIL</th>
								<th>PHONE</th>
							</tr>
						</thead>
						<tbody>
							{currentTableData.map(item => {
								return (
									<tr>
										<td>{item.id}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<LFlex width='100%' justify='space-between'>
						<Pagination hasExtremity={true} hasNumbers={true} currentPage={currentPage} dataCount={data.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)} />
						<PaginationGoTo variant='dropdown' currentPage={currentPage} dataCount={data.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)} />
					</LFlex>
					<ContextMenu>
						<ContextMenuTrigger>Context Menu Trigger (right-click)</ContextMenuTrigger>
						<ContextMenuList>The menu</ContextMenuList>
					</ContextMenu>
					<Card p={2} m={2} color='yellow' title='Hello' position='relative' w='50%'>Hello</Card>
					<Tag bgColor='green' size='s' icon={<HiArrowUpCircle />}>In-progress</Tag>
					<Tag bgColor='green' size='m' icon={<HiCheck />}>In-progress</Tag>
					<Tag bgColor='green' size='l' icon={<HiCheck />}>In-progress</Tag>
					<Tag bgColor='green' isStatus>In-progress</Tag>
					<Alert title='hello' variant='solid' icon={<HiAcademicCap />} iconColor='purple' colorScheme='cyan' textColor='purple'>Hello</Alert>
					<Alert title='hello' variant='soft' icon={<HiAcademicCap />} colorScheme='cyan'>Hello</Alert>
					<Alert title='hello' variant='outline' icon={<HiAcademicCap />} colorScheme='cyan'>Hello</Alert>
					<Alert title='hello' variant='left-accent' icon={<HiAcademicCap />} colorScheme='cyan'>Hello</Alert>
				</ThemeProvider>
				<LFlex bgColor='black' >
					<AvatarParty>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle'>
							<AvatarBadge />
						</Avatar>
					</AvatarParty>
					<AvatarParty>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' borderColor='#FF0000' />
					</AvatarParty>
					<AvatarParty>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' borderColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' />
					</AvatarParty>
					<AvatarParty>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' borderColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' />
						<Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
						<AvatarBadge />
					</AvatarParty>
				</LFlex>
				<Flex bgColor='black'>
					<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' size='xxxl' bWidth='0' bColor='#FF0000'><AvatarBadge size='xxl' /></Avatar>
					<AvatarGroup round='full' maxUsers={4} gap='-15px' size='45px' bWidth='3px'>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' round='none' bWidth='10px'><AvatarBadge /></Avatar>
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' bColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' borderColor='#FF5722' />
						<Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
						<Avatar name='Kent Dodds' imgSrc='https://bit.ly/kent-c-dodds' />
						<Avatar name='Prosper Otemuyiwa' imgSrc='https://bit.ly/prosper-baba' />
						<Avatar name='Christian Nwamba' imgSrc='https://bit.ly/code-beast' />
					</AvatarGroup>
				</Flex>
				<hr />
				allowMultiple=false, allowToggle=true
				<Accordion allowMultiple={false} allowToggle={true} hasChevron={true} hasNumber={true}>
					<AccordionItem>
						<AccordionHeader icon={<RiSeedlingFill />} title='Title1' />
						<AccordionContent>
							What search is for: discovering new people, stories, characters<br />Can’t search for self, friends? (if, do not display add icon?), blocked<br />Can’t search for own + collaborated stories (favorite stories searchable)<br />Can’t search for own characters (how about characters from collaborated?) (favorite characters searchable)
						</AccordionContent>
					</AccordionItem>
					<AccordionItem>
						<AccordionHeader title='Title2' />
						<AccordionContent>
							Should there actually be filters?<br />should just show all results based
							on query on all categories:<br />users, stories, characters, chapters,
							content pages<br />ACTUALLY PROBABLY NOT GOING<br />TO BE ABLE TO SEARCH CHAPTERS
							OR CONTENT PAGES - NO ONE<br />WOULD WANT TO READ SOMETHING<br />THEY DONT EVEN KNOW OUT OF THE BLUE
						</AccordionContent>
					</AccordionItem>
					<AccordionItem>
						<AccordionHeader title='Title3' />
						<AccordionContent>
							ONLY SEARCH FOR ONES WITH VISIBILITY SETTINGS ON<br />first check current user to see if it qualifies query, then loop through each user/story/character for visibility settings, if it is set to private or user is not on visibility list, then dont display it<br />OR really try an advanced query (probably not doable in firebase)
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<hr />
			</section>
		</>
	)
}

export default DocAccordion;