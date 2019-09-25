import React from 'react';
import { connect } from 'react-redux';

import { Typography, withStyles } from '@material-ui/core';
import { NoteOutlined } from '@material-ui/icons';

import { getTabsAction } from '../state/actions';
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
});

@connect(
  state => ({
    tabs: state.tabs.list,
    category: state.tabs.category,
  }),
  { getTabsAction }
)
@withStyles(styles)
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getTabsAction } = this.props;
    getTabsAction();
  }

  render() {
    const category = '';
    const { tabs, classes } = this.props;
    const filteredTabs = category ? tabs.filter(tab => tab.category === category) : tabs;

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
      </main>
    );
  }
}

export { HomePage };
