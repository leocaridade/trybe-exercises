import './App.css';

const handleClick = () => {
  console.log('Clicou');
}

const handleClick2 = () => {
  console.log('Clicou em outro botao');
}

const handleClick3 = () => {
  console.log('Clicou de novo');
}

function App() {
  return (
    <>
      <button onClick={handleClick}>Botao</button>
      <button onClick={handleClick2}>Botao</button>
      <button onClick={handleClick3}>Botao</button>
    </>
  );
}

export default App;
