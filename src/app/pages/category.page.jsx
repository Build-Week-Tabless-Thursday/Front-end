import React from 'react';

class CategoryPage extends React.Component {
  get category() {
    const { match, store } = this.props;
    const { name } = match.params;
    const { tabs } = store.getState();
    const result = tabs.filter(tab => tab.category === name);
    if (!result) throw new Error('Error - Invalid Category');
    return result;
  }

  render() {
    try {
      const category = this.category;
      return !category ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>CATEGORY PAGE</h1>
          {/* {category().map(tab => {
            <h1>Hello Tab - {tab.id}</h1>;
          })} */}
        </div>
      );
    } catch (err) {
      return <div>{err.toString()}</div>;
    }
  }
}

export { CategoryPage };
