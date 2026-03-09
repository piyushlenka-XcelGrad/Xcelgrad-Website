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
import Skilling from './pages/Skilling/Skilling';
import About from "./pages/About/About"
import Freshers from "./pages/Freshers/Freshers"
import Community from "./pages/Community/Community"
import Careerpath from './pages/CareerPath/Careerpath';
import Saleslearning from './pages/SalesLearning/Saleslearning';
import Businesses from './pages/Businesses/Businesses';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TermsOfService from './components/common/Terms';
import ProtectedRoute from './components/Security/ProtectedRoute';
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
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route path="/skilling" element={<Skilling />} />
              <Route path="/about" element={<About />} />
              <Route path="/freshers" element={<Freshers />} />
              <Route path="/community" element={<Community />} />
              <Route path="/career-path" element={<Careerpath />} />
              <Route path="/saleslearning" element={<Saleslearning />} />
              <Route path="/businesses" element={<Businesses />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;