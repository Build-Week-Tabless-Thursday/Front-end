import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction } from '../state/actions';
import { UserForm } from '../components/user/form.component';
import { withStyles } from '@material-ui/styles';

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
  { loginAction }
)
@withRouter
@withStyles(styles)
class LoginPage extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleSubmit = user => {
    this.props.loginAction(user);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <UserForm button="LOGIN" link="/signup" linkLabel="CREATE AN ACCOUNT" onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export { LoginPage };
