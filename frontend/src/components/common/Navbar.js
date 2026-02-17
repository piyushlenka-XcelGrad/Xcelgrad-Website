
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useScroll, useSpring } from 'framer-motion';


import xcelgrad_logo from "../../assets/images/xcelgrad_logo2.png";


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Hiring', path: '/hiring' },
  { label: 'Training', path: '/training' },
  { label: 'Fresher Induction', path: '/fresher' },
  { label: 'Sales Consulting', path: '/salesconsulting' },
  { label: 'Job Seekers', path: '/jobs' },
  { label: 'Skill Seekers', path: '/skillseekers' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')); 

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer Content
  const drawerContent = (
    <Box sx={{ height: '100%', bgcolor: '#fff', p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        {/* Mobile Drawer Logo - Added background for visibility */}
        {xcelgrad_logo ? (
           <Box sx={{ bgcolor: '#0A1D20', p: 1, borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
             <img 
                src={xcelgrad_logo} 
                alt="XcelGrad" 
                loading="lazy"
                decoding="async"
                style={{ height: '30px', objectFit: 'contain' }} 
             />
           </Box>
        ) : (
           <span className="text-xl font-bold text-gray-900">Xcel<span className="text-[#5B47F5]">Grad</span></span>
        )}
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              onClick={handleDrawerToggle}
              selected={isActive(item.path)}
              sx={{
                borderRadius: '8px',
                '&.Mui-selected': {
                  bgcolor: 'rgba(91, 71, 245, 0.08)',
                  color: '#5B47F5',
                  fontWeight: 'bold'
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: isActive(item.path) ? 600 : 500 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Box mt={2}>
           <Button
            component={Link}
            to="/contact"
            fullWidth
            variant="contained"
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: '#5B47F5',
              py: 1.5,
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Contact Us
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={isScrolled ? 4 : 0}
        sx={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.5)' : '1px solid transparent',
          transition: 'all 0.3s ease-in-out',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: isScrolled ? '70px' : '90px', transition: 'height 0.3s ease' }}>
            
            {/* Logo Area */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
               {/* Added fallback text in case image breaks, remove if not needed */}
               {xcelgrad_logo ? (
                 <Box 
                   sx={{ 
                     bgcolor: '#0A1D20', 
                     p: '8px', 
                     borderRadius: '8px', 
                     display: 'flex', 
                     alignItems: 'center',
                     transition: 'all 0.3s ease',
                     // Optional: Add shadow to make it pop
                     boxShadow: '0 2px 8px rgba(91, 71, 245, 0.25)'
                   }}
                 >
                   <img 
                      src={xcelgrad_logo} 
                      alt="XcelGrad Logo"
                      loading="lazy"
                      decoding="async"
                      style={{ 
                        height: isScrolled ? '35px' : '40px', 
                        transition: 'height 0.3s ease',
                        objectFit: 'contain' 
                      }} 
                   />
                 </Box>
               ) : (
                 <span className="text-2xl font-bold text-gray-900">Xcel<span className="text-[#5B47F5]">Grad</span></span>
               )}
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 1,
                  ml: 4
                }}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  
                  return (
                    <Box 
                      key={item.path}
                      component={Link}
                      to={item.path}
                      onMouseEnter={() => setHoveredPath(item.path)}
                      sx={{
                        position: 'relative',
                        px: 2,
                        py: 1,
                        textDecoration: 'none',
                        color: active ? '#5B47F5' : '#4B5563',
                        fontSize: '15px',
                        fontWeight: 500,
                        zIndex: 1,
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: '#111827',
                        }
                      }}
                    >
                      {/* The Magic "Sliding Pill" Animation */}
                      {hoveredPath === item.path && (
                        <Box
                          component={motion.div}
                          layoutId="navbar-hover-pill"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(91, 71, 245, 0.08)',
                            borderRadius: '12px',
                            zIndex: -1,
                          }}
                        />
                      )}
                      
                      {/* Active Indicator Dot */}
                      {active && (
                        <Box
                          component={motion.span}
                          layoutId="navbar-active-dot"
                          sx={{
                            position: 'absolute',
                            bottom: '6px',
                            left: '50%',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: '#5B47F5',
                            transform: 'translateX(-50%)'
                          }}
                        />
                      )}
                      
                      {item.label}
                    </Box>
                  );
                })}
              </Box>
            )}

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
              
              {/* Desktop CTA */}
              {!isMobile && (
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{
                    backgroundColor: '#5B47F5',
                    color: 'white',
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.2,
                    borderRadius: '50px', // Modern Pill Shape
                    fontSize: '15px',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px 0 rgba(91, 71, 245, 0.39)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#4A38D4',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(91, 71, 245, 0.23)',
                    },
                  }}
                >
                  Contact Us
                </Button>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton 
                  onClick={handleDrawerToggle}
                  sx={{ color: '#111827' }}
                >
                  <MenuIcon fontSize="medium" />
                </IconButton>
              )}
            </Box>

          </Toolbar>
        </Container>

        {/* Scroll Progress Bar */}
        <Box 
          component={motion.div}
          style={{ scaleX }}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            bgcolor: '#5B47F5',
            transformOrigin: '0%',
            zIndex: 1100
          }}
        />
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          sx: { width: 280, borderRadius: '20px 0 0 20px' }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;