import React from 'react';
import { useDispatch, useStore } from 'react-redux';

import { Card, CardActions, CardMedia, Icon, IconButton, Typography, makeStyles } from '@material-ui/core';

import { defaultImg } from '../../theme/var.theme';
import { useLocation } from '../../hooks/router.hook';
import { deleteTab } from '../../state/actions';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    textDecoration: 'none',
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
  grow: {
    flexGrow: 1,
  },
}));

const TabCard = ({ tab }) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const store = useStore();
  const { navigate } = useLocation();
  const { title, url, preview, color, backgroundColor } = tab;
  return (
    <Card className={classes.card} style={{ backgroundColor }}>
      <a href={url}>
        <CardMedia className={classes.preview} src={preview || defaultImg} component="img" />
      </a>

      <Typography component="h5" variant="h5" className={classes.overlay}>
        {title}
      </Typography>

      <CardActions className={classes.icons}>
        <IconButton onClick={() => navigate(`/tab/${tab.id}`)}>
          <Icon style={{ color }}>edit</Icon>
        </IconButton>

        <div className={classes.grow} />
        <IconButton onClick={() => deleteTab(tab.id)(dispatch, store.getState)}>
          <Icon style={{ color }}>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { TabCard };
