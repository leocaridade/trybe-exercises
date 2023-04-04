const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      }
      case 'THEME':
        return {
          ...state,
          theme: state.theme === 'dark' ? 'light' : 'dark'
        }
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { status, theme } = store.getState();
  const body = document.querySelector('body');
  const spanEl = document.querySelector('#status');

  if (theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    spanEl.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    spanEl.innerText = 'Offline';
  }
})

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'THEME' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'STATUS' });
});