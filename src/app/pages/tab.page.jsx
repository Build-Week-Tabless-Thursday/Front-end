import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { AppBar, CardMedia, Icon, IconButton, Toolbar } from '@material-ui/core';

import { getTabsAction } from '../state/actions';
import { Input } from '../components/reusable/input.component';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundAttach: 'fixed',
    minHeight: '100vh',
  },
  img: {
    height: '20vh',
    [theme.breakpoints.up('sm')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '48vh',
    },
  },
  inputs: {
    padding: 10,
    marginBottom: 56,
  },
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
});

@connect(
  state => ({
    tabs: state.tabs.list,
  }),
  { getTabsAction }
)
@withRouter
@withStyles(styles)
class TabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    const { tabs, getTabsAction } = props;
    if (tabs.length === 0) getTabsAction();

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    if (Object.keys(state).length) return state;
    const { tabs, match } = props;
    const { id } = match.params;

    const tab = tabs.find(tab => tab.id === id);
    return tab ? { tab } : {};
  }

  handleChange(key, state) {
    return e => {
      this.setState({
        tab: {
          ...this.state.tab,
          [key]: e.target.value,
        },
      });
    };
  }

  handleDateChange(value) {
    this.handleChange('due')({ target: { value } });
  }

  get categories() {
    const tabs = [
      { category: 'Category 1' },
      { category: 'Category 1' },
      { category: 'Category 2' },
      { category: 'Category 2' },
    ];

    return tabs
      .map(tab => tab.category)
      .filter((category, index, categories) => categories.indexOf(category) !== index);
  }

  render() {
    if (!this.state.tab) return <div>Loading</div>;
    try {
      const { classes } = this.props;
      const { tab } = this.state;
      const { title, url, category, due, note, preview } = tab;
      const categories = this.categories;

      return (
        <div className={classes.root}>
          <CardMedia className={classes.img} src={preview} component="img" />
          <div className={classes.inputs}>
            <Input
              elevation={8}
              leadingIcon="bookmark"
              placeholder="Title"
              value={title}
              onChange={this.handleChange('title')}
            />
            <Input elevation={8} leadingIcon="link" placeholder="URL" value={url} onChange={this.handleChange('url')} />
            <Input
              elevation={8}
              leadingIcon="category"
              placeholder="Category"
              autoSuggest={categories}
              value={category}
              onChange={this.handleChange('category')}
            />
            <Input
              elevation={8}
              leadingIcon="access_time"
              trailingIcon="arrow_drop_down"
              placeholder="Due"
              type="date"
              value={due}
              onChange={this.handleDateChange}
            />
            <Input
              elevation={8}
              leadingIcon="notes"
              placeholder="Note"
              multiline
              rows={3}
              value={note}
              onChange={this.handleChange('note')}
            />
          </div>
          <AppBar className={classes.appBar} color="primary" elevation={0}>
            <Toolbar>
              <IconButton edge="start" color="inherit">
                <Icon>arrow_back</Icon>
              </IconButton>
              <div className={classes.grow} />
              <IconButton edge="end" color="inherit">
                <Icon>check</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}

export { TabPage };
