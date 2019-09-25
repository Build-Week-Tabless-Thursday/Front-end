import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTabs } from '../../state/tabs/tabs.actions';
import { UserSwitcher } from '../user/switcher.component';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemText } from '@material-ui/core';

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

  //GET SWITCHER COMPONENT

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <UserSwitcher />
      </List>
      <Divider />
      <List>
        {props.categories.map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor={props.anchor} open={props.open} onClose={props.onClose}>
      {fullList('bottom')}
    </Drawer>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.tabs.categories,
  };
};

NavDrawer = connect(mapStateToProps)(NavDrawer);

export { NavDrawer };
