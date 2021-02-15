import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
const saga=createSagaMiddleware()
const store=createStore(rootReducer,compose(applyMiddleware(thunk,forbiddenWordsMiddleware)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(sagaWatcher)
const app=(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
