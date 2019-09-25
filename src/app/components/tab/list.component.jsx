import React from 'react';

import { TabCard } from './card.component';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))',
  },
}));

const TabList = ({ tabs }) => {
  const classes = useStyles({});
  return (
    <div className={classes.grid}>
      {tabs.map(tab => (
        <TabCard tab={tab} key={tab.id} />
      ))}
    </div>
  );
};

export { TabList };
