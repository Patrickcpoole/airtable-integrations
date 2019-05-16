import React, { Component, useState } from 'react'
import {animated, useTransition} from 'react-spring';
import './App.css';
import styled from 'styled-components';
import ModalWrapper from './Modal';
import Completed from './Completed';
import CompanyInfo from './CompanyInfo';
import patrickImage from '../fh-patrick.jpg';

const IntegratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    width: 23vw;
    margin-right:2%;
    margin-left:2%;
    margin-top:1%;
    background-color:white;
    height: 50vh;
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
    font-size:1.5rem;
    margin-bottom:3%;
  `;

class Integrator extends Component {

      
  render() {

    return (
      
        <IntegratorContainer onClick={this.loadModal}>
          <Header>
            <img className="picture" src={this.props.image} alt="integrator-profile"/>
              <IntegratorName>{this.props.name}</IntegratorName>
          </Header>
          <Completed  records = {this.props.records}/>
          <CompanyInfo records = {this.props.records}/>
        </IntegratorContainer>
      
    )
  }
}

export default Integrator;