import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const CustomizedSnackbars = ({ deletedMessage, open,handleClose }) => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity='success' sx={{ width: '100%' }}>
          {deletedMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
CustomizedSnackbars.propTypes = {
  open: PropTypes.bool,
  deletedMessage: PropTypes.string,
  handleClose:PropTypes.func
};
