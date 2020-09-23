import React, { Component } from 'react';
import './App.scss';
import Head from './components/Head';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        <Item />
      </main>
    );
  }
}

export default App;
