import React from 'react';

import { CssBaseline, Toolbar, IconButton, AppBar, makeStyles, Icon } from '@material-ui/core';

import { circleInsetBar } from '../../theme/var.theme';
import { useRouter } from '../../hooks/router.hook';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  search: {},
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.primary.background,
    clipPath: circleInsetBar,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      clipPath: 'unset',
    },
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = ({ excludeRoutes, onMenu, onShare, onSearch }) => {
  const classes = useStyles();
  const router = useRouter();

  if (excludeRoutes && excludeRoutes.find(route => router.location.pathname.includes(route)))
    return <div></div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onMenu} aria-label="menu">
            <Icon>menu</Icon>
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={onSearch} aria-label="search">
            <Icon>search</Icon>
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="search">
            <Icon>share</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { NavBar };
