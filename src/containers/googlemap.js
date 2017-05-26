import canUseDOM from "can-use-dom";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Circle, InfoWindow,  DirectionsRenderer , Marker} from "react-google-maps";
const icon = `/images/car/8.png`
const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    }
  })
);
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  > {props.markers.map((marker, index) => (
      <Marker
        height={1000} width={2000}
        icon={icon}
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >

      </Marker>
    ))}
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

   /*
    * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
    */
   class Map extends Component {

     state = {
       origin: null,
       destination: null,
       directions: null,
       markers: [
         {
           position: {lat:-27.363882, lng:137.044922}
         }]

     };


     componentDidUpdate() {
       const { LocationInfo } = this.props;
       if (!LocationInfo || LocationInfo.name === 'ALL') {
           return <div>Please Select ...</div>;
       }
       geolocation.getCurrentPosition((position) => {
         const DirectionsService = new google.maps.DirectionsService();

         DirectionsService.route({
           origin: { lat: position.coords.latitude, lng: position.coords.longitude },
           destination: { lat:this.props.LocationInfo.lat, lng:this.props.LocationInfo.lng},

           travelMode: google.maps.TravelMode.DRIVING,
         }, (result, status) => {
           if (status === google.maps.DirectionsStatus.OK) {
             console.log(result);
             this.setState({
               directions: result,
             });
           } else {
             console.error(`${result}`);

           }
         });
       });
     }
     renderList(){
         return Object.keys(this.props.driver).map((key)=>{


             const location = this.props.driver[key]; //物件
             return{

                 position:{lat:location.latitude, lng:location.longitude}
             };
         });
     }


     render() {
       if (!this.props.LocationInfo) {
   			return <div>Please Select ...</div>;
   		}
       return (
         <SimpleMapExampleGoogleMap
           containerElement={
             <div style={{ height: `100%` }} />
           }
           mapElement={
             <div style={{ height: `100%` }} />
           }
           center={this.state.origin}
           directions={this.state.directions}
           markers={this.renderList()}
         />
       );
     }
   }
   function mapStateToProps(state){
       console.log(state);
       return { LocationInfo: state.location.info, filter: state.filter,driver:state.driver};
   }

   export default connect(mapStateToProps)(Map);
