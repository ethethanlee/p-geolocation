import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" style = {{ backgroundColor : '#76ABDF' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h6" component="div">
            p-geolocation
          </Typography>
        </Link>
        <div>
          <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>
            About
          </Link>
          <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
