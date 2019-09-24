import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { signupAction } from '../state/login/login-signup.Action';
import { FormControl, FormHelperText, Input, InputLabel, FormGroup, Button, TextField } from '@material-ui/core';


class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({...state, [e.target.name]: e.target.value})
  }

  submitForm = e => {
    e.preventDefault()
    this.props.signupAction
  }

  render() {
    return (
      <div>
        <h1>Hello Signup</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isSignedUp: state.isSignedUp
  }
  
};

export default connect(
  mapStateToProps,
  { signupAction }
)(SignupPage);
