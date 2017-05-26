export const FETCH_MAP ='FETCH_MAP';
import { locations } from '../data/locationinfo';
//import { driversLocation } from '../data/sample_drivers_location';

export const FETCH_LOCATION_INFO = 'FETCH_LOCATION_INFO';
export const SET_SELECT_ID = 'SET_SELECT_ID';
export const FETCH_DRIVER_INFO = 'SET_DRIVER_ID';

export function fetchMap() {
  return{
    type: FETCH_MAP
  };
}
export function setSelectId(id){
    return {
        type: SET_SELECT_ID,
        payload: id
    };
}
export function fetchLocationInfo(id){
  console.log("555"+locations)
    return {
        type: FETCH_LOCATION_INFO,
        payload: locations[id],
    };
}
//
// export function fetchDriverInfo(){
//   //console.log("555"+locations)
//     return {
//         type: FETCH_DRIVER_INFO,
//         payload: driversLocation,
//     };
// }
