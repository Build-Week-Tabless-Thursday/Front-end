/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const UserSwitcher = () => {
  const [user, setUser] = React.useState(null);

  return (
    <section>
      <h1> HELLO I'M SWITCHER COMPONENT</h1>
      {user && user.name}
    </section>
  );
};

export { UserSwitcher };
