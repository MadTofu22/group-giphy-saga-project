import React, { Component } from 'react';
import './SearchForm.css' 
import { connect } from 'react-redux';

class SearchForm extends Component {

    state = {
        url: ''
    };

    componentDidMount = () => {

    };

    toFavesPage = () => {
      this.props.history.push('/favorites');
  }

    handleChange = (event) => {
      this.setState({
        url: event.target.value
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      console.log('submit clicked');
      this.props.dispatch({
        type: 'FETCH_GIPHY', payload: this.state
      });
    }

    render() {
      return (
        <>  
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" placeholder="search for a Gif"></input>
            <button id="submitBtn">Submit Search</button>
            </form>
            
             {this.props.reduxState.giphyReducer.giphyArray.map((gif) => {
                return <div className="searchResults"> <img src={gif.images.original.url}></img> <button>Favorite</button> </div>
             })}
            
            <br></br>
            <br></br>
            <button onClick={this.toFavesPage} id="routeBtn">(ROUTE TO FAVORITES)</button>
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  
  export default connect(mapStateToProps)(SearchForm);
  
  