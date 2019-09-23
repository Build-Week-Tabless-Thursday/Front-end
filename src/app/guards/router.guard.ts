import { Store } from 'undux';

import { TokenState } from '@services/token.service';

export class RouterGuard {
  public static authGuard(store: Store<TokenState>) {
    // if (!store.get('token')) Router.push('/login');
  }
}
