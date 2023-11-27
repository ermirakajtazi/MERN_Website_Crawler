import { Button, StylesProvider } from '@material-ui/core';
import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ handleSubmit }) => {
  return (
    <StylesProvider injectFirst>
      <Button
        type='submit'
        variant='contained'
        style={{ maxWidth: '149px', maxHeight: '42px', minWidth: '149px', minHeight: '42px', marginBottom: '10px' }}
        onClick={handleSubmit}>
        Add Page
      </Button>
    </StylesProvider>
  );
};

export default ButtonComponent;
ButtonComponent.propTypes = {
  handleSubmit: PropTypes.func
};
