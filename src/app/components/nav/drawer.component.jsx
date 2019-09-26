import React from 'react';
import { connect } from 'react-redux';

import { Drawer, Divider, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

import { useRouter } from '../../hooks/router.hook';
import { setCategory } from '../../state/actions';
import { TabCategories } from '../tab/categories.component';
import { UserSwitcher } from '../user/switcher.component';

const useStyles = makeStyles({
  drawer: {
    padding: 10,
    minWidth: '260px',
  },
  divider: {},
});

let NavDrawer = ({ excludeRoutes, open, categories, category, onClose, onChange, setCategory }) => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const router = useRouter();

  if (excludeRoutes && excludeRoutes.find(route => router.location.pathname.includes(route))) return <div></div>;

  const handleChange = value => {
    setCategory(value);
    onChange(value);
  };

  console.log(category);

  return (
    <Drawer anchor={md ? 'left' : 'bottom'} open={open} onClose={onClose}>
      <aside className={classes.drawer}>
        <UserSwitcher onSignOut={onChange} />
        <Divider className={classes.divider} />
        <TabCategories categories={categories} selected={category} onChange={handleChange} />
      </aside>
    </Drawer>
  );
};

NavDrawer = connect(
  state => ({
    categories: state.tabs.categories,
    category: state.tabs.category,
  }),
  { setCategory }
)(NavDrawer);

export { NavDrawer };
