import React, { Component } from 'react';

import SelectBar from '../containers/select_bar';
import PokemonInfo from '../containers/driver_info';

const geolocation = (
    navigator.geolocation || {
        getCurrentPosition: (success, failure) => {
            failure(`Your browser doesn't support geolocation.`);
        }
    }
);


export default class App extends Component {
  constructor(props){
        super(props);
    }

    componentDidMount(){
    }
  render() {
    return (

      <div className="nav-container">APP
      <div>
        <SelectBar  />
      </div>
      </div>
    );
  }
}
