import { useState, useEffect } from 'react';

const useRefCurrent = () => {
	const [ref, setRef] = useState();

	return {
		ref,
		setRef,
	};
};

export default useRefCurrent;