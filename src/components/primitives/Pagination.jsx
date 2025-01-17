import React, { Children } from 'react';

import { Utils } from '../../utils/Utils';

import usePagination from '../../hooks/usePagination';

import { Icon } from '../typography';

import './primitives.css';

import { RiArrowRightDoubleLine, RiArrowRightSLine, RiArrowLeftSLine, RiArrowLeftDoubleLine } from 'react-icons/ri';

// need to finish Select and Input and then update it here

const PaginationDots = (props) => {
	const { dataCount, currentPage = 1, pageSize, onPageChange } = props;
	const pageCount = Math.ceil(dataCount / pageSize);
	const paginationRange = Utils.range(1, pageCount);

	
}

const PaginationGoTo = (props) => {
	const { variant = 'stepper', dataCount, currentPage = 1, pageSize, onPageChange } = props;
	const pageCount = Math.ceil(dataCount / pageSize);
	const paginationRange = Utils.range(1, pageCount);

	return (
		<div className='pagination-go-to'>
			{variant === 'dropdown' && <div className='pagination-go-to__dropdown'>
				Page
				<select name='page' defaultValue={currentPage} onChange={(e) => onPageChange(e.target.value)}>
					{paginationRange.map((page, index) => {
						return (
							<option key={index} value={page}>{page}</option>
						)
					})}
				</select>
				of {pageCount}
			</div>}
			{variant === 'stepper' && <div className='pagination-go-to__stepper'>
				<label htmlFor='page'>Go to page</label>
				<input type='number' name='page' min={1} max={pageCount} value={currentPage} onChange={(e) => onPageChange(e.target.value)} />
			</div>}
		</div>
	)
}

const Pagination = (props) => {
	const { hasExtremity = true, hasNumbers = true, dataCount, siblingCount = 1, pageSize, currentPage = 1, onPageChange } = props;
	const paginationRange = usePagination({ dataCount, pageSize, siblingCount, currentPage });
	let lastPage = paginationRange[paginationRange.length - 1];

	if (currentPage === 0 || paginationRange.length < 2) { return null; }

	const onFirstPage = () => {
		onPageChange(1);
	}

	const onNextPage = () => {
		onPageChange(currentPage + 1);
	}

	const onPreviousPage = () => {
		onPageChange(currentPage - 1);
	}

	const onLastPage = () => {
		onPageChange(lastPage);
	}

	return (
		<div className='pagination'>
			{hasExtremity && <button className='pagination__arrow' disabled={currentPage === 1} onClick={onFirstPage}>
				<Icon icon={<RiArrowLeftDoubleLine />} size='16px' />
			</button>}
			<button className='pagination__arrow' disabled={currentPage === 1} onClick={onPreviousPage}>
				<Icon icon={<RiArrowLeftSLine />} size='16px' />
			</button>
			{hasNumbers && paginationRange.map((page, index) => {
				if (page === '...') { return <div key={index} className='pagination__item'>&#8230;</div>; }
				return (
					<button key={index} className={'pagination__item' + (currentPage === page ? ' active' : '')} onClick={() => onPageChange(page)}>{page}</button>
				)
			})}
			<button className='pagination__arrow' disabled={currentPage === lastPage} onClick={onNextPage}>
				<Icon icon={<RiArrowRightSLine />} size='16px' />
			</button>
			{hasExtremity && <button className='pagination__arrow' disabled={currentPage === lastPage} onClick={onLastPage}>
				<Icon icon={<RiArrowRightDoubleLine />} size='16px' />
			</button>}
		</div>
	)
}

export {
	Pagination,
	PaginationGoTo,
	PaginationDots,
}