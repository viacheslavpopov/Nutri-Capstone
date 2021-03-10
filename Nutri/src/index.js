import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import 'firebase/auth';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
