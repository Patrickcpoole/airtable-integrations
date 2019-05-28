import React, { Component } from 'react';
import styled from 'styled-components';


const CompletedContainer = styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-direction: row;
    border-bottom: solid 2px;
    border-color:#282c34;
`;

const NumberContainer = styled.div`
    width:33%;
    height:100%;
`;

const CompletedNumber = styled.h1`
    color:#282c34;
    font-size:2rem;
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
            <CompletedNumber>{this.props.records ? this.props.monthly : 0}</CompletedNumber>
            <CompletedText>Integrations Completed This Month</CompletedText>
          </NumberContainer>
          <NumberContainer>
            <CompletedNumber>{this.props.records ? this.props.total : 0}</CompletedNumber>
            <CompletedText>Total Integrations Completed</CompletedText>
          </NumberContainer>
          <NumberContainer>
          <CompletedNumber>{this.props.records ? this.props.daily : 0}</CompletedNumber>
          <CompletedText>Integrations Completed Today</CompletedText>
          </NumberContainer>
      </CompletedContainer>
    )
  }
}

export default Completed;