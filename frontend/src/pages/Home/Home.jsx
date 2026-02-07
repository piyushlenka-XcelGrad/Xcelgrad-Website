import React from 'react';
import { Typography, Button, Container, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import Advantages from "./Advantages"
import Founders from './Founders';
import Mission from "./Misson";
import Vision from './Vision';
import Testimonials from './Testimonials';
import Title from '../../components/common/Title';


const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden  bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <Container maxWidth="lg" className="pt-24 lg:mt-14 pb-32 relative z-10">
        <div className="text-center">
          <Chip
            label="Creating Day 1 Performers"
            sx={{
              backgroundColor: '#EDE9FE',
              color: '#5B47F5',
              fontSize: '14px',
              fontWeight: 500,
              px: 2,
              py: 2.5,
              height: 'auto',
              borderRadius: '50px',
              mb: 4,
            }}
          />

          <Typography
            variant="h1"
            className="font-bold mb-6"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
              lineHeight: 1.1,
              color: '#1A1A1A',
            }}
          >
            Who{' '}
            <span style={{ color: '#5B47F5' }}>We Are</span>
          </Typography>
          {/* <div className="p text-4xl">
             <Title  text1="Who" text2 ="We Are" />
             </div> */}

          <Typography
            variant="h5"
            className="mb-12 max-w-3xl mx-auto"
            sx={{
              color: '#6B7280',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            We believe in bridging the gap between education and employment with outcomes that matter.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              component={Link}
              to="/students"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#5B47F5',
                color: 'white',
                textTransform: 'none',
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                borderRadius: '50px',
                fontWeight: 600,
                boxShadow: '0 8px 24px rgba(91, 71, 245, 0.3)',
                '&:hover': {
                  backgroundColor: '#4A38D4',
                  boxShadow: '0 12px 32px rgba(91, 71, 245, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                color: '#1A1A1A',
                borderColor: '#1A1A1A',
                borderWidth: 2,
                textTransform: 'none',
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                borderRadius: '50px',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#5B47F5',
                  color: '#5B47F5',
                  borderWidth: 2,
                  backgroundColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>

      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{ animation: 'blob 7s infinite' }}
      />
      <div 
        className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{ animation: 'blob 7s infinite 2s' }}
      />
      <div 
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{ animation: 'blob 7s infinite 4s' }}
      />

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
      <Advantages />
      <Founders/>
      <Mission/>
      <Vision/>
      <Testimonials/>
    </div>
  );
};

export default Home;