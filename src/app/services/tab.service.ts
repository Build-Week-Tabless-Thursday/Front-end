import { Store } from 'undux';
import axios from 'axios';

import { Tab } from '@models/Tab';

export type TabState = { token?: string; uuid?: string; tabs?: Tab[] };

export class TabService {
  private static readonly endpoint = '';
  private static store: Store<TabState>;

  public static inject(store: Store<TabState>) {
    this.store = store;
    this.effects();
    return store;
  }

  private static effects() {
    this.store.on('token').subscribe({
      next: async () => {
        // const { token } = this.store.getState();
        // const response = await axios.get<Tab[]>(TabService.endpoint, { token });
        // this.store.set('tabs')(response.data);

        // TEMP - Until Endpoint is up.
        this.store.set('tabs')([
          {
            id: '0',
            order: 0,
            link: 'https://www.google.com',
            note: 'DUMMY TAB',
          },
        ]);
      },
    });
    return this.store;
  }

  public static async getTab(id: string) {
    // const { token } = this.store.getState();
    // const response = await axios.get<Tab>(TabService.endpoint, { params: { id }, headers: { token } });
    // return response.data;

    // TEMP - Until Endpoint is up.
    return [
      { id: '0', order: 0, link: 'https://www.google.com', note: 'DUMMY TAB' },
      { id: '0', order: 1, link: 'https://www.facebook.com', note: 'DUMMY TAB 2' },
    ];
  }

  public static async addTab(tab: Tab) {
    // const { token } = this.store.getState();
    // const response = await axios.post<Tab[]>(TabService.endpoint, { tab }, { headers: { token } });
    // this.store.set('tabs')(response.data);

    // TEMP - Until Endpoint is up.
    const { tabs } = this.store.getState();
    this.store.set('tabs')([
      ...tabs,
      { id: '0', order: tabs.length - 1, link: 'https://www.facebook.com', note: 'DUMMY TAB 2' },
    ]);
  }

  public static async updateTab(id: string, tab: Tab) {
    // const { token } = this.store.getState();
    // const response = await axios.put<Tab[]>(TabService.endpoint, { tab }, { params: { id }, headers: { token } });
    // this.store.set('tabs')(response.data);

    // TEMP - Until Endpoint is up.
    const { tabs } = this.store.getState();
    const otherTabs = tabs.filter(tab => tab.id !== id);
    this.store.set('tabs')([...otherTabs, tab]);
  }

  public static async deleteTab({ id }: Tab) {
    // const { token } = this.store.getState();
    // const response = await axios.delete<Tab[]>(TabService.endpoint, { params: { id }, headers: { token } });
    // this.store.set('tabs')(response.data);

    // TEMP - Until Endpoint is up.
    const { tabs } = this.store.getState();
    const otherTabs = tabs.filter(tab => tab.id !== id);
    this.store.set('tabs')([...otherTabs]);
  }
}
