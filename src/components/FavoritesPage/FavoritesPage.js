import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {

state = {
  category: ''
}

toSearchpage = () => {
    this.props.history.push('/search');
}

handleChange = (event) => {
  this.setState({
    category: event.target.value
  })
}

updateCategory = (category, id) => {
  this.props.dispatch({})
}

    render() {
      return (
        <>
          <div> 
          <select onChange={this.handleChange} name="Categories" id="favorites">
            <option value="funny">Funny</option>
            <option value="cohort">Cohort</option>
            <option value="cartoon">Cartoon</option>
            <option value="nsfw">Nsfw</option>
            <option value="meme">Meme</option>
            </select>
            <button onClick={this.updateCategory}>Update Category</button> 
          </div>
          <button onClick={this.toSearchPage} id="routeBtn2">(ROUTE TO SEARCH)</button>
        </>
        //   {this.props.reduxState.giphyReducer.giphyArray.map((gif) => {
        //     return <div className="searchResults"> <img src={gif.images.original.url}></img> 
        //     <button onClick={() => this.addFavorite(gif.images.original.url)}>Favorite</button> </div>
        //  })}
      );
    }
    
  }

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(FavoritesPage);