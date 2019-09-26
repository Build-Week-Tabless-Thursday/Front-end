/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { signout } from '../../state/auth/auth.actions';
import { useDispatch, useStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  // username: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   width: '25%',
  // },
  signout: {
    textDecoration: 'none',
    alignItems: 'center',
    color: 'black',
  },
});

const UserSwitcher = () => {
  const classes = useStyles();

  const [user, setUser] = React.useState();
  const dispatch = useDispatch();
  const store = useStore();

  React.useEffect(() => {
    console.log('user', user);
    setUser(store.getState().user.details);
  }, [store.getState()]);

  console.log('set user', user);

  return (
    <section className={classes.container}>
      <h1 className={classes.username}> User: {user && user.username}</h1>
      <h1>
        <NavLink className={classes.signout}> Sign Out </NavLink>
      </h1>
    </section>
  );
};

export { UserSwitcher };
