import { useState } from 'react';

const useAccordion = ({ allowMultiple = false, allowToggle = true }) => {
	const [activeItems, setActiveItems] = useState([]);

	const toggleItem = (itemKey) => {
    setActiveItems((prevItems) => {
      const isItemActive = prevItems.includes(itemKey);

      if (allowMultiple) {
        // Allow multiple items to be active
        if (isItemActive && allowToggle) {
          // Allow toggling if specified
          return prevItems.filter((key) => key !== itemKey);
        } else {
          return [...prevItems, itemKey];
        }
      } else {
        // Only allow one item to be active at a time
        if (isItemActive && !allowToggle) {
          // Don't allow toggling if specified
          return prevItems;
        } else {
          return isItemActive ? [] : [itemKey];
        }
      }
    });
  };

	return {
		activeItems,
		toggleItem,
	};
};

export default useAccordion;