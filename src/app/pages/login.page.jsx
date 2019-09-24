import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../state/login/login-signup.Action';

import { FormControl, FormHelperText, Input, InputLabel, FormGroup, Button, TextField } from '@material-ui/core';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const result = await this.props.loginAction(this.state);
    if (result) {
      this.props.history.push('/');
    } else {
    }
  };

  render() {
    console.log(this.handleSubmit);
    return (
      <form onSubmit={this.handleSubmit} className="loginform">
        <FormGroup>
          <TextField name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
          <TextField name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
          <Button type="submit">Test</Button>
        </FormGroup>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    isLoggedIn: state.isLoggedIn,
    loginError: state.loginError,
    token: state.token,
  };
};

export default connect(
  mapStateToProps,
  { loginAction }
)(LoginPage);
