import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { FormControl, FormHelperText, Input, InputLabel, FormGroup, Button, TextField } from '@material-ui/core';

import { signupAction } from '../state/actions';

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

  handleChange = e => {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  submitForm = async e => {
    e.preventDefault()
    const result = await this.props.signupAction(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="loginform">
        <FormGroup>
        <TextField name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
          <TextField name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
          <TextField name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
          <Button type="submit">Sign Up</Button>
          <NavLink to='/login'> I Already Have An Account </NavLink>
        </FormGroup>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return{
    isSignedUp: state.isSignedUp
  }
  
};

SignupPage = connect(
  mapStateToProps,
  { signupAction }
)(SignupPage);

export { SignupPage };
