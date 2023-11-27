import * as React from 'react';
import { Paper, Typography } from '@mui/material';

const styles = {
  emptyDataContainer: {
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px'
  }
};

function EmptyDataComponent() {
  return (
    <Paper>
      <div style={styles.emptyDataContainer}>
        <Typography variant='h6' component='div'>
          No data available
        </Typography>
      </div>
    </Paper>
  );
}

export default EmptyDataComponent;
