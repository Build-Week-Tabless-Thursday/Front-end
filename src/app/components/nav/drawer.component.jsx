import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider } from '@material-ui/core';

import { setCategory } from '../../state/actions';
import { TabCategories } from '../tab/categories.component';
import { UserSwitcher } from '../user/switcher.component';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: 'white',
  },
});

let NavDrawer = ({ anchor, open, categories, onClose, setCategory }) => {
  const classes = useStyles();

  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <UserSwitcher />
      <Divider />
      <TabCategories categories={categories} onChange={setCategory} />
    </Drawer>
  );
};

NavDrawer = connect(
  state => ({
    categories: state.tabs.categories,
  }),
  { setCategory }
)(NavDrawer);

export { NavDrawer };
