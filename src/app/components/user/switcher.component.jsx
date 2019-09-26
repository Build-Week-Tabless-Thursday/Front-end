/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { signout } from '../../state/auth/auth.actions';
import { useDispatch, useStore } from 'react-redux';

const UserSwitcher = () => {
  const [user, setUser] = React.useState();
  const dispatch = useDispatch();
  const store = useStore();

  React.useEffect(() => {
    console.log('user', user);
    setUser(store.getState().user.details);
  }, [store.getState()]);

  console.log('set user', user);

  return (
    <section>
      <h1> HELLO I'M SWITCHER COMPONENT</h1>
      {user && user.username}
    </section>
  );
};

export { UserSwitcher };
