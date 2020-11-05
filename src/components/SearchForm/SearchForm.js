import React, { Component } from 'react';
import './SearchForm.css' 

class SearchForm extends Component {

    state = {
        url: ''
    };

    componentDidMount = () => {

    };

    handleChange(event){
      this.setState({
        url: event.target.value
      });
      this.props.dispatch({
        type: 'FETCH_GIPHY', payload: this.state
      });
    };

    render() {
      return (
        <>  
            <form>
            <input onSubmit={this.handleChange} type="text" placeholder="search for a Gif"></input>
            <button id="submitBtn">Submit Search</button>
            </form>
            <div className="searchResults">
            {/* {this.props.reduxState.giphyReducer.giphyArray.map} */}
            </div>
            <br></br>
            <br></br>
            <button id="routeBtn">(ROUTE TO FAVORITES)</button>
        </>
      );
    };
  };

  export default SearchForm;
  