import { FETCH_LOCATION_INFO } from '../actions/index';

const INITIAL_STATE = { info: null};

export default function(state = INITIAL_STATE, action ){
    switch(action.type){
    case FETCH_LOCATION_INFO:
        //console.log(action.payload);
        return { ...state, info:action.payload };


    default:
        return state;
    }
}
