import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Meu formulário</h1>
      <form>
        <fieldset>
          Nome:
          <input name='nome' maxLength='40' style={{textTransform:'uppercase'}} required></input>
          Email:
          <input name='email' type='email' maxLength='50' required></input>
          CPF:
          <input name='cpf' type='number' maxLength='11'required></input>
          Endereço:
          <input name='endereco' maxLength='200'required></input>
          Cidade:
          <input name='cidade' maxLength='28'></input>
          Estado:
          <select></select>
          Tipo:
          <input name='tipo'type='radio'></input>
        </fieldset>
      </form>
      </div>
    )
  }
}

export default Form