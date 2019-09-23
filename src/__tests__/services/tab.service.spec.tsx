import { createStore } from 'undux';

import { TokenService, TokenState } from '@services/token.service';

describe('Services', () => {
  describe('Token', () => {
    it('should return null when no username or password is given', async () => {
      const store = createStore<TokenState>({ token: '' });
      TokenService.inject(store);

      await expect(TokenService.login('', '')).rejects.toThrow('Email and Password are required');
    });

    it('should a token should be set when signing up', async () => {
      const store = createStore<TokenState>({ token: '' });
      TokenService.inject(store);
      await TokenService.signup('test@test.com', 'testing123', 'Tester');

      expect(store.get('token')).not.toBe('');
    });
  });
});
