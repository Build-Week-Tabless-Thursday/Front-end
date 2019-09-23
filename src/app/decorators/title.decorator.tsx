import React from 'react';

export function SetTitle(title: string): ComponentDecorator {
  return WrappedComponent =>
    class extends React.Component {
      componentDidMount() {
        document.title = title;
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
}
