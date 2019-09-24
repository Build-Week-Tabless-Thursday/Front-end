import React from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../state/login/login-signup.Action';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Hello Signup</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { signupAction }
)(SignupPage);
