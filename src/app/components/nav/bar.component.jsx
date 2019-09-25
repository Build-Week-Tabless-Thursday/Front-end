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
} from '@material-ui/core';
import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons';
// import MenuIcon from "@material-ui/icons/Menu";
// import AddIcon from "@material-ui/icons/Add";
// import SearchIcon from "@material-ui/icons/Search";
// import MoreIcon from "@material-ui/icons/MoreVert";

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
    clipPath: `polygon(0 0, 
      calc(50% - 38px) 0, 
      calc(50% - 37.487665px) 0.628287px, 
      calc(50% - 36.975331px) 1.256382px, 
      calc(50% - 36.462997px) 1.884094px, 
      calc(50% - 35.912306px) 2.511233px, 
      calc(50% - 35.863009px) 3.137607px, 
      calc(50% - 35.802788px) 3.763025px, 
      calc(50% - 35.731661px) 4.387296px, 
      calc(50% - 35.64965px) 5.010232px, 
      calc(50% - 35.55678px) 5.631641px, 
      calc(50% - 35.453079px) 6.251334px, 
      calc(50% - 35.338579px) 6.869124px, 
      calc(50% - 35.213314px) 7.484821px, 
      calc(50% - 35.077322px) 8.098238px, 
      calc(50% - 34.930646px) 8.709188px, 
      calc(50% - 34.77333px) 9.317486px, 
      calc(50% - 34.605421px) 9.922945px, 
      calc(50% - 34.426971px) 10.525381px, 
      calc(50% - 34.238035px) 11.124612px, 
      calc(50% - 34.038669px) 11.720454px, 
      calc(50% - 33.828934px) 12.312725px, 
      calc(50% - 33.608895px) 12.901246px, 
      calc(50% - 33.378619px) 13.485837px, 
      calc(50% - 33.138175px) 14.066321px, 
      calc(50% - 32.887636px) 14.642519px, 
      calc(50% - 32.62708px) 15.214257px, 
      calc(50% - 32.356586px) 15.781361px, 
      calc(50% - 32.076235px) 16.343658px, 
      calc(50% - 31.786113px) 16.900976px, 
      calc(50% - 31.486309px) 17.453146px, 
      calc(50% - 31.176915px) 18px, 
      calc(50% - 30.858023px) 18.541371px, 
      calc(50% - 30.529731px) 19.077094px, 
      calc(50% - 30.19214px) 19.607005px, 
      calc(50% - 29.845353px) 20.130945px, 
      calc(50% - 29.489474px) 20.648752px, 
      calc(50% - 29.124612px) 21.160269px, 
      calc(50% - 28.750878px) 21.665341px, 
      calc(50% - 28.368387px) 22.163813px, 
      calc(50% - 27.977255px) 22.655534px, 
      calc(50% - 27.5776px) 23.140354px, 
      calc(50% - 27.169545px) 23.618125px, 
      calc(50% - 26.753214px) 24.088702px, 
      calc(50% - 26.328733px) 24.551941px, 
      calc(50% - 25.896233px) 25.007701px, 
      calc(50% - 25.455844px) 25.455844px, 
      calc(50% - 25.007701px) 25.896233px, 
      calc(50% - 24.551941px) 26.328733px, 
      calc(50% - 24.088702px) 26.753214px, 
      calc(50% - 23.618125px) 27.169545px, 
      calc(50% - 23.140354px) 27.5776px, 
      calc(50% - 22.655534px) 27.977255px, 
      calc(50% - 22.163813px) 28.368387px, 
      calc(50% - 21.665341px) 28.750878px, 
      calc(50% - 21.160269px) 29.124612px, 
      calc(50% - 20.648752px) 29.489474px, 
      calc(50% - 20.130945px) 29.845353px, 
      calc(50% - 19.607005px) 30.19214px, 
      calc(50% - 19.077094px) 30.529731px, 
      calc(50% - 18.541371px) 30.858023px, 
      calc(50% - 18px) 31.176915px, 
      calc(50% - 17.453146px) 31.486309px, 
      calc(50% - 16.900976px) 31.786113px, 
      calc(50% - 16.343658px) 32.076235px, 
      calc(50% - 15.781361px) 32.356586px, 
      calc(50% - 15.214257px) 32.62708px, 
      calc(50% - 14.642519px) 32.887636px, 
      calc(50% - 14.066321px) 33.138175px, 
      calc(50% - 13.485837px) 33.378619px, 
      calc(50% - 12.901246px) 33.608895px, 
      calc(50% - 12.312725px) 33.828934px, 
      calc(50% - 11.720454px) 34.038669px, 
      calc(50% - 11.124612px) 34.238035px, 
      calc(50% - 10.525381px) 34.426971px, 
      calc(50% - 9.922945px) 34.605421px, 
      calc(50% - 9.317486px) 34.77333px, 
      calc(50% - 8.709188px) 34.930646px, 
      calc(50% - 8.098238px) 35.077322px, 
      calc(50% - 7.484821px) 35.213314px, 
      calc(50% - 6.869124px) 35.338579px, 
      calc(50% - 6.251334px) 35.453079px, 
      calc(50% - 5.631641px) 35.55678px, 
      calc(50% - 5.010232px) 35.64965px, 
      calc(50% - 4.387296px) 35.731661px, 
      calc(50% - 3.763025px) 35.802788px, 
      calc(50% - 3.137607px) 35.863009px, 
      calc(50% - 2.511233px) 35.912306px, 
      calc(50% - 1.884094px) 35.950663px, 
      calc(50% - 1.256382px) 35.97807px, 
      calc(50% - 0.628287px) 35.994517px, 
      50% 36px, 
      calc(50% + 0.628287px) 35.994517px, 
      calc(50% + 1.256382px) 35.97807px, 
      calc(50% + 1.884094px) 35.950663px, 
      calc(50% + 2.511233px) 35.912306px, 
      calc(50% + 3.137607px) 35.863009px, 
      calc(50% + 3.763025px) 35.802788px, 
      calc(50% + 4.387296px) 35.731661px, 
      calc(50% + 5.010232px) 35.64965px, 
      calc(50% + 5.631641px) 35.55678px, 
      calc(50% + 6.251334px) 35.453079px, 
      calc(50% + 6.869124px) 35.338579px, 
      calc(50% + 7.484821px) 35.213314px, 
      calc(50% + 8.098238px) 35.077322px, 
      calc(50% + 8.709188px) 34.930646px, 
      calc(50% + 9.317486px) 34.77333px, 
      calc(50% + 9.922945px) 34.605421px, 
      calc(50% + 10.525381px) 34.426971px, 
      calc(50% + 11.124612px) 34.238035px, 
      calc(50% + 11.720454px) 34.038669px, 
      calc(50% + 12.312725px) 33.828934px, 
      calc(50% + 12.901246px) 33.608895px, 
      calc(50% + 13.485837px) 33.378619px, 
      calc(50% + 14.066321px) 33.138175px, 
      calc(50% + 14.642519px) 32.887636px, 
      calc(50% + 15.214257px) 32.62708px, 
      calc(50% + 15.781361px) 32.356586px, 
      calc(50% + 16.343658px) 32.076235px, 
      calc(50% + 16.900976px) 31.786113px, 
      calc(50% + 17.453146px) 31.486309px, 
      calc(50% + 18px) 31.176915px, 
      calc(50% + 18.541371px) 30.858023px, 
      calc(50% + 19.077094px) 30.529731px, 
      calc(50% + 19.607005px) 30.19214px, 
      calc(50% + 20.130945px) 29.845353px, 
      calc(50% + 20.648752px) 29.489474px, 
      calc(50% + 21.160269px) 29.124612px, 
      calc(50% + 21.665341px) 28.750878px, 
      calc(50% + 22.163813px) 28.368387px, 
      calc(50% + 22.655534px) 27.977255px, 
      calc(50% + 23.140354px) 27.5776px, 
      calc(50% + 23.618125px) 27.169545px, 
      calc(50% + 24.088702px) 26.753214px, 
      calc(50% + 24.551941px) 26.328733px, 
      calc(50% + 25.007701px) 25.896233px, 
      calc(50% + 25.455844px) 25.455844px, 
      calc(50% + 25.896233px) 25.007701px, 
      calc(50% + 26.328733px) 24.551941px, 
      calc(50% + 26.753214px) 24.088702px, 
      calc(50% + 27.169545px) 23.618125px, 
      calc(50% + 27.5776px) 23.140354px, 
      calc(50% + 27.977255px) 22.655534px, 
      calc(50% + 28.368387px) 22.163813px, 
      calc(50% + 28.750878px) 21.665341px, 
      calc(50% + 29.124612px) 21.160269px, 
      calc(50% + 29.489474px) 20.648752px, 
      calc(50% + 29.845353px) 20.130945px, 
      calc(50% + 30.19214px) 19.607005px, 
      calc(50% + 30.529731px) 19.077094px, 
      calc(50% + 30.858023px) 18.541371px, 
      calc(50% + 31.176915px) 18px, 
      calc(50% + 31.486309px) 17.453146px, 
      calc(50% + 31.786113px) 16.900976px, 
      calc(50% + 32.076235px) 16.343658px, 
      calc(50% + 32.356586px) 15.781361px, 
      calc(50% + 32.62708px) 15.214257px, 
      calc(50% + 32.887636px) 14.642519px, 
      calc(50% + 33.138175px) 14.066321px, 
      calc(50% + 33.378619px) 13.485837px, 
      calc(50% + 33.608895px) 12.901246px, 
      calc(50% + 33.828934px) 12.312725px, 
      calc(50% + 34.038669px) 11.720454px, 
      calc(50% + 34.238035px) 11.124612px, 
      calc(50% + 34.426971px) 10.525381px, 
      calc(50% + 34.605421px) 9.922945px, 
      calc(50% + 34.77333px) 9.317486px, 
      calc(50% + 34.930646px) 8.709188px, 
      calc(50% + 35.077322px) 8.098238px, 
      calc(50% + 35.213314px) 7.484821px, 
      calc(50% + 35.338579px) 6.869124px, 
      calc(50% + 35.453079px) 6.251334px, 
      calc(50% + 35.55678px) 5.631641px, 
      calc(50% + 35.64965px) 5.010232px, 
      calc(50% + 35.731661px) 4.387296px, 
      calc(50% + 35.802788px) 3.763025px, 
      calc(50% + 35.863009px) 3.137607px, 
      calc(50% + 35.912306px) 2.511233px, 
      calc(50% + 36.462997px) 1.884094px, 
      calc(50% + 36.975331px) 1.256382px, 
      calc(50% + 37.487665px) 0.628287px, 
      calc(50% + 38px) 0, 
      100% 0, 
      100% 100%, 
      0 100%);`,
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

const AppBar = () => {
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
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export { AppBar };
