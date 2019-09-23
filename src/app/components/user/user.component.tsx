/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { StoreService } from '@services/store.service';
import { TokenService } from '@services/token.service';

export const UserView = () => {
  const store = StoreService.useStore();

  React.useEffect(() => {
    TokenService.login('test@email.com', 'testing123');
  }, []);

  const { user } = store.getState();
  return <section>{user && user.name}</section>;
};
