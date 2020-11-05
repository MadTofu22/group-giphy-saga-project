import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

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

export default App;
