import React, { useEffect, useState } from 'react';
import './PagesList.scss';
import { format } from 'date-fns';
import { Typography, Box, Link } from '@material-ui/core';
import DeleteMenu from '../../Atoms/DeleteMenu/DeleteMenu';
import TooltipComponent from '../../Atoms/Tooltip/Tooltip';
import CustomizedSnackbars from '../../Atoms/SnackBar/SnackBar';
import EmptyDataComponent from '../../Atoms/EmptyData/EmptyData';
import LoadingDataComponent from '../../Atoms/LoadingData/LoadingData';
import PaginationComponent from '../../Atoms/Pagination/Pagination';
import superagentAPI from '../../../agent/agent';

const PagesList = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 6;
  const [loading, setLoading] = useState(true);
  const [deletedMessage, setDeletedMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, startIndex]);

  const fetchData = async page => {
    superagentAPI.Crawler.getHistory(page, pageSize)
      .then(response => {
        setData(response);
        setTotalItems(response.totalItems);
        setLoading(false);
      })
      .catch(error => {
        error;
      });
  };
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * pageSize);
    setLoading(false);
  };
  const handleDelete = async id => {
    superagentAPI.Crawler.deletePage(id)
      .then(response => {
        response;
        handleOpen();
        setDeletedMessage('Page deleted successfully');
        fetchData(currentPage);
      })
      .catch(error => {
        error;
      });
  };
  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      handleClose();
    }, 30000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleLinkClick = url => {
    window.open(url, '_blank');
  };
  return (
    <>
      <CustomizedSnackbars open={open} deletedMessage={deletedMessage} handleClose={handleClose} />
      <div className='pageList-container'>
        <Typography variant='h2'>Crawled Pages</Typography>
        {loading ? (
          <LoadingDataComponent />
        ) : data.totalItems === 0 ? (
          <Box mt={5}>
            <EmptyDataComponent />
          </Box>
        ) : (
          data &&
          data.data.map((page, index) => (
            <Box key={page._id} display={'flex'} alignItems={'center'}>
              <Box>
                <div className='pageNumber'>{startIndex + index + 1}</div>
              </Box>
              <Box pl={2} pt={2} width={'100%'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <Link
                    underline='none'
                    noWrap
                    href={page.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={() => {
                      handleLinkClick(page.url);
                    }}>
                    {page.url}
                  </Link>
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography variant='subtitle2'>{format(new Date(page.creationDate), 'MMMM d, yyyy')}</Typography>
                    <DeleteMenu handleDelete={handleDelete} id={page._id} />
                  </Box>
                </Box>
                <Typography noWrap variant='h3'>
                  {page.pageTitle}
                </Typography>
                <Box py={1}>
                  <Typography noWrap variant='subtitle1'>
                    {page.description}
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} ml={'-8px'}>
                  <TooltipComponent title={page.h1Headings.length} headings={page.h1Headings} heading={'H1'} />
                  <span className='bulletPoint' />
                  <TooltipComponent title={page.h2Headings.length} headings={page.h2Headings} heading={'H2'} />
                  <span className='bulletPoint' />
                  <TooltipComponent title={page.links.length} headings={page.links} heading={'A'} />
                </Box>
              </Box>
            </Box>
          ))
        )}
      </div>
      <div className='paginationContainer'>
        <PaginationComponent totalItems={totalItems} pageSize={pageSize} currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default PagesList;
