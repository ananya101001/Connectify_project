import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstLanding from './FirstLanding';
import LandingPage from './landingpage';
import Jobs from './jobs';
import Newjob from './newjob'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<FirstLanding />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/newjob" element={<Newjob/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
