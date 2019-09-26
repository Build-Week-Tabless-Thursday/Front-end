import React from 'react';

import { CssBaseline, Toolbar, IconButton, AppBar, makeStyles } from '@material-ui/core';
import { Menu, Search, Share } from '@material-ui/icons';

import { circleInsetBar } from '../../theme/var.theme';
import { useRouter } from '../../hooks/router.hook';
import { TabSearch } from '../tab/search.component';

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

  if (excludeRoutes && excludeRoutes.find(route => router.location.pathname.includes(route))) return <div></div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onMenu}>
            <Menu />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={onSearch}>
            <Search />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            // onClick={onShare}
            onClick={TabSearch}
          >
            <Share />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { NavBar };
