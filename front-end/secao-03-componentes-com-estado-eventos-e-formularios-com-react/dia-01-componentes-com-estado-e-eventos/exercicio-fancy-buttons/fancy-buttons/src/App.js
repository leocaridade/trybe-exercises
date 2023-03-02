import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log('Clicou no botao 1: ', this);
  }
  
  handleClick2() {
    console.log('Clicou no botao 2: ', this);
  }
  
  handleClick3() {
    console.log('Clicou no botao 3: ', this);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Botao</button>
        <button onClick={this.handleClick2}>Botao</button>
        <button onClick={this.handleClick3}>Botao</button>
      </>
    );
  }
}

export default App;
