import { Store } from 'undux';
import axios from 'axios';

import { Tab } from '@models/Tab';

export type ShareState = { token?: string; uuid?: string; shared?: Tab[] };

export class ShareService {
  private static readonly endpoint = '';
  private static store: Store<ShareState>;

  public static inject(store: Store<ShareState>) {
    this.store = store;
    this.effects();
    return store;
  }

  public static effects() {
    this.store.on('uuid').subscribe({
      next: async () => {
        // const { uuid } = this.store.getState();
        // const response = await axios.get<Tab[]>(ShareService.endpoint, { params: { uuid } });
        // this.store.set('shared')(response.data);

        // TEMP - Until Endpoint is up.
        this.store.set('shared')([
          {
            id: '0',
            order: 0,
            link: 'https://www.google.com',
            note: 'DUMMY SHARED TAB',
          },
        ]);
      },
    });
  }

  public static async share(tabs: Tab[]) {
    // const { token } = this.store.getState();
    // const response = await axios.put<Tab[]>(ShareService.endpoint, { tabs }, { headers: { token } });
    // this.store.set('uuid')(response.data);

    // TEMP - Until Endpoint is up.
    this.store.set('uuid')('DUMMY_UUID');
  }

  public static async delete(uuid: string) {
    // const { token } = this.store.getState();
    // const response = await axios.delete<Tab[]>(ShareService.endpoint, { params: { uuid }, headers: { token } });
    this.store.set('uuid')(null);
    this.store.set('shared')(null);
  }
}
