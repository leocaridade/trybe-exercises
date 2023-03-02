import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      numeroDeCliquesPrimeiroBtn: 0,
      numeroDeCliquesSegundoBtn: 0,
      numeroDeCliquesTerceiroBtn: 0,
    }
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesPrimeiroBtn: estadoAnterior.numeroDeCliquesPrimeiroBtn + 1
    }))
  }
  
  handleClick2() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesSegundoBtn: estadoAnterior.numeroDeCliquesSegundoBtn + 1
    }))
  }
  
  handleClick3() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesTerceiroBtn: estadoAnterior.numeroDeCliquesTerceiroBtn + 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{ this.state.numeroDeCliquesPrimeiroBtn }</button>
        <button onClick={this.handleClick2}>{ this.state.numeroDeCliquesSegundoBtn }</button>
        <button onClick={this.handleClick3}>{ this.state.numeroDeCliquesTerceiroBtn }</button>
      </>
    );
  }
}

export default App;
