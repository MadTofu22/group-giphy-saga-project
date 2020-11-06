import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {

    render() {
      return (
        <div>
          <select name="Categories" id="favorites"></select>
            <option value="funny">Funny</option>
            <option value="cohort">Cohort</option>
            <option value="cartoon">Cartoon</option>
            <option value="nsfw">Ns</option>
            <option value="funny">Funny</option>
         
        </div>
      );
    }
    
  }

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(FavoritesPage);