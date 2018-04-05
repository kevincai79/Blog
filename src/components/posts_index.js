import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { fetchPosts, fetchWeather, fetchLocation } from '../actions';

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { coordinates: { lat: '', lon: '' } };

    this.handleClick = this.handleClick.bind(this);
    this.getLocalWeather = this.getLocalWeather.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.getLocalWeather();
    // this.props.fetchLocation();
  }

  getLocalWeather() {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      this.setState({
        coordinates: { lat, lon }
      });

      this.props.fetchWeather(lat, lon);
    });
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        </Link>
      );
    });
  }

  handleClick(event) {
    this.getLocalWeather();
  }

  render() {
    return (
      <div>
        <button className="weather-btn" onClick={this.handleClick}>
          {this.props.weather}
        </button>

        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a New Post
          </Link>
        </div>
        <h3>Articles</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    location: state.location,
    weather: state.weather
  };
}

export default connect(mapStateToProps, {
  fetchPosts,
  fetchLocation,
  fetchWeather
})(PostsIndex);
