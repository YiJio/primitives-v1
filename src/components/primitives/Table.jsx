// use react-table but needs regular table elements

const TableCell = (props) => {
	const { colSpan, rowSpan, children } = props;
	return (
		<td colSpan={colSpan} rowSpan={rowSpan}>{children}</td>
	)
}

const TableHead = (props) => {
	const { children } = props;
	return (
		<th>{children}</th>
	)
}

const TableRow = (props) => {
	const { children } = props;
	// can only accept TableHead or TableCell
	return (
		<tr>{children}</tr>
	)
}

const TableFooter = (props) => {
	const { children } = props;
	// can only accept TableRow
	return (
		<tfoot>{children}</tfoot>
	)
}

const TableBody = (props) => {
	const { children } = props;
	// can only accept TableRow
	return (
		<tbody>{children}</tbody>
	)
}

const TableHeader = (props) => {
	const { children } = props;
	// can only accept TableRow
	return (
		<thead>{children}</thead>
	)
}

const Table = (props) => {
	const { caption, children } = props;
	// use useTable hook here which deals with react-table
	// can only accept TableHeader, TableBody, TableFooter

	return (
		<table className='table'>
			{caption && <caption>{caption}</caption>}
			{children}
		</table>
	)
}

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableRow,
	TableHead,
	TableCell
}