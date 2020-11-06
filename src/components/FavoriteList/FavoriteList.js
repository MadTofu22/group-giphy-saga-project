import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

class FavoriteList extends Component {

  componentDidMount () {
    this.getFavorites();
  }

  getFavorites = () => {
    console.log('getting favorites')
    this.props.dispatch({type: 'FETCH_FAVORITES'})
  }
    render() {
      return (
        <>  
          <h2>Favorited Gifs</h2> 
          {JSON.stringify(this.props.reduxState)}
            {this.props.reduxState.giphyReducer.favoritesArray.map((gif) => {
              console.log('current gif', gif)
                return <FavoritesItem key={gif.id} gif={gif} />
             })}
        </>
      );
    };
  };


const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(FavoriteList);