import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, FormGroup, Button } from '@material-ui/core';
import { Input } from '../../components/reusable/input.component';

const useStyles = makeStyles(theme => ({
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
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    textDecoration: 'none',
  },
  linkButton: {
    color: 'white',
  },
}));

const UserForm = ({ button, buttonColor, email, link, linkLabel, onSubmit }) => {
  const classes = useStyles({});
  const [user, setUser] = React.useState({ username: '', email: '', password: '' });

  const handleChange = key => {
    return e => {
      setUser({
        ...user,
        [key]: e.target.value,
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
          value={user.username}
          onChange={handleChange('username')}
        />
        {email && (
          <Input
            elevation={8}
            leadingIcon="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange('email')}
          />
        )}
        <Input
          elevation={8}
          leadingIcon="lock"
          placeholder="Password"
          value={user.password}
          onChange={handleChange('password')}
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
          <NavLink className={classes.link} to={link}>
            <Button className={classes.linkButton} variant="text">
              {linkLabel}
            </Button>
          </NavLink>
        )}
      </FormGroup>
    </form>
  );
};

export { UserForm };
