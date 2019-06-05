import React from 'react';
import logo from '../airtable-logo.png';
import styled from 'styled-components';
import './App.css';

const SpinnerContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

    const LoadingSpinner = () => (
      <SpinnerContainer>
        <h1>Loading Data...</h1>
        <img className="logo-loading" src={logo} />
      </SpinnerContainer>
    );

    export default LoadingSpinner;