import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

const TooltipComponent = ({ title, headings, heading }) => {
  return (
    <Tooltip
      title={
        <>
          <Box
            component='div'
            p={1}
            pr={6}
            style={{
              backgroundColor: '#E3E5E9',
              fontFamily: 'Lato',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '17.08px',
              color: 'black'
            }}>
            HTML elements on this page
          </Box>
          <Box component='div' pl={2} style={{ backgroundColor: 'white' }} width={'100%'}>
            <Box
              component='div'
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontFamily: 'Lato',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '17px'
              }}
              py={1}>
              {title}
              <Box component='span' style={{ fontSize: '10px', paddingLeft: '3px', paddingRight: '3px', textAlign: 'center' }}>
                x
              </Box>
              {heading}
            </Box>
            <Divider light />
            <Box
              component='div'
              py={1}
              style={{
                backgroundColor: 'white',
                fontFamily: 'Lato',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '16.8px',
                color: '#667085',
                maxHeight: '150px',
                overflow: 'auto'
              }}>
              {headings.map(h => (
                <Box pt={1} key={h}>
                  {heading === 'H1' ? h.h1 : heading === 'H2' ? h.h2 : heading === 'A' ? h.a : null}
                </Box>
              ))}
            </Box>
          </Box>
        </>
      }
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            width: '100%',
            bgcolor: 'white',
            '& .MuiTooltip-arrow': {
              color: '#E3E5E9'
            },
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
            borderRadius: '5px'
            // border: '0.5px solid #E3E5E9'
          }
        }
      }}>
      <Button variant='text'>
        <div className='headingsText'>
          {title}
          <span className='multipleIcon'>x</span>
          {heading}
        </div>
      </Button>
    </Tooltip>
  );
};
export default TooltipComponent;
TooltipComponent.propTypes = {
  title: PropTypes.number,
  headings: PropTypes.array,
  heading: PropTypes.string
};
