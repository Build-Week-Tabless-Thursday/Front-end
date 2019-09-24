import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { FormGroup, Button } from '@material-ui/core';

import { loginAction } from '../state/actions';
import { Input } from '../components/reusable/input.component';

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
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit = async e => {
    e.preventDefault();
    this.props.loginAction(this.state);
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="loginform">
        <FormGroup>
          <Input placeholder="Username" value={username} onChange={this.handleChange('username')} />
          <Input placeholder="Password" value={password} onChange={this.handleChange('password')} />
          <Button type="submit" color="primary" variant="contained">
            Log In
          </Button>
          <NavLink to="/signup">
            <Button>CREATE AN ACCOUNT</Button>
          </NavLink>
        </FormGroup>
      </form>
    );
  }
}

export { LoginPage };
