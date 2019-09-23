import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Paper, InputBase, Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    padding: 10,
    color: theme.palette.grey[700],
  },
}));

const Input = props => {
  const classes = useStyles({});

  return (
    <Paper className={classes.root}>
      {props.leadingIcon && (
        <div className={classes.icon}>
          <Icon>{props.leadingIcon}</Icon>
        </div>
      )}

      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        inputProps={{ 'aria-label': props.placeholder }}
      />

      {props.trailingIcon && (
        <div className={classes.icon}>
          <Icon>{props.trailingIcon}</Icon>
        </div>
      )}
    </Paper>
  );
};

export { Input };
