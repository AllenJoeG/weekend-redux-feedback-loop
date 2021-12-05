import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) => {
  switch(action.type) {
      case 'HAVING_FEELINGS':
          return {...state, feeling: action.payload};
        case 'UNDER_STANDING':
          return {...state, understanding: action.payload};
        case 'SUPPORT_WARD_PLZ':
          return {...state, support: action.payload};
        case 'COMMENTS_DONE':
          return {...state, comments: action.payload};
        case 'RESET_FEEDBACK':
          return {feeling: 0, understanding: 0, support: 0, comments: ''};
      default:
          return state;

  }
}

const dbReducer = (state = [], action) => {
  //feed this Reducer with DB by way of GET
  return state;
};

const storeInstance = createStore(
  combineReducers({
      feedbackReducer,
      dbReducer
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
