import React from 'react';

import { FormControl, FormHelperText, Input, InputLabel, FormGroup, Button, TextField } from '@material-ui/core';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <TextField name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
          <Button type="submit">Test</Button>
        </FormGroup>
      </form>
    );
  }
}

export { LoginPage };
