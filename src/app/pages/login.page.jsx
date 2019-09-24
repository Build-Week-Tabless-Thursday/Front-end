import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FormGroup, Button, TextField } from '@material-ui/core';
import { loginAction } from '../state/actions';

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { loginAction }
)
@withRouter
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    const { loginAction } = props;

    this.state = {
      username: '',
      password: '',
    };

    this.loginAction = loginAction;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.loginAction(this.state);
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

export { LoginPage };
