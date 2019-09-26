/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  category: {
    marginBottom: 5,
  },
}));

const TabCategories = ({ categories, selected, onChange }) => {
  const classes = useStyles();

  const handleClick = e => {
    onChange(e.target.textContent);
  };

  return (
    <div className={classes.root}>
      {categories.map(label => (
        <Button
          className={classes.category}
          key={label}
          onClick={handleClick}
          color={selected === label ? 'primary' : null}
          variant={selected === label ? 'contained' : null}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export { TabCategories };
