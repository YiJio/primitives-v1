import { useState, useMemo } from 'react';

import { Utils } from '../utils/Utils';

const usePagination = ({ dataCount, pageSize, siblingCount = 1, currentPage }) => {
	const paginationRange = useMemo(() => {
		const pageCount = Math.ceil(dataCount / pageSize);
		const pageNumbers = siblingCount + 5;

		const firstPage = 1;
		const lastPage = pageCount;

		// number of pages less than page numbers to show, return [1...pageCount]
		if(pageNumbers >= pageCount) {
			return Utils.range(firstPage, lastPage);
		}

		const leftSibling = Math.max(currentPage - siblingCount, firstPage);
		const rightSibling = Math.min(currentPage + siblingCount, lastPage);

		const leftDots = leftSibling > 2;
		const rightDots = rightSibling < lastPage - 2;

		if(!leftDots && rightDots) {
			let leftItems = 3 + 2 * siblingCount;
			let leftRange = Utils.range(firstPage, leftItems);
			return [...leftRange, '...', lastPage];
		}

		if(leftDots && !rightDots) {
			let rightItems = 3 + 2 * siblingCount;
			let rightRange = Utils.range(pageCount - rightItems + 1, lastPage);
			return [firstPage, '...', ...rightRange];
		}

		if(leftDots && rightDots) {
			let middleRange = Utils.range(leftSibling, rightSibling);
			return [firstPage, '...', ...middleRange, '...', lastPage];
		}

	}, [dataCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};

export default usePagination;