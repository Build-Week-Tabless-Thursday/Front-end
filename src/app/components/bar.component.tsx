import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Icon, Button } from '@material-ui/core';

import { UserView } from '@components/user/user.component';

const useStyles = makeStyles({
  nav: {
    textDecoration: 'none',
    color: 'unset',
  },
});

export const AppBar = () => {
  const classes = useStyles({});

  return (
    <nav>
      <UserView />
      <NavLink className={classes.nav} to="/">
        <Button>
          <Icon>home</Icon>
          Home
        </Button>
      </NavLink>
    </nav>
  );
};
