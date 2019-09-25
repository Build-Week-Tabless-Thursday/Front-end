import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Avatar,
  AppBar,
} from '@material-ui/core';
import { Menu, Add, Search, Share } from '@material-ui/icons';
import { NavDrawer } from './drawer.component';
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
    //
    clipPath: circleInsetBar,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: 20,
    [theme.breakpoints.up('sm')]: {
      bottom: 36,
    },
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Inbox
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper> */}

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <NavDrawer>
              <Menu />
            </NavDrawer>
          </IconButton>

          <div className={classes.grow} />
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Share />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
        <Add />
      </Fab>
    </React.Fragment>
  );
};

export { NavBar };
