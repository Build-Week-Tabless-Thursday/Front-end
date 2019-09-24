import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FormGroup, Button, TextField } from '@material-ui/core';
import { loginAction } from '../state/actions';

@withRouter
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isLoggedIn) this.props.history.push('/');
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const result = await this.props.loginAction(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="loginform">
        <FormGroup>
          <TextField name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
          <TextField name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
          <Button type="submit">Log In</Button>
          <NavLink to='/signup'> CREATE AN ACCOUNT </NavLink>
        </FormGroup>
      </form>
    );
  }
}

LoginPage = connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    loginError: state.auth.loginError,
    token: state.auth.token,
  }),
  { loginAction }
)(LoginPage);

export { LoginPage };
