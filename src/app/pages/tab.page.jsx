import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { AppBar, CardMedia, Icon, IconButton, Toolbar } from '@material-ui/core';

import { getTab, addTab } from '../state/actions';
import { Input } from '../components/reusable/input.component';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  img: {
    objectFit: 'cover',
    filter: 'brightness(0.5)',
    height: '20vh',
    [theme.breakpoints.up('sm')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '48vh',
    },
    transition: 'all 0.5s ease-in-out',
  },
  inputs: {
    backgroundColor: theme.palette.primary.background,
    padding: 10,
    marginBottom: 56,
    flexGrow: '1',
  },
  icon: {
    color: 'red',
  },
  appBar: {
    backgroundColor: theme.palette.primary.background,
    position: 'fixed',
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
});

@connect(
  state => ({ categories: state.tabs.categories }),
  { getTab, addTab }
)
@withRouter
@withStyles(styles)
class TabPage extends React.Component {
  constructor(props) {
    super(props);

    const { match, getTab } = props;
    const { id } = match.params;
    if (id) getTab(id).then(tab => this.setState({ tab }));
    else this.state = { tab: {} };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    return e => {
      this.setState({
        tab: {
          ...this.state.tab,
          [key]: e.target.value,
        },
      });
    };
  }

  render() {
    try {
      if (!this.state) return <div>Loading</div>;
      const { tab } = this.state;
      const { categories, classes, history, addTab } = this.props;

      return (
        <div className={classes.root}>
          {tab.preview && (
            <CardMedia className={classes.img} src={`data:image/jpg;base64,  ${tab.preview}`} component="img" />
          )}
          <div className={classes.inputs}>
            <Input
              elevation={8}
              leadingIcon="bookmark"
              placeholder="Title"
              value={tab.title || ''}
              onChange={this.handleChange('title')}
            />
            <Input
              elevation={8}
              leadingIcon="link"
              placeholder="URL"
              value={tab.url || ''}
              onChange={this.handleChange('url')}
            />
            <Input
              elevation={8}
              leadingIcon="category"
              placeholder="Category"
              autoSuggest={categories}
              value={tab.category || ''}
              onChange={this.handleChange('category')}
            />
            <Input
              elevation={8}
              leadingIcon="access_time"
              trailingIcon="arrow_drop_down"
              placeholder="Due"
              type="date"
              value={tab.due || undefined}
              onChange={this.handleChange('due')}
            />
            <Input
              elevation={8}
              leadingIcon="notes"
              placeholder="Note"
              multiline
              rows={3}
              value={tab.note || ''}
              onChange={this.handleChange('note')}
            />
          </div>
          <AppBar className={classes.appBar} color="primary" elevation={0}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => history.goBack()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <div className={classes.grow} />
              <IconButton edge="end" color="inherit" onClick={() => addTab(tab)}>
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
