import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

export function WithRouter<P = {}>(): ComponentDecorator<RouteComponentProps<P>> {
  return WrappedComponent =>
    class extends React.Component {
      render() {
        const Container = withRouter(WrappedComponent);
        return <Container {...this.props} />;
      }
    };
}
