import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction } from '../state/actions';
import { UserForm } from '../components/user/form.component';

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { loginAction }
)
@withRouter
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
    return <UserForm button="LOGIN" link="/signup" linkLabel="CREATE AN ACCOUNT" onSubmit={this.handleSubmit} />;
  }
}

export { LoginPage };
