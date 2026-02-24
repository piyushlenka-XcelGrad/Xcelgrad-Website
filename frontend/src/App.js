import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hiring from './pages/Hiring/Hiring';
import Training from './pages/Training/Training';
import Home from './pages/Home/Home';
import Job from './pages/Jobs/Job';
import JobDetailsPage from './pages/Jobs/JobDetailsPage';
import AuthPage from './pages/Login_Signup/Auth';
import Profile from './pages/Profile_Page/Profile';
const theme = createTheme({
  palette: {
    primary: {
      main: '#5B47F5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div id="root" className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hiring" element={<Hiring />} />
              <Route path="/training" element={<Training />} />
              <Route path="/jobs" element={<Job />} />
              <Route path="/app/jobs/:id" element={<JobDetailsPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;