import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { AppBar, CircularProgress, CardMedia, Icon, IconButton, Toolbar } from '@material-ui/core';

import { getTab, addTab, editTab, setError } from '../state/actions';
import { Input } from '../components/reusable/input.component';
import { formatURL } from '../utils/formatURL';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  img: {
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
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  input: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  icon: {
    color: 'red',
  },
  appBar: {
    backgroundColor: theme.palette.primary.background,
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  grow: {
    flexGrow: 1,
  },
  loading: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

@connect(
  state => ({ categories: state.tabs.categories }),
  { getTab, addTab, editTab, setError }
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
    this.props.setError(err);
  }

  render() {
    try {
      const { categories, classes, history } = this.props;

      if (!this.state)
        return (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        );

      const { tab } = this.state;

      return (
        <form className={classes.root} onSubmit={this.handleSubmit}>
          {tab.preview && (
            <CardMedia className={classes.img} src={tab.preview} alt={tab.url} component="img" />
          )}
          <AppBar
            className={classes.appBar}
            color="primary"
            style={{ backgroundColor: tab.backgroundColor }}
            elevation={0}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => history.goBack()}
                aria-label="back"
              >
                <Icon>arrow_back</Icon>
              </IconButton>
              <div className={classes.grow} />
              <IconButton type="submit" edge="end" color="inherit" aria-label="save">
                <Icon>check</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.inputs} style={{ backgroundColor: tab.backgroundColor }}>
            <Input
              className={classes.input}
              elevation={8}
              leadingIcon="bookmark"
              placeholder="Title"
              value={tab.title || ''}
              onChange={this.handleChange('title')}
              ariaLabel="title"
            />
            <Input
              className={classes.input}
              elevation={8}
              leadingIcon="link"
              placeholder="URL"
              value={tab.url || ''}
              onChange={this.handleChange('url')}
              ariaLabel="url"
            />
            <Input
              className={classes.input}
              elevation={8}
              leadingIcon="category"
              placeholder="Category"
              autoSuggest={categories}
              value={tab.category || ''}
              onChange={this.handleChange('category')}
              ariaLabel="category"
            />
            <Input
              className={classes.input}
              elevation={8}
              leadingIcon="access_time"
              trailingIcon="arrow_drop_down"
              placeholder="Due"
              type="date"
              value={tab.due || undefined}
              onChange={this.handleChange('due')}
              ariaLabel="due"
            />
            <Input
              className={classes.input}
              elevation={8}
              leadingIcon="notes"
              placeholder="Note"
              multiline
              rows={3}
              value={tab.notes || ''}
              onChange={this.handleChange('notes')}
              ariaLabel="notes"
            />
          </div>
        </form>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}

export { TabPage };
