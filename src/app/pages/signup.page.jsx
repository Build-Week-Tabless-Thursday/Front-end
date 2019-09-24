import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { FormGroup, Button } from '@material-ui/core';

import { signupAction } from '../state/actions';
import { Input } from '../components/reusable/input.component';

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { signupAction }
)
class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleChange(key) {
    return e => {
      this.setState({
        ...this.state,
        [key]: e.target.value,
      });
    };
  }

  submitForm = async e => {
    e.preventDefault();
    await this.props.signupAction(this.state);
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="loginform">
        <FormGroup>
          <Input placeholder="Email" value={email} onChange={this.handleChange('email')} />
          <Input placeholder="Username" value={username} onChange={this.handleChange('username')} />
          <Input placeholder="Password" value={password} onChange={this.handleChange('password')} />
          <Button type="submit" color="primary" variant="contained">
            Sign Up
          </Button>
          <NavLink to="/login">
            <Button>I Already Have An Account</Button>
          </NavLink>
        </FormGroup>
      </form>
    );
  }
}

export { SignupPage };
