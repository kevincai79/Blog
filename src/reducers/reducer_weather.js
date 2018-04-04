import { FETCH_WEATHER } from '../actions/index';

export default function(state = 'Show Local Weather', action) {
  switch (action.type) {
    case FETCH_WEATHER:
      let temp = (action.payload.data.main.temp * (9 / 5) - 459.67).toFixed(0);
      let result = `${action.payload.data.name}: ${temp}F`;
      return result;

    default:
      return state;
  }
}
