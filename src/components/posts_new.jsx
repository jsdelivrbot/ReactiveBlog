import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" {...field.input} className="form-control"/>
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Title is required!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!'
  }

  if (!values.content) {
    errors.content = 'Content is required!'
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);