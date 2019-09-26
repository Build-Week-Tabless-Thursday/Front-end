/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Snackbar,
  SnackbarContent,
  Icon,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

import { CLEAR_ERROR } from '../../state/actions';

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.light,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ErrorComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [state, setState] = React.useState({
    open: false,
    error: '',
  });

  const authError = useSelector(state => state.auth['error']);
  const tabsError = useSelector(state => state.tabs['error']);
  const userError = useSelector(state => state.user['error']);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (authError) setState({ ...state, open: true, error: authError });
  }, [authError]);

  React.useEffect(() => {
    if (tabsError) setState({ ...state, open: true, error: tabsError });
  }, [tabsError]);

  React.useEffect(() => {
    if (userError) setState({ ...state, open: true, error: userError });
  }, [userError]);

  React.useEffect(() => {
    if (!open) dispatch({ type: CLEAR_ERROR });
  }, [state.open]);

  const { error, open } = state;
  return (
    <Snackbar
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: md ? 'bottom' : 'top',
        horizontal: md ? 'left' : 'center',
      }}
      open={open}
      onClose={() => setState({ ...state, open: false })}
    >
      <SnackbarContent
        className={classes.error}
        message={
          <span className={classes.message}>
            <Icon className={classes.icon}>error</Icon>
            {error}
          </span>
        }
      ></SnackbarContent>
    </Snackbar>
  );
};

export { ErrorComponent };
