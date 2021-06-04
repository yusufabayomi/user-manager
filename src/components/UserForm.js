import React from 'react';
import { Field, Form } from 'react-final-form';

class UserForm extends React.Component {
  required = (value) => (value ? undefined : 'Required');

  isValidEmail = (value) => (/\S+@\S+\.\S+/.test(value) ? undefined : 'Invalid Email');

  composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  onSubmit = (values) => {
    console.log(values);
    this.props.onSubmit(values);
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name='first_name' validate={this.required}>
              {({ input, meta }) => (
                <div className='mb-3'>
                  <label className='form-label'>First Name</label>
                  <input {...input} type='text' className='form-control' placeholder='firstname' />
                  {meta.error && meta.touched && <div className='fs-6 text-danger'>{meta.error}</div>}
                </div>
              )}
            </Field>

            <Field name='last_name' validate={this.required}>
              {({ input, meta }) => (
                <div className='mb-3'>
                  <label className='form-label'>Last Name</label>
                  <input {...input} type='text' className='form-control' placeholder='lastname' />
                  {meta.error && meta.touched && <div className='fs-6 text-danger'>{meta.error}</div>}
                </div>
              )}
            </Field>

            <Field name='email' validate={this.composeValidators(this.required, this.isValidEmail)}>
              {({ input, meta }) => (
                <div className='mb-3'>
                  <label className='form-label'>Email address</label>
                  <input {...input} type='email' className='form-control' placeholder='name@example.com' />
                  {meta.error && meta.touched && <div className='fs-6 text-danger'>{meta.error}</div>}
                </div>
              )}
            </Field>
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default UserForm;
