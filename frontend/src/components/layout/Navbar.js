import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Students', path: '/students' },
    { label: 'Partners', path: '/partners' },
    { label: 'Corporates', path: '/corporates' },
    { label: 'Jobs', path: '/jobs' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className="py-2" disableGutters>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="flex items-center gap-2">
              <div className="bg-[#5B47F5] rounded-xl p-2">
                <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-gray-900">Xcel</span>
                <span className="text-[#5B47F5]">Grad</span>
              </span>
            </div>
          </Link>

          <Box className="flex-grow flex justify-center gap-1 ml-8">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? '#5B47F5' : '#6B7280',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  fontSize: '15px',
                  textTransform: 'none',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#5B47F5',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: '#5B47F5',
              color: 'white',
              textTransform: 'none',
              px: 3,
              py: 1.5,
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(91, 71, 245, 0.3)',
              '&:hover': {
                backgroundColor: '#4A38D4',
                boxShadow: '0 6px 16px rgba(91, 71, 245, 0.4)',
              },
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;