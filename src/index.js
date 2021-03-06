// Imports for react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

// Imports for Redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Imports for Sagas
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Reducer to store giphy links retrieved by sagas for access in the search and favorites pages
// state = {
//     giphyArray, // Array of gifs from the Giphy API request
//     favoritesArray // Array of gifs from favorites table in the DB
// }
const giphyReducer = (state={giphyArray: [], favoritesArray: []}, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_GIFS':
            return {...state, giphyArray: action.payload.data};
        case 'SET_FAVORITES':
            return {...state, favoritesArray: action.payload};

    }
}

// Create sagas to connect to send async requests to the server for retrieving/posting info to the DB, then pass retrieved info to the redux store
function* giphySaga () {
    // yield takeEvery(_REQUEST-NAME_, _RQUEST-HANDLER_);
    yield takeEvery('FETCH_GIPHY', fetchGiphy);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('FETCH_FAVORTIES', fetchFavorites);
    yield takeEvery('UPDATE_FAVORITES', updateFavorite);
}

//Saga request handlers for fetching gifs from the giphy API
// -------------------------------------------------------------
// Saga request to get gifs from the Giphy API, searching by tag
function* fetchGiphy (action) {
    console.log(action.payload.url);
    const giphyArray = yield axios.get(`/api/giphy/${action.payload.url}`);
    yield put({type: 'SET_GIFS', payload: giphyArray});
}

// Saga request handlers for favorite gifs routes
// ------------------------------------------------------------
// Saga to handle GET request to fetch favorites from the DB
// Will need to add ability to search by category
function* fetchFavorites () {
    const favoritesArray = yield axios.get(`/api/favorite/`);
    yield put({type: 'SET_FAVORITES', payload: favoritesArray});
}

// Saga to handle POST reuqest for adding a new favorite
function* addFavorite (action) {
    yield axios.post(`/api/favorite`, action.payload);
    yield put({type: 'FETCH_FAVORITES'});
}

// Saga to handle PUT request to update a favorite gifs category
function* updateFavorite (action) {
    yield axios.post(`/api/favorite/${action.payload.id}`, action.payload.category);
    yield put({type: 'FETCH_FAVORITES'});
}

// Setup the Redux store and link Sagas to it
const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({
        giphyReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(giphySaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
