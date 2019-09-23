import React from 'react';

const SetTitle = title => {
  return WrappedComponent =>
    class extends React.Component {
      componentDidMount() {
        document.title = title;
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
};

export { SetTitle };
