import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Icon, Button } from '@material-ui/core';

import { UserSwitcher } from '../user/switcher.component';

const useStyles = makeStyles({
  nav: {
    textDecoration: 'none',
    color: 'unset',
  },
});

const NavDrawer = () => {
  const classes = useStyles({});

  return (
    <nav>
      <UserSwitcher />
      <NavLink className={classes.nav} to="/">
        <Button>
          <Icon>home</Icon>
          Home
        </Button>
      </NavLink>
    </nav>
  );
};

export { NavDrawer };
