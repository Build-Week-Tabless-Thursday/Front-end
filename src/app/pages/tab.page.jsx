import React from 'react';

import { withStyles } from '@material-ui/styles';
import { AppBar, CardMedia, Icon, IconButton, Toolbar } from '@material-ui/core';

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

@withStyles(styles)
class TabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Instacart',
      url: 'https://www.instacart.com/',
      category: 'Personal',
      due: new Date(),
      note: '',
      preview:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    };
    console.log(this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(key) {
    return e => {
      this.setState({
        ...this.state,
        [key]: e.target.value,
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
    try {
      const { classes } = this.props;
      const tab = this.state;
      const { title, url, category, due, note, preview } = tab;
      const categories = this.categories;

      return !tab ? (
        <div>Loading</div>
      ) : (
        <div className={classes.root}>
          <CardMedia className={classes.img} src={preview} component="img" />
          <div className={classes.inputs}>
            <Input leadingIcon="bookmark" placeholder="Title" value={title} onChange={this.handleChange('title')} />
            <Input leadingIcon="link" placeholder="URL" value={url} onChange={this.handleChange('url')} />
            <Input
              leadingIcon="category"
              placeholder="Category"
              autoSuggest={categories}
              value={category}
              onChange={this.handleChange('category')}
            />
            <Input leadingIcon="access_time" placeholder="Due" date value={due} onChange={this.handleDateChange} />
            <Input
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
