import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from "./pages/HomePage"
import withAuth from './hoc/withAuth';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={withAuth(HomePage)} />
          {/* <Route path="/weather" element={withAuth(WeatherPage)} /> */}
          {/* <Route path="/history" element={withAuth(WeatherSearchHistoryPage)} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
