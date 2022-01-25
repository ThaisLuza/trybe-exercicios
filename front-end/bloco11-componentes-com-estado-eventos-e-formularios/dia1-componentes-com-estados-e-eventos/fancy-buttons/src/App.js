import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      clicks1:0,
      clicks2:0,
      clicks3:0,
    }
  }
  handleClick1() {
    this.setState((estadoAnterior, _props)=>({
      clicks1: estadoAnterior.clicks1 +1,
    }),()=>{
      console.log(`Botão 1 ${this.trocarCor(this.state.clicks1)}`);
    })
  }

  handleClick2() {
    this.setState((estadoAnterior, _props)=>({
      clicks2: estadoAnterior.clicks2 +1
    }),()=>{
      console.log(`Botão 2 ${this.trocarCor(this.state.clicks2)}`);
    })
  }

  handleClick3() {
    this.setState((estadoAnterior, _props)=>({
      clicks3: estadoAnterior.clicks3 +1
    }),()=>{
      console.log(`Botão 3 ${this.trocarCor(this.state.clicks3)}`);
    })
  }

  trocarCor(num){
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const {clicks1, clicks2, clicks3} = this.state;
    return (
      <div>
        <button 
        onClick={this.handleClick1}
        style = {{ backgroundColor: this.trocarCor(clicks1)}}
        > Você clicou {clicks1} vezes no botão 1</button>
        <button 
        onClick={this.handleClick2}
        style = {{ backgroundColor: this.trocarCor(clicks2)}}
        >Você clicou {clicks2} vezes no botão 2</button>
        <button
        onClick={this.handleClick3}
        style = {{ backgroundColor: this.trocarCor(clicks3)}}
        >Você clicou {clicks3} vezes no botão 3</button>
      </div>
    )
  }
}

export default App;
