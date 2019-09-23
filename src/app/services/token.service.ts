import { Store } from 'undux';
import axios from 'axios';

export type TokenState = { token?: string };

export class TokenService {
  private static readonly endpoint = '';
  private static store: Store<TokenState>;

  public static inject(store: Store<TokenState>) {
    this.store = store;
    this.effects();
    return store;
  }

  public static effects() {
    return this.store;
  }

  public static async login(email: string, password: string) {
    if (!email || !password) throw new Error('Email and Password are required');
    // try {
    //   const response = await axios.get<string>(TokenService.endpoint, { email, password });
    //   this.store.set('token')(response.data);
    // } catch (err) {
    //   throw new Error('Error durning login...');
    // }

    // TEMP - Until Endpoint is up.
    this.store.set('token')('DUMMY_TOKEN');
  }

  public static async signup(email: string, password: string, name: string) {
    // try {
    //   const response = await axios.post<string>(TokenService.endpoint, { email, password, name });
    //   this.store.set('token')(response.data);
    // } catch (err) {
    //   throw new Error('Error durning signup...');
    // }

    // TEMP - Until Endpoint is up.
    this.store.set('token')('DUMMY_TOKEN');
  }
}
