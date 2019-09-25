import React from 'react';
import { connect } from 'react-redux';

import { signupAction } from '../state/actions';
import { UserForm } from '../components/user/form.component';

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { signupAction }
)
class SignupPage extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleSubmit = user => {
    this.props.signupAction(user);
  };

  render() {
    return <UserForm email button="CREATE ACCOUNT" link="/" linkLabel="Already a user?" onSubmit={this.handleSubmit} />;
  }
}

export { SignupPage };
