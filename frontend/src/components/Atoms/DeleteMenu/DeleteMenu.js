import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import { Typography } from '@mui/joy';
import PropTypes from 'prop-types';

const DeleteMenu = ({ handleDelete, id }) => {
  return (
    <Dropdown>
      <MenuButton slots={{ root: IconButton }} slotProps={{ root: { variant: 'plain', color: 'neutral' } }} size='sm'>
        <img src='../images/Icon.png' alt='menuIcon' />
      </MenuButton>
      <Menu placement='bottom-end' size='sm' sx={{ border: 'none', fontSize: '14px' }} onClick={() => handleDelete(id)}>
        <MenuItem className='MenuItem'>
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <img src='../images/deleteIcon.png' alt='deleteIcon' />
          </ListItemDecorator>
          <Typography level='body-sm'>Delete</Typography>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
export default DeleteMenu;
DeleteMenu.propTypes = {
  handleDelete: PropTypes.func,
  id: PropTypes.string
};
