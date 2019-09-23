import React from 'react';
import { StoreService, StoreProp } from '@services/store.service';

export const WithStore = ({ withStore } = StoreService): ComponentDecorator<StoreProp> => {
  return WrappedComponent =>
    class extends React.Component {
      render() {
        const Container = withStore(WrappedComponent);
        return <Container {...this.props} />;
      }
    };
};
