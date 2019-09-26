import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkToken, login, signup } from '../state/actions';
import { UserForm } from '../components/user/form.component';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary['background'],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

@connect(
  state => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  { checkToken, login, signup }
)
@withRouter
@withStyles(styles)
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { action: props.login, button: 'LOGIN', email: false, linkLabel: 'CREATE AN ACCOUNT' };
  }

  componentDidMount() {
    this.componentDidUpdate();
    this.props.checkToken();
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  handleLink = () => {
    const { login, signup } = this.props;
    const { action } = this.state;
    const isLogin = action === login;

    this.setState({
      action: isLogin ? signup : login,
      button: isLogin ? 'CREATE ACCOUNT' : 'LOGIN',
      email: isLogin,
      linkLabel: isLogin ? 'ALREADY HAVE AN ACCOUNT?' : 'CREATE AN ACCOUNT',
    });
  };

  handleSubmit = user => {
    this.state.action(user);
  };

  render() {
    const { classes } = this.props;
    const { button, email, linkLabel } = this.state;

    return (
      <div className={classes.root}>
        <UserForm
          button={button}
          email={email}
          link
          linkLabel={linkLabel}
          onLink={this.handleLink}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export { LoginPage };
