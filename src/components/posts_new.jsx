import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" {...field.input} className="form-control"/>
        <span className="text-help">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
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