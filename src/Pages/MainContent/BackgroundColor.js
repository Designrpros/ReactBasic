import React from "react";
import styled from "styled-components";


const Main = styled.main`
  position: relative;
  width: 100%;
  height: 95vh;
 

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const BackgroundColor  = () => {


    return (
      <Main>
            <h1>Welcomme To <br /><>Basics</></h1>
            <p>
            This is a simple website that I created to demonstrate some basics of React.js.
          </p>
      </Main>
    );
  };
  
  export default BackgroundColor;