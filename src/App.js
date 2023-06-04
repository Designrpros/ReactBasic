import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MainContent from './Pages/MainContent/MainContent';
import Group3 from './Assets/Group3.png';
import Group4 from './Assets/Group4.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCFCFE;
     height: 100%;
    font-family: 'New York', sans-serif;
  }

  p {
    line-height: 1.5;
  }
`;

const Background1 = styled.div`
  width: 100%;
  // height: 100%;
  background-image: url(${Group4});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;



const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };

  return (
    <Background1>
      <GlobalStyle />
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </Background1>
  );
};


export default App;
