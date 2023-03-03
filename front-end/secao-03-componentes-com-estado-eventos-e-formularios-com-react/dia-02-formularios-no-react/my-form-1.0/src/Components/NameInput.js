import { Component } from "react";
import PropTypes from 'prop-types';

class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    const maxCharacters = 60;

    return (
      <label>
        Digite o seu nome:
        <input
          type="text" 
          name="name"
          value={ name }
          onChange={ handleChange }
        />
        { !name ? 'O nome precisa ser preenchido!' : '' }
        { name.length > maxCharacters ? 'Número máximo de caracteres excedido' : '' }
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default NameInput;
