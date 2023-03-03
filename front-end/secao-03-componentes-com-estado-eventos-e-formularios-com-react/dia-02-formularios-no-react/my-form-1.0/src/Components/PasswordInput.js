import { Component } from "react";
import PropTypes from 'prop-types';

class PasswordInput extends Component {
  render() {
    const { password, handleChange } = this.props;

    return (
      <label>
        Digite a sua senha:
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        { !password ? 'A senha precisa ser preenchida' : '' }
      </label>
    )
  }
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default PasswordInput;
