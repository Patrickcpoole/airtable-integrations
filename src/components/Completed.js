import React, { Component } from 'react';
import styled from 'styled-components';

const CompletedContainer = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction: row;
    border-bottom: solid 2px;
    border-color:#282c34;
    background-color:red;
`;

const NumberContainer = styled.div`
    width:33%;
    height:100%;
`;

const CompletedNumber = styled.h1`
    color:#282c34;
    font-size:54px;
`;

const CompletedText = styled.h2`
    color:#282c34;
    font-size:14px;
    padding:10px;
`;

class Completed extends Component {
  render() {
    return (
      <CompletedContainer>
          <NumberContainer>
            <CompletedNumber>34</CompletedNumber>
            <CompletedText>Integrations Completed This Week</CompletedText>
          </NumberContainer>
          <NumberContainer>
            <CompletedNumber>122</CompletedNumber>
            <CompletedText>Total Integrations Completed</CompletedText>
          </NumberContainer>
          <NumberContainer>
          <CompletedNumber>8</CompletedNumber>
          <CompletedText>Integrations Completed Today</CompletedText>
          </NumberContainer>
      </CompletedContainer>
    )
  }
}

export default Completed;