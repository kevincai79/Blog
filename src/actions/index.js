import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_LOCATION = 'fetch_location';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sichuan';
const API_KEY_WEATHER = '1bf0d1a9cf3923f5356def8cc562ad66';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}

export function fetchLocation() {
  const request = axios.get('https://ipapi.co/json/');

  console.log(request);

  return {
    type: FETCH_LOCATION,
    payload: request
  };
}

// export function fetchWeather() {
//   const coords = axios.get('https://ipapi.co/json/').then(data => {
//     return { lat: data.data.latitude, lon: data.data.longitude };
//   });
// }
