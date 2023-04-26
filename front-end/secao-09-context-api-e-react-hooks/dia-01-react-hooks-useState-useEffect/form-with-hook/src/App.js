import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('Fundamentos');

  return (
    <div>
      <h1>Form with Hook</h1>
      <form>
        <input
          type="text"
          placeholder="nome completo"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="number"
          placeholder="idade"
          value={age}
          onChange={({target}) => setAge(target.value)}
        />
        <input
          type="text"
          placeholder="cidade"
          value={city}
          onChange={({target}) => setCity(target.value)}
        />
        <fieldset>
          <legend>Módulo:</legend>
          <div>
            <input
              type="radio"
              name="module"
              value="Fundamentos"
              id='fundamentos'
              checked={module === 'Fundamentos'}
              onChange={({target}) => setModule(target.value)}
            />
            <label htmlFor="fundamentos">Fundamentos</label>
          </div> 
          <div>
            <input
              type="radio"
              name="module"
              value="Front-end"
              id='front-end'
              checked={module === 'Front-end'}
              onChange={({target}) => setModule(target.value)}
            />
            <label htmlFor="front-end">Front-end</label>   
          </div>
          <div>
            <input
              type="radio"
              name="module"
              value="Back-end"
              id='back-end'
              checked={module === 'Back-end'}
              onChange={({target}) => setModule(target.value)}
            />
            <label htmlFor="back-end">Back-end</label>  
          </div>
          <div>
            <input
              type="radio"
              name="module"
              value="Ciência da computação"
              id='cc'
              checked={module === 'Ciência da computação'}
              onChange={({target}) => setModule(target.value)}
            />
            <label htmlFor="cc">Ciência da computação</label>
          </div>
        </fieldset>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
