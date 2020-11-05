import React, { Component } from 'react';
import './SearchForm.css' 
import { connect } from 'react-redux';

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
    };

    handleSubmit(event){
      this.props.dispatch({
        type: 'FETCH_GIPHY', payload: this.state
      });
    }

    render() {
      return (
        <>  
            <form>
            <input onSubmit={this.handleChange} type="text" placeholder="search for a Gif"></input>
            <button id="submitBtn">Submit Search</button>
            </form>
            <div className="searchResults">
            {/* <img src={this.props.reduxState.giphyReducer.giphyArray.url}></img> */}
            {JSON.stringify(this.props.reduxState.giphyReducer)}
            </div>
            <br></br>
            <br></br>
            <button id="routeBtn">(ROUTE TO FAVORITES)</button>
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  
  export default connect(mapStateToProps)(SearchForm);
  
  