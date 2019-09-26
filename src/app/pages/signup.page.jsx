import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';

import { signup } from '../state/actions';
import { UserForm } from '../components/user/form.component';

const styles = theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary['background'],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { signup }
)
@withStyles(styles)
class SignupPage extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleSubmit = user => {
    this.props.signup(user);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <UserForm email button="CREATE ACCOUNT" link="/" linkLabel="Already a user?" onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export { SignupPage };
