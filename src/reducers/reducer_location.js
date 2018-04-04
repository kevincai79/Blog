import { FETCH_LOCATION } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        lat: action.payload.data.latitude,
        lon: action.payload.data.longitude
      };

    default:
      return state;
  }
}
