import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import SearchItem from '../SearchItem/SearchItem';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

import './App.css';
class App extends Component {

  render() {
    return (
      <>
      <Router>
        <div>
        <h3>Enter a Gif Keyword to Search!</h3>
        </div>
        <Route exact path="/" component={SearchForm}/>
        <Route path="/favorites" component={FavoritesPage}/>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
