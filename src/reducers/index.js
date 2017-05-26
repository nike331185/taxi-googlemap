import { combineReducers } from 'redux';
import MapReducer from './reducer_location';
import FilterReducer from './reducer_filter_data';
import LocationReducer from './reducer_driver';
import DriverReducer from './reducer_driver_driver';

const rootReducer = combineReducers({
  maps : MapReducer,
  filter : FilterReducer,
  location : LocationReducer,
  driver:DriverReducer

});


export default rootReducer;
