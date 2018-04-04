import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { fetchPosts, fetchWeather, fetchLocation } from '../actions';

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Show Local Weather' };
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLocation();
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
    const { lat, lon } = this.props.location;
    this.props.fetchWeather(lat, lon);
  }

  render() {
    return (
      <div>
        <button className="weather-btn" onClick={this.handleClick.bind(this)}>
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
