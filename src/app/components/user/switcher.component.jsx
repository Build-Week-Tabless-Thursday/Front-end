/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const UserSwitcher = () => {
  // const [user, setUser] = React.useState(null);

  const user = JSON.parse(localStorage.getItem('currentUser'));
  console.log('user', user);

  return (
    <section>
      <h1> HELLO I'M SWITCHER COMPONENT</h1>
      {/* {user && user.name} */}
    </section>
  );
};

export { UserSwitcher };

//props.signout
//mapStateToProps and pass in the signout action
