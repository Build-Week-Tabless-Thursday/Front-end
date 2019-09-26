/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Button } from '@material-ui/core';

const TabCategories = ({ categories, onChange }) => {
  const handleClick = e => {
    onChange(e.target.textContent);
  };

  return categories.map(label => (
    <Button key={label} onClick={handleClick}>
      {label}
    </Button>
  ));
};

export { TabCategories };
