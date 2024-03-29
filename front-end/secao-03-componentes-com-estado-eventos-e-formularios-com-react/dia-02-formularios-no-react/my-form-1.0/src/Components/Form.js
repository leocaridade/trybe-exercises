import React from 'react';
import SelectInput from './SelectInput';
import NameInput from './NameInput';
import PasswordInput from './PasswordInput';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: 'Amarelo',
      name: '',
      password: '',
      offers: false,
      about: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const {name} = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { favoriteColor, name, password, offers, about } = this.state;

    return (
      <>
        <form>
          <fieldset>
            <legend>Informações</legend>
              <SelectInput
                favoriteColor={ favoriteColor }
                handleChange={ this.handleChange }
              />
              <NameInput
                name={ name }
                handleChange={ this.handleChange }
              />
              <PasswordInput
                password={ password }
                handleChange={ this.handleChange }
              />
              <label>
                Deseja receber promoções?
                <input
                  type="checkbox"
                  name="offers"
                  value={offers}
                  onChange={this.handleChange}
                >
                </input>
              </label>
          </fieldset>
          <label>
            Escreva um pouco sobre você:
            <textarea
              name="about"
              value={about}
              onChange={this.handleChange}
            >
            </textarea>
          </label>
          <input type="file" />
        </form>
      </>
    )
  }
}

export default Form;