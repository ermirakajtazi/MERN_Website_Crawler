import React from 'react';
import './TextField.scss';
import { TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './ValidationSchema';
import ButtonComponent from '../../Atoms/Button/Button';
import superagentAPI from '../../../agent/agent';

const TextFieldComponent = () => {
  const handleSubmit = async (values, { resetForm }) => {
    superagentAPI.Crawler.crawl(values.url)
      .then(response => {
        response;
        resetForm();
      })
      .catch(error => {
        error;
      });
  };
  return (
    <Formik initialValues={{ url: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form className='textField-container'>
          <Field
            InputProps={{
              inputProps: {
                placeholder: 'Enter page URL...'
              }
            }}
            as={TextField}
            autoComplete='off'
            name='url'
            fullWidth
            helperText={<ErrorMessage name='url' className='errorMessage' />}
          />
          <ButtonComponent />
        </Form>
      )}
    </Formik>
  );
};

export default TextFieldComponent;
