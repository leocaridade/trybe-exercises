import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { thunkCharacter } from './redux/actions';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  state = {
    character: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="App">
        <input
          type='text'
          name='character'
          placeholder='Digite um personagem de Game of Thrones'
          value={ character }
          onChange={ this.handleChange }
        />
        <button
          onClick={ () => dispatch(thunkCharacter(character)) }
        >
          Pesquisar
        </button>
        <CharacterCard />
      </div>
    );
  }  
}

export default connect()(App);
