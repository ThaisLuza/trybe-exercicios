import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      escrevaAqui: '',
      number: 0,
      email: '',
      simNao: false,
      sabores: 'coco',
      arquivo: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <select
            name='sabores'
            value={this.state.sabores}
            onChange={this.handleChange}
          >
            {' '}
            <option value='laranja'>Laranja</option>
            <option value='limao'>Limão</option>
            <option value='coco'>Coco</option>
            <option value='manga'>Manga</option>
          </select>
          <fieldset>
            <input
              name='simNao'
              type='checkbox'
              value={this.state.simNao}
              onChange={this.handleChange}
            ></input>
            <input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <input
              name='number'
              type='number'
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </fieldset>
          <label>
            Escreva sobre voce
            <textarea
              name='escrevaAqui'
              value={this.state.escrevaAqui}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <input
            name='arquivo'
            type='file'
            value={this.state.arquivo}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
