import React, { Component } from 'react';
import Header from './components/header/header';
import Game from './components/game/game';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
