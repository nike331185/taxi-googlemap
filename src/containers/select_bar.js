import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var Select = require('react-select');
import Map from './googlemap';
/*const location ={
   ntut:{ lat:25.0422377,
          lng: 121.5333087}
        ,
   station:{ lat:25.0470542,
          lng: 121.5151335}
}
const markers= [
  { location :{
      lat:25.0422377,
      lng: 121.5333087
    }
  }
]*/
import PokemonInfo from './driver_info';

import { fetchLocationInfo ,setSelectId,driverInfo,fetchDriverInfo} from '../actions/index';

class SelectBar extends Component {
    constructor(props) {
      super(props);
      this.state = { id: ''};
      this.onSelectChange = this.onSelectChange.bind(this);
    }
    componentWillMount(){
        const { latitude, lon  } = this.props.filter;  //陣列
        console.log("latitude:"+lon);
    }
    renderLocationList(){
        return Object.keys(this.props.maps).map((key)=>{
            const location = this.props.maps[key]; //物件
            return(
                <option value={key} key={key}  >{location.title} </option>
            );
        });
    }
    onSelectChange(event) {
            var pokemonId = event.target.value;  //取物件 index
            const { latitude, longitude, level } = this.props.filter;

            console.log("pokemonId"+ pokemonId);
            //  this.setState({ id: pokemonId });
              this.props.fetchLocationInfo(pokemonId);
              this.props.setSelectId(pokemonId);  //找圖片
            //  this.props.fetchDriverInfo();
    }

    render() {

      return (

        <div>
          <div style={{width:600,height:80}}>
            <label htmlFor="select1" >輸入到達地點:</label>
            <select value={this.state.id}  onChange={this.onSelectChange} className="form-control">
                {this.renderLocationList()}
            </select>
          </div>
          <div >
              <PokemonInfo />
          </div>
          <div style={{width:600,height:400}}>
              <Map  />
          </div>

        </div>


    )
  }
}

function mapStateToProps(state){
  return{
//    asdf:'123'
    maps:state.maps,filter:state.filter
  };
}
////mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch){
    return bindActionCreators({  fetchLocationInfo ,setSelectId ,fetchDriverInfo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBar);
