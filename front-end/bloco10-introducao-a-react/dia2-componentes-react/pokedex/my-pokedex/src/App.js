import React from 'react';
import Title from './Title';
import './App.css';
import Pokedex from './Pokedex';
import data from './data';


class App extends React.Component {
  render() {
    console.log(data);
    return (
      <main>
        <Title titulo={'Pokedex'} />
        <Pokedex data={data} />
      </main>
    );
  }
}

export default App;
