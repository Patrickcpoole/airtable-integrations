import React, { Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';

import Integrator from './Integrator';

const AppContainer = styled.div`
    display:flex;
    flex-wrap: no-wrap;
    justify-content:center;
    align-items:center;
`;

const MainHeading = styled.h1`
  font-size:32px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <MainHeading>Integration Team Airtable Data</MainHeading>
          <AppContainer>
            <Integrator />
            <Integrator />
            <Integrator />
          </AppContainer>

      </div>
    );
  }
}

export default App;
