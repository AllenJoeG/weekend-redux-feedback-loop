import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = [], action) => {
  switch(action.type) {
      case 'FIRST_BIT':
          return action.payload;
        case 'SECOND_BIT':
          return [...state, action.payload];
        case 'THIRD_BIT':
          return [...state, action.payload];
        case 'LAST_BIT':
          return [...state, action.payload];
      default:
          return state;

  }
}

const storeInstance = createStore(
  combineReducers({
      feedbackReducer,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
