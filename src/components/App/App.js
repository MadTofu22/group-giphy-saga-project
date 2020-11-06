import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import FavoriteList from '../FavoriteList/FavoriteList';
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
        <Route path="/favorites" component={FavoriteList}/>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
