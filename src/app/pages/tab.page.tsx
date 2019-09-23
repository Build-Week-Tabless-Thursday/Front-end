import React from 'react';
import { RouteComponentProps } from 'react-router';

import { WithRouter } from '@decorators/router.decorator';
import { WithStore } from '@decorators/store.decorator';
import { StoreProp } from '@services/store.service';

type RouterPrams = { id: string };
type TabPageProps = StoreProp & RouteComponentProps<RouterPrams>;

@WithRouter()
@WithStore()
export class TabPage extends React.Component<TabPageProps> {
  private get tab() {
    const { match, store } = this.props;
    const { id } = match.params;
    const { tabs } = store.getState();
    const result = tabs.find(tab => tab.id === id);
    if (!result) throw new Error('Error - Invalid Tab');
    return result;
  }

  render() {
    try {
      const tab = this.tab;
      return !tab ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Hello Tab - {tab.id}</h1>
        </div>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}
