import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components';

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
    font-size:2rem;
    margin-bottom:3%;
  `;

class Integrator extends Component {

  render() {

    /*let name = ''
    switch(name) {
      case this.props.records[0].fields['Claimed By'][0] == 'rec4sRpMUGLTGahXW':
        name = 'Patrick Poole';
      case this.props.records.fields['Claimed By'][0] == 'recFfOW7iuzI6a8cb':
        name = 'Alex Neubauer';
        case this.props.records.fields['Claimed By'][0] == 'recbMjoumd8cb6pQg':
        name = 'Alex Neubauer';
    }*/

    return (
      
        <IntegratorContainer>
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