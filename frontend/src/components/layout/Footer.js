import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <Container maxWidth="lg" className="py-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-[#5B47F5] rounded-xl p-2">
            <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
          </div>
          <span className="text-2xl font-bold">
            <span className="text-white">Xcel</span>
            <span className="text-[#5B47F5]">Grad</span>
          </span>
        </div>

        <Box className="text-center">
          <Typography variant="body2" className="text-gray-400">
            © {new Date().getFullYear()} XcelGrad. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;