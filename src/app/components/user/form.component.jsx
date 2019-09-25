import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, FormGroup, Button } from '@material-ui/core';
import { Input } from '../../components/reusable/input.component';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

const UserForm = ({ button, email, link, linkLabel, onSubmit }) => {
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
    <form onSubmit={handleSubmit} className="loginform">
      <FormGroup>
        <Input placeholder="Username" value={user.username} onChange={handleChange('username')} />
        {email && <Input placeholder="Email" value={user.email} onChange={handleChange('email')} />}
        <Input placeholder="Password" value={user.password} onChange={handleChange('password')} />
        <Button type="submit" color="primary" variant="contained">
          {button}
        </Button>
        {link && linkLabel && (
          <NavLink className={classes.link} to={link}>
            <Button>{linkLabel}</Button>
          </NavLink>
        )}
      </FormGroup>
    </form>
  );
};

export { UserForm };
