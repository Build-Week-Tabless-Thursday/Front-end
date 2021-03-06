import React from 'react';

import { makeStyles, FormGroup, Button } from '@material-ui/core';
import { Input } from '../../components/reusable/input.component';

const useStyles = makeStyles(() => ({
  root: {
    width: '50%',
    minWidth: 500,
    padding: 10,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  link: {
    color: 'white',
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    textDecoration: 'none',
  },
}));

const UserForm = ({ button, buttonColor, email, link, linkLabel, onLink, onSubmit }) => {
  const classes = useStyles({});
  const [user, setUser] = React.useState({ username: '', email: '', password: '' });

  const handleChange = key => {
    return value => {
      setUser({
        ...user,
        [key]: value,
      });
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup className={classes.root}>
        <Input
          elevation={8}
          leadingIcon="account_circle"
          placeholder="Username"
          type="username"
          value={user.username}
          onChange={handleChange('username')}
          ariaLabel="username"
        />
        <Input
          elevation={8}
          leadingIcon="email"
          placeholder="Email"
          style={{ display: email ? '' : 'none' }}
          type="email"
          value={email ? user.email : ''}
          onChange={handleChange('email')}
          ariaLabel="email"
        />
        <Input
          elevation={8}
          leadingIcon="lock"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={handleChange('password')}
          ariaLabel="password"
        />
        <Button
          elevation={8}
          className={classes.button}
          color={buttonColor || 'primary'}
          variant="contained"
          type="submit"
        >
          {button}
        </Button>
        {link && linkLabel && (
          <Button className={classes.link} variant="text" onClick={onLink}>
            {linkLabel}
          </Button>
        )}
      </FormGroup>
    </form>
  );
};

export { UserForm };
