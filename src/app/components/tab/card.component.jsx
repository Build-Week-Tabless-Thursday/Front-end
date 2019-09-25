import React from 'react';
import * as Vibrant from 'node-vibrant';

import { Card, CardActions, CardMedia, Icon, IconButton, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    opacity: '0',
  },
  preview: {
    height: 151,
    filter: 'brightness(0.5)',
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
  const [colors, setColors] = React.useState({});
  React.useEffect(() => {
    const vibrant = new Vibrant(tab.preview);
    vibrant.getPalette((_, palette) => {
      setColors({ card: palette['Vibrant'].getHex(), text: palette['Vibrant'].getTitleTextColor() });
    });
  }, [tab]);

  const { title, preview } = tab;
  return (
    <Card className={classes.card} style={{ backgroundColor: colors.card, opacity: colors.card ? 100 : 0 }}>
      <CardMedia className={classes.preview} src={preview} component="img" />

      <Typography component="h5" variant="h5" className={classes.overlay}>
        {title}
      </Typography>

      <CardActions className={classes.icons}>
        <IconButton>
          <Icon style={{ color: colors.text }}>edit</Icon>
        </IconButton>
        <div className={classes.grow} />
        <IconButton>
          <Icon style={{ color: colors.text }}>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { TabCard };
