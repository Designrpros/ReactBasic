import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MainContent from './Pages/MainContent';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF7F6;
    font-family: 'New York', sans-serif;
  }

  p {
    line-height: 1.5;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
