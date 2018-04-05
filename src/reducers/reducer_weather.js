import { FETCH_WEATHER } from '../actions/index';

export default function(state = 'Show Local Weather', action) {
  switch (action.type) {
    case FETCH_WEATHER:
      let temp = action.payload.data.main.temp;
      let result = `${action.payload.data.name}: ${temp} °F`;
      return result;

    default:
      return state;
  }
}
