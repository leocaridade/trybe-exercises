import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form>
          <label>
            Escolha sua cor favorita:
            <select>
              <option>Amarelo</option>
              <option>Azul</option>
              <option>Verde</option>
              <option>Vermelho</option>
            </select>
          </label>
          <label>
            Digite o seu nome:
            <input type="text" onChange={this.handleTextChange}></input>
          </label>
          <label>
            Digite a sua senha:
            <input type="password"></input>
          </label>
          <label>
            Escreva um pouco sobre você:
            <textarea></textarea>
          </label>
        </form>
      </>
    )
  }
}

export default Form;