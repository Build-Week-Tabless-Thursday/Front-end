import { Effects, Store, createConnectedStore } from 'undux';

import { ShareService, ShareState } from './share.service';
import { TabService, TabState } from './tab.service';
import { TokenService, TokenState } from './token.service';
import { UserService, UserState } from './user.service';

export type StoreState = ShareState & TabState & TokenState & UserState;
export type StoreProp = { store: Store<StoreState> };

export class StoreService {
  private static readonly effects: Effects<StoreState> = store => {
    UserService.inject(store as Store<UserState>);
    ShareService.inject(store as Store<ShareState>);
    TabService.inject(store as Store<TabState>);
    TokenService.inject(store as Store<TokenState>);
    return store;
  };

  private static readonly store = createConnectedStore<StoreState>(
    { token: null, uuid: null, tabs: null, shared: null, user: null },
    StoreService.effects
  );

  public static readonly Container = StoreService.store.Container;
  public static readonly withStore = StoreService.store.withStore;
  public static readonly useStore = StoreService.store.useStore;
}
