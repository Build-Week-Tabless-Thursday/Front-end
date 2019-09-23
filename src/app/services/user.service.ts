import { Store } from 'undux';
import axios from 'axios';

import { User } from '@models/User';

export type UserState = { token?: string; user?: User };

export class UserService {
  private static readonly endpoint = '';
  private static store: Store<UserState>;

  public static inject(store: Store<UserState>) {
    this.store = store;
    this.effects();
    return store;
  }

  public static effects() {
    this.store.on('token').subscribe({
      next: async () => {
        try {
          // const { token } = this.store.getState();
          // const response = await axios.get<User>(UserService.endpoint, { headers: { token } });
          // this.store.set('user')(response.data);

          // TEMP - Until Endpoint is up.
          this.store.set('user')({ name: 'Beta Tester', email: 'beta@testing.com' });
        } catch (err) {
          throw new Error('Error while signing in...');
        }
      },
    });
    return this.store;
  }

  public static async updateAccount(email?: string, password?: string, name?: string) {
    try {
      // const { token } = this.store.getState();
      // const response = await axios.put<boolean>(
      //   UserService.endpoint,
      //   { email, password, name },
      //   { headers: { token } }
      // );
      // this.store.set('user')(response.data);

      // TEMP - Until Endpoint is up.
      this.store.set('user')({
        email,
        name,
      });
    } catch (err) {
      throw new Error('Error durning account update...');
    }
  }
}
