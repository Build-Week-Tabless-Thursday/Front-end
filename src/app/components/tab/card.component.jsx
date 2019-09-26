import React from 'react';
import { useDispatch, useStore } from 'react-redux';

import * as Vibrant from 'node-vibrant';
import { Card, CardActions, CardMedia, Icon, IconButton, Typography, makeStyles } from '@material-ui/core';

import { useLocation } from '../../hooks/router.hook';
import { deleteTab } from '../../state/actions';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    opacity: '0',
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

  const [colors, setColors] = React.useState({});
  // React.useEffect(() => {
  //   const vibrant = new Vibrant(preview);
  //   vibrant.getPalette((_, palette) => {
  //     setColors({ card: palette['Vibrant'].getHex(), text: palette['DarkMuted'].getBodyTextColor() });
  //   });
  // }, [tab]);

  const { title, url, preview } = tab;
  return (
    <Card className={classes.card} style={{ backgroundColor: colors.card, opacity: colors.card ? 100 : 100 }}>
      <a href={url}>
        <CardMedia className={classes.preview} src={preview} component="img" />
      </a>

      <Typography component="h5" variant="h5" className={classes.overlay}>
        {title}
      </Typography>

      <CardActions className={classes.icons}>
        <IconButton onClick={() => navigate(`/tab/${tab.id}`)}>
          <Icon style={{ color: colors.text }}>edit</Icon>
        </IconButton>

        <div className={classes.grow} />
        <IconButton onClick={() => deleteTab(tab.id)(dispatch, store.getState)}>
          <Icon style={{ color: colors.text }}>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { TabCard };
