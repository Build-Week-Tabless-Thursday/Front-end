/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';

import { Button, Typography, makeStyles } from '@material-ui/core';

import { signout } from '../../state/auth/auth.actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginTop: 0,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
  user: {
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  link: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    textDecoration: 'none',
  },
  signout: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const UserSwitcher = ({ onSignOut }) => {
  const classes = useStyles();

  const [user, setUser] = React.useState();
  const dispatch = useDispatch();
  const store = useStore();

  React.useEffect(() => {
    setUser(store.getState().user.details);
  }, [store.getState()]);

  const handleSignOut = () => {
    onSignOut();
    signout()(dispatch);
  };

  return (
    <section className={classes.root}>
      <div className={classes.user}>
        <Typography component="h4" variant="h5">
          {user && user.username}
        </Typography>
        <Typography component="span" variant="subtitle2" gutterBottom>
          {user && user.email}
        </Typography>
      </div>

      <NavLink className={classes.link} to="/login">
        <Button className={classes.signout} onClick={handleSignOut}>
          Sign Out
        </Button>
      </NavLink>
    </section>
  );
};

export { UserSwitcher };
