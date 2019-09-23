import React from 'react';
import { RouteComponentProps } from 'react-router';

import { WithRouter } from '@decorators/router.decorator';
import { WithStore } from '@decorators/store.decorator';
import { StoreProp } from '@services/store.service';

type RouterPrams = { name: string };
type TabPageProps = StoreProp & RouteComponentProps<RouterPrams>;

@WithRouter()
@WithStore()
export class CategoryPage extends React.Component<TabPageProps> {
  private get category() {
    const { match, store } = this.props;
    const { name } = match.params;
    const { tabs } = store.getState();
    const result = tabs.filter(tab => tab.category === name);
    if (!result) throw new Error('Error - Invalid Category');
    return result;
  }

  render() {
    try {
      const category = this.category;
      return !category ? (
        <div>Loading...</div>
      ) : (
        <div>
          {category.map(tab => {
            <h1>Hello Tab - {tab.id}</h1>;
          })}
        </div>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}
