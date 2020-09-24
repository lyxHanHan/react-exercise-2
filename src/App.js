import React, { Component } from 'react';
import './App.scss';
import Head from './components/Head';
import Item from './components/Item';

class App extends Component {
  state = {
    count: 0,
  };

  buy = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  render() {
    return (
      <main className="app">
        <Head count={this.state.count} />
        <Item buy={this.state.buy} />
      </main>
    );
  }
}

export default App;
