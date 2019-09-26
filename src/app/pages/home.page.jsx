import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Fab, Typography, withStyles } from '@material-ui/core';
import { Add, NoteOutlined } from '@material-ui/icons';

import { getTabs, getUser } from '../state/actions';
import { NavBar } from '../components/nav/bar.component';
import { NavDrawer } from '../components/nav/drawer.component';
import { Input } from '../components/reusable/input.component';
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
    bottom: 30,
    right: 0,
    left: 0,
    [theme.breakpoints.up('sm')]: {
      bottom: 36,
    },
    [theme.breakpoints.up('md')]: {
      bottom: 20,
      right: 20,
      left: 'calc(100% - 80px)',
    },
    margin: '0 auto',
  },
  search: {
    marginBottom: 20,
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
    props.getTabs();
    props.getUser();
    this.state = { drawerOpen: false, searchOpen: false, search: '' };
  }

  render() {
    const { classes, history, tabs, category } = this.props;
    const filteredTabs = tabs.filter(tab => {
      const searchMatch = tab.title.toLowerCase().includes(this.state.search.toLowerCase());
      const categoryMatch = tab.category === category || category === 'All';
      return searchMatch && categoryMatch;
    });

    return (
      <React.Fragment>
        <header>
          <NavDrawer
            open={this.state.drawerOpen}
            onChange={() => this.setState({ drawerOpen: false })}
            onClose={() => this.setState({ drawerOpen: false })}
          />

          <NavBar
            onMenu={() => this.setState({ drawerOpen: true })}
            onSearch={() => this.setState({ searchOpen: true })}
          />
        </header>
        <main className={classes.root}>
          <Input
            className={classes.search}
            elevation={8}
            leadingIcon="search"
            placeholder="Search"
            value={this.state.search}
            onChange={search => this.setState({ search })}
          />

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
      </React.Fragment>
    );
  }
}

export { HomePage };
