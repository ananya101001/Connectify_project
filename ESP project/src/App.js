import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage'; // Make sure the file name and path are correct
import FirstLanding from './FirstLanding';


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path='/' element={<FirstLanding/>}/>
        <Route path="/landingpage" element={<LandingPage />} />

        {/* Login Page Route */}
      

        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
