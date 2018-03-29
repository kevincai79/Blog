import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts">
            Show All Posts
          </Link>
        </div>
        <div>
          <form>
            <Field name="title" component={this.renderTitleField} />
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
