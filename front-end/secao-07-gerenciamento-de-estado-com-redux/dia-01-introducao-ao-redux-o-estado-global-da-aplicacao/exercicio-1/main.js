const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'
const RANDOM_COLOR = 'RANDOM_COLOR';

const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const randomBtn = document.querySelector('#random');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === (state.colors.length - 1) ? 0 : state.index + 1
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? (state.colors.length - 1) : state.index - 1
      };
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      }
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  const container = document.querySelector('#container');
  const text = document.querySelector('#value');

  container.style.background = colors[index];
  text.innerHTML = colors[index];
})

previousBtn.addEventListener('click', () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});

nextBtn.addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR });
});

randomBtn.addEventListener('click', () => {
  store.dispatch({ type: RANDOM_COLOR });
})

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}