import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import SearchItem from '../SearchItem/SearchItem';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h3>Enter a Gif Keyword to Search!</h3>
        <SearchForm/>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
