import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

    render() {
      return (
        <>  
            {this.props.reduxState.giphyReducer.favoritesArray.map((gif) => {
                return <div className="searchResults"> <img src={gif.images.original.url}></img></div>
             })}
        </>
      );
    };
  };


const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(FavoriteItem);