import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import { CLEAR_ERROR } from '../../state/actions';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
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
  const [state, setState] = React.useState({
    open: false,
    error: '',
    vertical: 'top',
    horizontal: 'center',
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

  const { error, vertical, horizontal, open } = state;
  return (
    <Snackbar
      autoHideDuration={2000}
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={open}
      onClose={() => setState({ ...state, open: false })}
      message={<span id="message-id">{error}</span>}
    />
  );
};

export { ErrorComponent };
