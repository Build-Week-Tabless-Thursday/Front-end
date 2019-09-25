import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTabsAction } from '../../state/tabs/tabs.actions';

import { UserSwitcher } from '../user/switcher.component';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
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

  useEffect(() => {
    props.getTabsAction();
    setState(props.categories);
  }, []);

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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      {/* <Button onClick={toggleDrawer('right', true)}>Open Right</Button> */}
      {/* <Button onClick={toggleDrawer('top', true)}>Open Top</Button> */}
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};

NavDrawer = connect(
  mapStateToProps,
  { getTabsAction }
)(NavDrawer);

export { NavDrawer };
