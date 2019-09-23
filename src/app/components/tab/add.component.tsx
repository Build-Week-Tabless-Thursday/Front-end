import React from 'react';
import { TabService } from '@services/tab.service';

export default () => {
  React.useEffect(() => {
    TabService.addTab({
      id: '',
      link: '',
      order: 0,
    });
  }, []);

  return <div />;
};
