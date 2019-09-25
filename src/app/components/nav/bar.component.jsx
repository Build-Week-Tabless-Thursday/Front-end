import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar, IconButton, AppBar } from '@material-ui/core';
import { Menu, Search, Share } from '@material-ui/icons';
import { circleInsetBar } from '../../theme/var.theme';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
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
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = ({ onMenu, onShare, onSearch }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onMenu}>
            <Menu />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={onShare}>
            <Search />
          </IconButton>
          <IconButton edge="end" color="inherit" onClick={onSearch}>
            <Share />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { NavBar };
