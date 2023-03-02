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
    }), () => {
      console.log(this.getBtnColor(this.state.numeroDeCliquesPrimeiroBtn));
    })
  }
  
  handleClick2() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesSegundoBtn: estadoAnterior.numeroDeCliquesSegundoBtn + 1
    }), () => {
      console.log(this.getBtnColor(this.state.numeroDeCliquesSegundoBtn));
    });
  }
  
  handleClick3() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesTerceiroBtn: estadoAnterior.numeroDeCliquesTerceiroBtn + 1
    }), () => {
      console.log(this.getBtnColor(this.state.numeroDeCliquesTerceiroBtn));
    })
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliquesPrimeiroBtn, numeroDeCliquesSegundoBtn, numeroDeCliquesTerceiroBtn } = this.state;
    return (
      <>
        <button 
          onClick={this.handleClick}
          style={ { backgroundColor: this.getBtnColor(numeroDeCliquesPrimeiroBtn) } }
        >
          { numeroDeCliquesPrimeiroBtn }
        </button>
        <button
          onClick={this.handleClick2}
          style={ { backgroundColor: this.getBtnColor(numeroDeCliquesSegundoBtn) } }  
        >
          { numeroDeCliquesSegundoBtn }
        </button>
        <button
          onClick={this.handleClick3}
          style={ { backgroundColor: this.getBtnColor(numeroDeCliquesTerceiroBtn) } }  
        >
          { numeroDeCliquesTerceiroBtn }
        </button>
      </>
    );
  }
}

export default App;
