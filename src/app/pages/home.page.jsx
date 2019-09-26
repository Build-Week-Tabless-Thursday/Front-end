import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Fab, Typography, withStyles } from '@material-ui/core';
import { Add, NoteOutlined } from '@material-ui/icons';

import { getTabs, getUser } from '../state/actions';
import { TabList } from '../components/tab/list.component';

const styles = theme => ({
  root: {
    margin: 10,
    [theme.breakpoints.up('sm')]: {
      marginRight: 40,
      marginLeft: 40,
    },
  },
  empty: {
    position: 'fixed',
    height: '80vh',
    width: '100vw',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: theme.palette.grey[500],
  },
  emptyIcon: {
    fontSize: 300,
    color: theme.palette.grey[400],
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
});

@connect(
  state => ({
    tabs: state.tabs.list,
    category: state.tabs.category,
  }),
  { getTabs, getUser }
)
@withRouter
@withStyles(styles)
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getTabs, getUser } = this.props;
    getTabs();
    getUser();
  }

  render() {
    const { classes, history, tabs, category } = this.props;
    const filteredTabs = category ? tabs.filter(tab => tab.category === category || category === 'All') : tabs;

    return (
      <main className={classes.root}>
        <Typography variant="h5" gutterBottom>
          {category || 'All'}
        </Typography>
        {filteredTabs.length === 0 && (
          <div className={classes.empty}>
            <NoteOutlined className={classes.emptyIcon} />
            <Typography variant="h4">No Tabs Found</Typography>
          </div>
        )}
        {filteredTabs.length !== 0 && <TabList tabs={filteredTabs} />}

        <Fab color="secondary" className={classes.fabButton} onClick={() => history.push('/create')}>
          <Add />
        </Fab>
      </main>
    );
  }
}

export { HomePage };
