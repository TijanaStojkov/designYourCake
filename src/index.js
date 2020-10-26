import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import cakeReducer from './store/reducers/cakeReducer';

const rootReducer = combineReducers({
  cakeReducer: cakeReducer
})
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispaching', action) 
      const result = next(action);
      console.log('[Middleware] next state', store.getState()) 
      return result
    }
  }
}
const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
