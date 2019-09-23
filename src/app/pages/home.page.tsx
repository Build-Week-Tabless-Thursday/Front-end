import React from 'react';

import { SetTitle } from '@decorators/title.decorator';
import { TabList } from '@components/tab/list.component';

@SetTitle('Test')
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Next.js</h1>
        <TabList />
      </div>
    );
  }
}
