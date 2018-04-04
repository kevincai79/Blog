import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import LocationReducer from './reducer_location';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  location: LocationReducer
});

export default rootReducer;
