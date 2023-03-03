import { Component } from "react";
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const { favoriteColor, handleChange } = this.props;

    return (
      <label>
        Escolha sua cor favorita:
        <select
          name="favoriteColor"
          value={ favoriteColor }
          onChange={ handleChange }
        >
          <option value="Amarelo">Amarelo</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Vermelho">Vermelho</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  favoriteColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default SelectInput;
