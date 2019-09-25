import React from 'react';
import { UserForm } from '../user/form.component';
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
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const TabSearch = ({ button, buttonColor, email, link, linkLabel, onSubmit }) => {
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
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <FormGroup className={classes.root}>
          <Input
            elevation={8}
            leadingIcon="search"
            placeholder="Username"
            value={user.username}
            onChange={handleChange('username')}
          />
        </FormGroup>
      </form>
    </div>
  );
};

export { TabSearch };
