import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Show Local Weather' };
  }

  componentDidMount() {
    this.props.fetchPosts();
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
    event.preventDefault();
    console.log(this);
  }

  render() {
    return (
      <div>
        <button className="weather-btn" onClick={this.handleClick.bind(this)}>
          {this.state.term}
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
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
