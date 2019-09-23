import React from 'react';

class SharePage extends React.Component {
  constructor(props) {
    super(props);
    const { store, match } = this.props;
    store.set('uuid')(match.params.uuid);
  }

  render() {
    try {
      const { store } = this.props;
      const { shared } = store.getState();

      if (!shared) return <div>Loading...</div>;
      return shared.map(tab => (
        <div>
          <h1>Hello Tab - {tab.link}</h1>
        </div>
      ));
    } catch (err) {
      return <div>Error - {err}</div>;
    }
  }
}

export { SharePage };
