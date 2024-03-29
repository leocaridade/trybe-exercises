import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import characterReducer from './reducers';

const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;