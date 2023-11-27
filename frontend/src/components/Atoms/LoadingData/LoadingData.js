import React from 'react';
import { CircularProgress, Paper } from '@mui/material';

const loadingContainerStyle = {
  padding: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px'
};

const LoadingDataComponent = () => (
  <Paper>
    <div style={loadingContainerStyle}>
      <CircularProgress color='primary' thickness={8} />
    </div>
  </Paper>
);

export default LoadingDataComponent;
