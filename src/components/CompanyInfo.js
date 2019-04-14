import React, { Component } from 'react'
import styled from 'styled-components';

const CompanyContainer = styled.div`
    width:100%;
    height:41%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:stretch;
`;

const CompanyHeader = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`;

const CompanyHeading = styled.h1`
    font-size:24px;
    color:#282c34;
`;

const CompanySubheading = styled.h2`
    font-size:20px;
    color:#282c34;
`;

const InfoContainer = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

const InfoRight = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const InfoLeft = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const InfoText = styled.p`
    font-size:16px;
    color:#282c34;
    font-weight:600;
`;

class CompanyInfo extends Component {
  render() {
    return (
      <CompanyContainer>
          <CompanyHeader>
            <CompanyHeading>Last Company Integrated:</CompanyHeading>
            <CompanySubheading>Vineyard Boat Rental</CompanySubheading>
          </CompanyHeader>
        <InfoContainer>
            <InfoLeft>
                <InfoText>Completion date: 3/11/19</InfoText>
                <InfoText>Submitted by: Alex Ingrassia</InfoText>
                <InfoText>Dashboard Builder: Tori</InfoText>
            </InfoLeft>
            <InfoRight>
                <InfoText>Tier: 1</InfoText>
                <InfoText>Shortname: vineyardboatrentals</InfoText>
                <InfoText>Web type: SquareSpace</InfoText>
            </InfoRight>
        </InfoContainer>
      </CompanyContainer>
    )
  }
}

export default CompanyInfo;