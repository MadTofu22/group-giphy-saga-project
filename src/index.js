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

// Reducer to store giphy links retrieved by sagas for access in the search and favorites pages
const giphyReducer = (state={}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Create sagas to connect to send async requests to the server for retrieving/posting info to the DB, then pass retrieved info to the redux store
function* giphySaga () {
    // yield takeEvery(_REQUEST-NAME_, _RQUEST-HANDLER_);
}

//Saga request handlers for fetching gifs from the giphy API

// Saga request handlers for favorite gifs routes
// ------------------------------------------------------------
// Saga to handle GET request to fetch favorites from the DB
// Will need to add ability to search by category
function* fetchFavorites () {

}

// Saga to handle POST reuqest for adding a new favorite
function* addFavorite () {

}

// Saga to handle PUT request to update a favorite gifs category
function* updateFavorite () {

}

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
