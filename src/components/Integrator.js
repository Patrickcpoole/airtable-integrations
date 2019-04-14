import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components';
import picture from '../fh-patrick.jpg';

import Completed from './Completed';
import CompanyInfo from './CompanyInfo';

const IntegratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    width: 32vw;
    margin-right:2%;
    margin-left:2%;
    margin-top:1%;
    background-color:white;
    height: 75vh;
    border-radius:8px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  `;

  const Header = styled.div`
     height:30%;
     width:100%;
    border-bottom: solid 2px;
    border-color:#282c34;
    
  `;

  const IntegratorName = styled.h3`
    color:#282c34;
    font-size:32px;
    margin-bottom:20px;
  `;

class Integrator extends Component {
  render() {
    return (
      
        <IntegratorContainer>
          <Header>
            <img className="picture" src={picture} alt="picture"/>
              <IntegratorName>Patrick Poole</IntegratorName>
          </Header>
          <Completed />
          <CompanyInfo />
        </IntegratorContainer>
      
    )
  }
}

export default Integrator;