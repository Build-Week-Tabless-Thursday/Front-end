/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const UserSwitcher = () => {
  const [user, setUser] = React.useState(null);

  return <section>{user && user.name}</section>;
};

export { UserSwitcher };
