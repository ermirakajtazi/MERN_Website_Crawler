import React from 'react';
import './Header.scss';
import { Typography, Box } from '@material-ui/core';

const Header = () => {
  return (
    <div className='headerContainer'>
      <Box pt={3} pb={1}>
        <img src='../Entail_Logo.png' alt='Logo' />
      </Box>
      <Typography variant='h1' component='h1'>
        Page Crawler
      </Typography>
      <Box pt={2}>
        <Typography variant='subtitle1'>Crawl pages to see their HTML elements (headings, paragraphs, meta tags, links, etc.)</Typography>
      </Box>
    </div>
  );
};

export default Header;
