import React from 'react';
import { useDispatch, useStore } from 'react-redux';

import {
  Card,
  CardActions,
  CardMedia,
  Icon,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';

import { defaultImg } from '../../theme/var.theme';
import { useLocation } from '../../hooks/router.hook';
import { deleteTab } from '../../state/actions';
import { Confirm } from '../reusable/confirm.component';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    textDecoration: 'none',
    backgroundColor: theme.palette.secondary.main,
  },
  preview: {
    height: 151,
    filter: 'brightness(0.6)',
    backfaceVisibility: 'hidden',
  },
  overlay: {
    position: 'absolute',
    bottom: '4.3rem',
    left: '20px',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  icons: {
    transition: 'all 0.5s ease-in-out',
  },
  grow: {
    flexGrow: 1,
  },
}));

const TabCard = ({ tab }) => {
  const [state, setState] = React.useState({ confirmIsOpen: false });
  const classes = useStyles({});
  const dispatch = useDispatch();
  const store = useStore();
  const { navigate } = useLocation();
  const { title, url, preview, color, backgroundColor } = tab;
  return (
    <React.Fragment>
      <Card className={classes.card} style={{ backgroundColor }}>
        <a href={url}>
          <CardMedia
            className={classes.preview}
            src={preview || defaultImg}
            alt={tab.url}
            component="img"
          />
        </a>

        <Typography component="h5" variant="h5" className={classes.overlay}>
          {title}
        </Typography>

        <CardActions className={classes.icons} style={{ visibility: tab.id ? 'unset' : 'hidden' }}>
          <IconButton onClick={() => navigate(`/tab/${tab.id}`)} aria-label="edit">
            <Icon className={classes.icon} style={{ color }}>
              edit
            </Icon>
          </IconButton>

          <div className={classes.grow} />
          {/* <IconButton onClick={() => deleteTab(tab.id)(dispatch, store.getState)}> */}
          <IconButton onClick={() => setState({ confirmIsOpen: true })} aria-label="delete">
            <Icon className={classes.icon} style={{ color }}>
              delete
            </Icon>
          </IconButton>
        </CardActions>
      </Card>
      <Confirm
        open={state.confirmIsOpen}
        onClose={() => setState({ confirmIsOpen: false })}
        action={() => deleteTab(tab.id)(dispatch, store.getState)}
      />
    </React.Fragment>
  );
};

export { TabCard };
