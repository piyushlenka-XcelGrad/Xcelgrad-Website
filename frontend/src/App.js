import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hiring from './pages/Hiring/Hiring';
import Training from './pages/Training/Training';
import Home from './pages/Home/Home';

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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;