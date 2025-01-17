import { useState, useEffect, useRef } from 'react';

const useTabs = ({ defaultTab }) => {
	const [activeTab, setActiveTab] = useState(defaultTab);
	const tabRefs = useRef({});

  return {
		activeTab, setActiveTab
  };
};

export default useTabs;