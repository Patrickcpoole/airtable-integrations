import React, { Component } from 'react'
import styled from 'styled-components';
import moment from 'moment';

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
    font-size:.75rem;
    color:#282c34;
`;

const CompanySubheading = styled.h2`
    font-size:1rem;
    color:#282c34;
    margin-top:-.75vh;
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
    font-size:.75rem;
    color:#282c34;
    font-weight:600;
    padding:5px;
`;

class CompanyInfo extends Component {
  render() {
    let companyArray = [];
    let completionDateArray = [];
    let submitterArray = [];
    let builderArray = [];
    let tierArray = [];
    let shortnameArray = [];
    let webTypeArray = [];
    

    

    //console.log(nameOfSubmitter)
    this.props.records.map(record => {
        let totalRecords = [];
        totalRecords.push(record);
        //console.log(record);
        //console.log(totalRecords);
        let lastItemName = totalRecords[totalRecords.length - 1].fields['Company Name'];
        let lastItemDate = totalRecords[totalRecords.length - 1].fields['Completion Date'];
        let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
        let lastItemSubmitter = totalRecords[totalRecords.length - 1].fields['Name of submitter'];
        
        let lastItemBuilder = totalRecords[totalRecords.length - 1].fields['Dashboard Builder'];
        let lastItemTier = totalRecords[totalRecords.length - 1].fields['Tier'];
        let lastItemShortname = totalRecords[totalRecords.length - 1].fields['Shortname'];
        let lastItemWebType = totalRecords[totalRecords.length - 1].fields['Website Type'];
        
        companyArray.push(lastItemName);
        completionDateArray.push(lastItemDateFormatted);
        submitterArray.push(lastItemSubmitter);
        builderArray.push(lastItemBuilder);
        tierArray.push(lastItemTier);
        shortnameArray.push(lastItemShortname);
        webTypeArray.push(lastItemWebType);
        //console.log(lastItem.fields['Company Name']);
    });

   let mostRecentName = companyArray.pop();
   let mostRecentDate = completionDateArray.pop();
   let mostRecentSubmitter = submitterArray.pop();
   let mostRecentBuilder = builderArray.pop();
   let mostRecentTier = tierArray.pop();
   let mostRecentShortname = shortnameArray.pop();
   let mostRecentWebType = webTypeArray.pop();

   //console.log(mostRecentSubmitter);
 
    return (
      <CompanyContainer>
          <CompanyHeader>
            <CompanyHeading>Last Company Integrated:</CompanyHeading>
            <CompanySubheading>{mostRecentName}</CompanySubheading>
          </CompanyHeader>
        <InfoContainer>
            <InfoLeft>
                <InfoText>Completion date: {mostRecentDate}</InfoText>
                <InfoText>Submitted by: {mostRecentSubmitter}</InfoText>
                <InfoText>Dashboard Builder: {mostRecentBuilder}</InfoText>
            </InfoLeft>
            <InfoRight>
                <InfoText>Tier: {mostRecentTier}</InfoText>
                <InfoText>Shortname: {mostRecentShortname}</InfoText>
                <InfoText>Web type: {mostRecentWebType}</InfoText>
            </InfoRight>
        </InfoContainer>
       
      </CompanyContainer>
    )
  }
}

export default CompanyInfo;