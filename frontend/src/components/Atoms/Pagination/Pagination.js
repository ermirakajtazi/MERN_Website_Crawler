import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
const PaginationComponent = ({ totalItems, pageSize, currentPage, handlePageChange }) => {
  const activePageStyle = {
    backgroundColor: '#2D6FF6',
    color: 'white',
    borderRadius: '8px',
    fontSize: '13px',
    fontFamily: 'Lato',
    fontWeight: '600px',
    lineHeight: '15.6px'
  };
  const inactivePageStyle = {
    borderColor: '#CCCFD6',
    color: '#667085',
    borderRadius: '8px',
    fontSize: '13px',
    fontFamily: 'Lato',
    fontWeight: '600px',
    lineHeight: '15.6px'
  };
  const nextPrevPageStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    color: '#667085'
  };
  return (
    <Pagination
      variant='outlined'
      shape='rounded'
      color='primary'
      count={Math.ceil(totalItems / pageSize)}
      page={currentPage}
      onChange={handlePageChange}
      sx={{
        '& .MuiPaginationItem-page.Mui-selected': activePageStyle,
        '& .MuiPaginationItem-page:not(.Mui-selected)': inactivePageStyle,
        '& .MuiPaginationItem-previousNext': nextPrevPageStyle
      }}
    />
  );
};

export default PaginationComponent;
PaginationComponent.propTypes = {
  handlePageChange: PropTypes.func,
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number
};
