import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTabsAction } from '../../state/tabs/tabs.actions';
import { UserSwitcher } from '../user/switcher.component';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: 'white',
  },
});

let NavDrawer = props => {
  console.log('props', props);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    categories: [],
  });

  //GET TAB CATEGORIES
  useEffect(() => {
    props.getTabsAction();
    setState(props.categories);
    console.log('setState state.categories', state.categories);
  }, []);

  console.log('state', state.categories);

  //GET SWITCHER COMPONENT

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <UserSwitcher />
      </List>

      {/* ABOVE HERE WILL BE SWITCH COMPONENT */}

      <Divider />

      {/* BELOW HERE WILL BE CATEGORIES */}

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button> */}
      <Button onClick={toggleDrawer('bottom', true)}>
        {' '}
        <Menu className={classes.icon} />{' '}
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.tabs.categories,
  };
};

NavDrawer = connect(
  mapStateToProps,
  { getTabsAction }
)(NavDrawer);

export { NavDrawer };
