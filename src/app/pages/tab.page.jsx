import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { AppBar, CardMedia, Icon, IconButton, Toolbar } from '@material-ui/core';

import { getTab, addTab, editTab } from '../state/actions';
import { Input } from '../components/reusable/input.component';
import { formatURL } from '../utils/formatURL';

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
  { getTab, addTab, editTab }
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return value => {
      this.setState({
        tab: {
          ...this.state.tab,
          [key]: value,
        },
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addTab, editTab, match, history } = this.props;
    const { tab } = this.state;
    const submit = match.params.id ? editTab : addTab;
    try {
      if (!tab.title) throw new Error('A title is required...');
      if (!tab.url) throw new Error('A URL is required...');
      tab.url = formatURL(tab.url);
      submit(tab, match.params.id);
      history.goBack();
    } catch (err) {
      this.handleError(err.toString());
    }
  }

  handleError(err) {
    console.log(err);
  }

  render() {
    try {
      if (!this.state) return <div>Loading</div>;
      const { tab } = this.state;
      const { categories, classes, history } = this.props;

      return (
        <form className={classes.root} onSubmit={this.handleSubmit}>
          {tab.preview && <CardMedia className={classes.img} src={tab.preview} component="img" />}
          <div className={classes.inputs} style={{ backgroundColor: tab.backgroundColor }}>
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
              value={tab.notes || ''}
              onChange={this.handleChange('notes')}
            />
          </div>
          <AppBar
            className={classes.appBar}
            color="primary"
            style={{ backgroundColor: tab.backgroundColor }}
            elevation={0}
          >
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => history.goBack()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <div className={classes.grow} />
              <IconButton type="submit" edge="end" color="inherit">
                <Icon>check</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
        </form>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}

export { TabPage };
