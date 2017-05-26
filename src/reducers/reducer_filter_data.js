import { SET_SELECT_ID    } from '../actions/index';
const INITIAL_STATE = { selectId: 0, level: 16, lat: 25.0173405, lng: 121.5375578 }

export default function(state = INITIAL_STATE , action ){
  switch(action.type){
    case SET_SELECT_ID:

      return {...state,  selectId:action.payload};
      case SET_SELECT_ID:

        return {...state,  selectId:action.payload};

      default:

        return state;
    }
}
