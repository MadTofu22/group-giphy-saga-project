import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// Imports for Redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Imports for Sagas
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';



// Setup the Redux store and link Sagas to it
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(giphySaga);
const storeInstance = createStore(
    combineReducers({
        giphyReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
