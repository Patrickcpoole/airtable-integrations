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
    align-items:center;
    justify-content:flex-start;
`;

const CompanyHeading = styled.h1`
    font-size:.75rem;
    color:#282c34;
`;

const CompanySubheading = styled.h2`
    font-size:1rem;
    color:#282c34;
    margin-top:-.75vh;
`;

const CompanyLocation = styled.h3`
    font-size:.85rem;
    color:#282c34;
    margin-top:.75vh;
    display:inline-block;
    border-radius:300px;
    padding: 2px 10px 2px 10px;
    background: ${props => props.color};
    width:max-content;
`;

const InfoContainer = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (max-width: 1500px) {
    margin-top:10%;
  }
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
    font-size:.75rem;
    color:#282c34;
    font-weight:600;
    padding:5px;
`;

class CompanyInfo extends Component {
    
  render() {
    console.log(this.props.colorProp);
 
    return (
      <CompanyContainer>
          <CompanyHeader>
            <CompanyHeading>Last Company Integrated:</CompanyHeading>
            <CompanySubheading>{this.props.mostRecentName}</CompanySubheading>
            <CompanyLocation color={this.props.colorProp}>{this.props.mostRecentCompanyRegion}</CompanyLocation>
          </CompanyHeader>
        <InfoContainer>
            <InfoLeft>
                <InfoText>Completion date: {this.props.mostRecentDate}</InfoText>
                <InfoText>Submitted by: {this.props.mostRecentSubmitter}</InfoText>
                <InfoText>Dashboard Builder: {this.props.mostRecentBuilder}</InfoText>
            </InfoLeft>
            <InfoRight>
                <InfoText>Tier: {this.props.mostRecentTier}</InfoText>
                <InfoText>Shortname: {this.props.mostRecentShortname}</InfoText>
                <InfoText>Web type: {this.props.mostRecentWebType}</InfoText>
            </InfoRight>
        </InfoContainer>
       
      </CompanyContainer>
    )
  }
}

export default CompanyInfo;