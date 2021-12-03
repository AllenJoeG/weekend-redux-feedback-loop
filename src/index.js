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
      case 'HAVING_FEELINGS':
          return action.payload;
        case 'UNDER_STANDING':
          return [...state, action.payload];
        case 'SUPPORT_WARD':
          return [...state, action.payload];
        case 'COMMENTS_DONE':
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
