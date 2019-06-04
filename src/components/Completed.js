import React, { Component } from 'react';
import styled from 'styled-components';


const CompletedContainer = styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-direction: row;
    border-bottom: solid 2px;
    border-color:#282c34;
    @media (max-width: 1500px) {
    font-size:2rem;
    height:22.5%;
  }
`;

const NumberContainer = styled.div`
    width:33%;
    height:100%;
`;

const CompletedNumber = styled.h1`
    color:#282c34;
    font-size:2.25rem;
    @media (max-width: 1500px) {
    font-size:2rem;
    
  }
`;

const CompletedText = styled.h2`
    color:#282c34;
    font-size:.75rem;
    padding:10px;
    margin-top:-3vh;
`;

class Completed extends Component {
 
render() {
   
    return (
      <CompletedContainer>
          
          <NumberContainer>
            <CompletedNumber>{this.props.monthly}</CompletedNumber>
            <CompletedText>Integrations Completed This Month</CompletedText>
          </NumberContainer>
          <NumberContainer>
            <CompletedNumber>{this.props.total}</CompletedNumber>
            <CompletedText>Total Integrations Completed</CompletedText>
          </NumberContainer>
          <NumberContainer>
          <CompletedNumber>{this.props.daily}</CompletedNumber>
          <CompletedText>Integrations Completed Today</CompletedText>
          </NumberContainer>
      </CompletedContainer>
    )
  }
}

export default Completed;