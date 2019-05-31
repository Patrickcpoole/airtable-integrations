import React, { useState, Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';
import moment from 'moment';
import patrickImage from '../fh-patrick.jpg';
import neubsImage from '../alex-neubauer.jpeg';
import amaiaImage from '../amaia-ibarra.jpeg';
import marcoImage from '../marco.png';
import zackImage from '../zack.jpeg';
import ellyImage from '../elly.jpg';
import tobeyImage from '../tobey.jpg';
import johnnyImage from '../johnny.png';
import Integrator from './Integrator';

require("dotenv").config({ path: "../../../.env"});

const AppContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
`;

const MainHeading = styled.h1`
  font-size:32px;
  color:#282c34;
`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
`;

const apiKey = process.env.REACT_APP_AIRTABLE_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
     
      patrick: {
        records: {
          total: 0,
          monthly: 0,
          daily: 0,
          mostRecentName: '',
          mostRecentDate: '',
          mostRecentSubmitter: '',
          mostRecentBuilder: '',
          mostRecentTier: '',
          mostRecentShortname: '',
          mostRecentWebType: '',
          tier0: 0,
          tier1: 0,
          tier2: 0,
          tier3: 0,
          tier: 0,
        },
        live: {
          total: 0,
          monthly: 0,
          daily: 0,
          mostRecentName: '',
          mostRecentDate: '',
          mostRecentSubmitter: '',
          mostRecentBuilder: '',
          mostRecentTier: '',
          mostRecentShortname: '',
          mostRecentWebType: '',
          tier0: 0,
          tier1: 0,
          tier2: 0,
          tier3: 0,
          tier: 0,
        },
        info:{
          name: 'Patrick Poole',
          image: patrickImage,
          title: 'Integrations Specialist',
          slack: 'patrick',
          timezone: 'Mountain',
          phone: '303-888-8909',
          email: 'patrick.poole@fareharbor.com',
          office: 'Denver',
          manager: 'Neubs/Raleigh'
        }
      },
    
    nuebs: {
      records: {
        total: 0,
        monthly: 0,
        daily: 0,
        mostRecentName: '',
        mostRecentDate: '',
        mostRecentSubmitter: '',
        mostRecentBuilder: '',
        mostRecentTier: '',
        mostRecentShortname: '',
        mostRecentWebType: '',
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0,
        tier: 0,
      },
      live: {
        total: 0,
        monthly: 0,
        daily: 0,
        mostRecentName: '',
        mostRecentDate: '',
        mostRecentSubmitter: '',
        mostRecentBuilder: '',
        mostRecentTier: '',
        mostRecentShortname: '',
        mostRecentWebType: '',
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0,
        tier: 0,
      },
      info:{
        name: 'Alex Neubauer',
        image: neubsImage,
        title: 'Enterprise Integrations Specialist',
        slack: 'neubs',
        timezone: 'Mountain',
        phone: '615-354-4808',
        email: 'alex@fareharbor.com',
        office: 'Denver',
        manager: 'Raleigh Caruso'
      }
    }
  }
  }

componentDidMount() {
  const idArray = [
    'rec4sRpMUGLTGahXW',
    'recFfOW7iuzI6a8cb',
    'recbMjoumd8cb6pQg',
    'recV6fVqabawVDGuZ',
    'recUKD8ue91sXjx0x',
    'recvnh0fRFsGvqPYx',
    'recGu8dqcUNmX7Lsx',
    'recjAF0GGGahIkwti',
    'recfDa2Zeu940sdpA'
  ];

  let today = new Date();
  let day = today.getDate();
    
  let month = today.getMonth();
  month = month+1;
  let year = today.getFullYear();
   
  // Adds 0 to single digit days and months
  if (month < 10){
    month = "0"+month;
  }
  
  if (day < 10) {
    day = "0"+day;
  }   
  
  const date = `${year}-${month}-${day}`;

  const Airtable = require('airtable');
  
  const base = new Airtable({ apiKey: apiKey }).base('app9VtXS1vJyLgLgK');

  const loadOBRecords = () => {
  let dailyIntegrationsArrayLive = [];
  let totalIntegrationsArrayLive = [];
  let monthlyIntegrationsArrayLive = [];

  let dailyIntegrationsArrayLiveNeubs = [];
  let totalIntegrationsArrayLiveNeubs = [];
  let monthlyIntegrationsArrayLiveNeubs = [];

  let companyArrayLive = [];          
  let completionDateArrayLive = [];
  let submitterArrayLive = [];
  let builderArrayLive = [];
  let tierArrayLive = [];
  let shortnameArrayLive = [];
  let webTypeArrayLive = [];

  let companyArrayLiveNeubs = [];          
  let completionDateArrayLiveNeubs = [];
  let submitterArrayLiveNeubs = [];
  let builderArrayLiveNeubs = [];
  let tierArrayLiveNeubs = [];
  let shortnameArrayLiveNeubs = [];
  let webTypeArrayLiveNeubs = [];

  let tier0Live = 0;
  let tier1Live = 0;
  let tier2Live = 0;
  let tier3Live = 0;
  let tier4Live = 0;

  let tier0LiveNeubs = 0;
  let tier1LiveNeubs = 0;
  let tier2LiveNeubs = 0;
  let tier3LiveNeubs = 0;
  let tier4LiveNeubs = 0;

  let totalRecordsLive = [];
  let totalRecordsLiveNeubs = [];
           
  base('Live Integration Requests').select({
      sort: [
          {field: 'Completion Date', direction: 'asc'}
      ]
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        try {
          if(record.fields['Claimed By:'][0] === idArray[0]) {
            if(record.fields['Completion Date']) {
              totalRecordsLive.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Live++;
                  break;
                case '1':
                  tier1Live++;
                  break;
                case '2':
                  tier2Live++;
                  break;
                case '3':
                  tier3Live++;
                  break;
                case '4':
                  tier4Live++;
                  break;
              }
            }

            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLive.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLive.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLive.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Name of submitter'];
            let lastItemBuilderLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Dashboard Builder'];
            let lastItemTierLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Website Type'];
            
            companyArrayLive.push(lastItemNameLive);
            completionDateArrayLive.push(lastItemDateFormattedLive);
            submitterArrayLive.push(lastItemSubmitterLive);
            builderArrayLive.push(lastItemBuilderLive);
            tierArrayLive.push(lastItemTierLive);
            shortnameArrayLive.push(lastItemShortnameLive);
            webTypeArrayLive.push(lastItemWebTypeLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[1]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveNeubs.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveNeubs++;
                  break;
                case '1':
                  tier1LiveNeubs++;
                  break;
                case '2':
                  tier2LiveNeubs++;
                  break;
                case '3':
                  tier3LiveNeubs++;
                  break;
                case '4':
                  tier4LiveNeubs++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveNeubs.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveNeubs.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveNeubs.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Name of submitter'];
            let lastItemBuilderLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Dashboard Builder'];
            let lastItemTierLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Website Type'];
            
            companyArrayLiveNeubs.push(lastItemNameLive);
            completionDateArrayLiveNeubs.push(lastItemDateFormattedLive);
            submitterArrayLiveNeubs.push(lastItemSubmitterLive);
            builderArrayLiveNeubs.push(lastItemBuilderLive);
            tierArrayLiveNeubs.push(lastItemTierLive);
            shortnameArrayLiveNeubs.push(lastItemShortnameLive);
            webTypeArrayLiveNeubs.push(lastItemWebTypeLive);
          } 
        } catch(err) {
          
        }
    });
      fetchNextPage();
  }, function done(error) {
      console.log(error);
});
    
    let dailyIntegrationsArray = [];
    let totalIntegrationsArray = [];
    let monthlyIntegrationsArray = [];
    let companyArray = [];
    let completionDateArray = [];
    let submitterArray = [];
    let builderArray = [];
    let tierArray = [];
    let shortnameArray = [];
    let webTypeArray = [];

    let dailyIntegrationsArrayNeubs = [];
    console.log(dailyIntegrationsArrayNeubs);
    let totalIntegrationsArrayNeubs = [];
    let monthlyIntegrationsArrayNeubs = [];
    let companyArrayNeubs = [];
    let completionDateArrayNeubs = [];
    let submitterArrayNeubs = [];
    let builderArrayNeubs = [];
    let tierArrayNeubs = [];
    let shortnameArrayNeubs = [];
    let webTypeArrayNeubs = [];

    let tier0 = 0;
    let tier1 = 0;
    let tier2 = 0;
    let tier3 = 0;
    let tier4 = 0;
  
    let tier0Neubs = 0;
    let tier1Neubs = 0;
    let tier2Neubs = 0;
    let tier3Neubs = 0;
    let tier4Neubs = 0;

    
   
    let totalRecords = [];  
    let totalRecordsNeubs = [];        
    
  
      base('OB Integration Requests').select({
          sort: [
              {field: 'Completion Date', direction: 'asc'}
          ]
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            //console.log(record);
            try {
                if(record.fields['Claimed By:'][0] === idArray[0]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecords.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0++;
                  break;
                case '1':
                  tier1++;
                  break;
                case '2':
                  tier2++;
                  break;
                case '3':
                  tier3++;
                  break;
                case '4':
                  tier4++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArray.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArray.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArray.push(completionDate);
              }

              
            let lastItemName = totalRecords[totalRecords.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecords[totalRecords.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecords[totalRecords.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
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
            }
            }
              } catch(err) {
                
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[1]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecordsNeubs.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Neubs++;
                  break;
                case '1':
                  tier1Neubs++;
                  break;
                case '2':
                  tier2Neubs++;
                  break;
                case '3':
                  tier3Neubs++;
                  break;
                case '4':
                  tier4Neubs++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayNeubs.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArrayNeubs.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArrayNeubs.push(completionDate);
              }

              
            let lastItemName = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
            let lastItemBuilder = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Dashboard Builder'];
            let lastItemTier = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Tier'];
            let lastItemShortname = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Shortname'];
            let lastItemWebType = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Website Type'];
            
            companyArrayNeubs.push(lastItemName);
            completionDateArrayNeubs.push(lastItemDateFormatted);
            submitterArrayNeubs.push(lastItemSubmitter);
            builderArrayNeubs.push(lastItemBuilder);
            tierArrayNeubs.push(lastItemTier);
            shortnameArrayNeubs.push(lastItemShortname);
            webTypeArrayNeubs.push(lastItemWebType);
            }
            }
              } catch(err) {
                
              }
          });
          fetchNextPage();
      }, function done(error) {
          console.log(error);
      });

      setTimeout(() => {
        let mostRecentName = companyArray.pop();  
        let mostRecentDate = completionDateArray.pop();
        let mostRecentSubmitter = submitterArray.pop();
        let mostRecentBuilder = builderArray.pop();
        let mostRecentTier = tierArray.pop();
        let mostRecentShortname = shortnameArray.pop();
        let mostRecentWebType = webTypeArray.pop();
        let mostRecentNameLive = companyArrayLive.pop();
        let mostRecentDateLive = completionDateArrayLive.pop();
        let mostRecentSubmitterLive = submitterArrayLive.pop();
        let mostRecentBuilderLive = builderArrayLive.pop();
        let mostRecentTierLive = tierArrayLive.pop();
        let mostRecentShortnameLive = shortnameArrayLive.pop();
        let mostRecentWebTypeLive = webTypeArrayLive.pop();

        let mostRecentNameNeubs = companyArrayNeubs.pop();  
        let mostRecentDateNeubs = completionDateArrayNeubs.pop();
        let mostRecentSubmitterNeubs = submitterArrayNeubs.pop();
        let mostRecentBuilderNeubs = builderArrayNeubs.pop();
        let mostRecentTierNeubs = tierArrayNeubs.pop();
        let mostRecentShortnameNeubs = shortnameArrayNeubs.pop();
        let mostRecentWebTypeNeubs = webTypeArrayNeubs.pop();
        let mostRecentNameLiveNeubs = companyArrayLiveNeubs.pop();
        let mostRecentDateLiveNeubs = completionDateArrayLiveNeubs.pop();
        let mostRecentSubmitterLiveNeubs = submitterArrayLiveNeubs.pop();
        let mostRecentBuilderLiveNeubs = builderArrayLiveNeubs.pop();
        let mostRecentTierLiveNeubs = tierArrayLiveNeubs.pop();
        let mostRecentShortnameLiveNeubs = shortnameArrayLiveNeubs.pop();
        let mostRecentWebTypeLiveNeubs = webTypeArrayLiveNeubs.pop();
            
        this.setState({
          loading:false,
          patrick: {
            records: {
              monthly: monthlyIntegrationsArray.length,
              daily: dailyIntegrationsArray.length,
              total: totalIntegrationsArray.length,
              mostRecentName: mostRecentName,
              mostRecentDate: mostRecentDate,
              mostRecentSubmitter: mostRecentSubmitter,
              mostRecentBuilder: mostRecentBuilder,
              mostRecentTier: mostRecentTier,
              mostRecentShortname: mostRecentShortname,
              mostRecentWebType: mostRecentWebType,
              tier0: tier0,
              tier1: tier1,
              tier2: tier2,
              tier3: tier3,
              tier4: tier4,
            },
            live: {
              total: totalIntegrationsArrayLive.length,
              monthly:  monthlyIntegrationsArrayLive.length,
              daily: dailyIntegrationsArrayLive.length,
              mostRecentNameLive: mostRecentNameLive,
              mostRecentDateLive: mostRecentDateLive,
              mostRecentSubmitterLive: mostRecentSubmitterLive,
              mostRecentBuilderLive: mostRecentBuilderLive,
              mostRecentTierLive: mostRecentTierLive,
              mostRecentShortnameLive: mostRecentShortnameLive,
              mostRecentWebTypeLive: mostRecentWebTypeLive,
              tier0Live: tier0Live,
              tier1Live: tier1Live,
              tier2Live: tier2Live,
              tier3Live: tier3Live,
              tier4Live: tier4Live,
            },
            info:{
              name: 'Patrick Poole',
              image: patrickImage,
              title: 'Integrations Specialist',
              slack: 'patrick',
              timezone: 'Mountain',
              phone: '303-888-8909',
              email: 'patrick.poole@fareharbor.com',
              office: 'Denver',
              manager: 'Neubs/Raleigh'
            
            }
          },
          neubs: {
            records: {
              monthly: monthlyIntegrationsArrayNeubs.length,
              daily: dailyIntegrationsArrayNeubs.length,
              total: totalIntegrationsArrayNeubs.length,
              mostRecentName: mostRecentNameNeubs,
              mostRecentDate: mostRecentDateNeubs,
              mostRecentSubmitter: mostRecentSubmitterNeubs,
              mostRecentBuilder: mostRecentBuilderNeubs,
              mostRecentTier: mostRecentTierNeubs,
              mostRecentShortname: mostRecentShortnameNeubs,
              mostRecentWebType: mostRecentWebTypeNeubs,
              tier0: tier0Neubs,
              tier1: tier1Neubs,
              tier2: tier2Neubs,
              tier3: tier3Neubs,
              tier4: tier4Neubs,
            },
            live: {
              total: totalIntegrationsArrayLiveNeubs.length,
              monthly:  monthlyIntegrationsArrayLiveNeubs.length,
              daily: dailyIntegrationsArrayLive.length,
              mostRecentNameLive: mostRecentNameLiveNeubs,
              mostRecentDateLive: mostRecentDateLiveNeubs,
              mostRecentSubmitterLive: mostRecentSubmitterLiveNeubs,
              mostRecentBuilderLive: mostRecentBuilderLiveNeubs,
              mostRecentTierLive: mostRecentTierLiveNeubs,
              mostRecentShortnameLive: mostRecentShortnameLiveNeubs,
              mostRecentWebTypeLive: mostRecentWebTypeLiveNeubs,
              tier0Live: tier0LiveNeubs,
              tier1Live: tier1LiveNeubs,
              tier2Live: tier2LiveNeubs,
              tier3Live: tier3LiveNeubs,
              tier4Live: tier4LiveNeubs,
            },
            info:{
              name: 'Alex Neubauer',
              image: neubsImage,
              title: 'Enterprise Integrations Specialist',
              slack: 'neubs',
              timezone: 'Mountain',
              phone: '615-354-4808',
              email: 'alex@fareharbor.com',
              office: 'Denver',
              manager: 'Raleigh Caruso'
            
            }
          }
        
        })
        
        console.log(tier0Neubs);
    }, 9000);

  }

loadOBRecords();
 

}
render() {
    
  return (
    <div className="App">
    {this.state.loading ? <LoadingSpinner /> :
    <div>
          <img src={logo} className="App-logo" alt="logo" />
          <MainHeading>Integration Team Airtable Dashboard</MainHeading>
          
         <AppContainer>
            <Container>
              <Integrator name={this.state.patrick.info.name} image={this.state.patrick.info.image} 
             title={this.state.patrick.info.title} slack={this.state.patrick.info.slack} timezone={this.state.patrick.info.timezone}
             phone={this.state.patrick.info.phone} email={this.state.patrick.info.email} office={this.state.patrick.info.office} 
             manager={this.state.patrick.info.manager}  total={this.state.patrick.records.total} monthly={this.state.patrick.records.monthly}
             daily={this.state.patrick.records.daily} mostRecentName={this.state.patrick.records.mostRecentName} mostRecentDate={this.state.patrick.records.mostRecentDate}
             mostRecentSubmitter={this.state.patrick.records.mostRecentSubmitter} mostRecentBuilder={this.state.patrick.records.mostRecentBuilder}
             mostRecentTier={this.state.patrick.records.mostRecentTier} mostRecentShortname={this.state.patrick.records.mostRecentShortname}
             mostRecentWebType={this.state.patrick.records.mostRecentWebType} totalLive={this.state.patrick.live.total} monthlyLive={this.state.patrick.live.monthly}
             dailyLive={this.state.patrick.live.daily} mostRecentNameLive={this.state.patrick.live.mostRecentNameLive} mostRecentDateLive={this.state.patrick.live.mostRecentDateLive}
             mostRecentSubmitterLive={this.state.patrick.live.mostRecentSubmitterLive} mostRecentBuilderLive={this.state.patrick.live.mostRecentBuilderLive}
             mostRecentTierLive={this.state.patrick.live.mostRecentTierLive} mostRecentShortnameLive={this.state.patrick.live.mostRecentShortnameLive}
             mostRecentWebTypeLive={this.state.patrick.live.mostRecentWebTypeLive} tier0={this.state.patrick.records.tier0} tier1={this.state.patrick.records.tier1}
             tier2={this.state.patrick.records.tier2} tier3={this.state.patrick.records.tier3} tier4={this.state.patrick.records.tier4} 
             tier0Live={this.state.patrick.live.tier0Live} tier1Live={this.state.patrick.live.tier1Live}
             tier2Live={this.state.patrick.live.tier2Live} tier3Live={this.state.patrick.live.tier3Live} tier4Live={this.state.patrick.live.tier4Live}/> 
           </Container>
           <Container>
           <Integrator name={this.state.neubs.info.name} image={this.state.neubs.info.image} 
             title={this.state.neubs.info.title} slack={this.state.neubs.info.slack} timezone={this.state.neubs.info.timezone}
             phone={this.state.neubs.info.phone} email={this.state.neubs.info.email} office={this.state.neubs.info.office} 
             manager={this.state.neubs.info.manager}  total={this.state.neubs.records.total} monthly={this.state.neubs.records.monthly}
             daily={this.state.neubs.records.daily} mostRecentName={this.state.neubs.records.mostRecentName} mostRecentDate={this.state.neubs.records.mostRecentDate}
             mostRecentSubmitter={this.state.neubs.records.mostRecentSubmitter} mostRecentBuilder={this.state.neubs.records.mostRecentBuilder}
             mostRecentTier={this.state.neubs.records.mostRecentTier} mostRecentShortname={this.state.neubs.records.mostRecentShortname}
             mostRecentWebType={this.state.neubs.records.mostRecentWebType} totalLive={this.state.neubs.live.total} monthlyLive={this.state.neubs.live.monthly}
             dailyLive={this.state.neubs.live.daily} mostRecentNameLive={this.state.neubs.live.mostRecentNameLive} mostRecentDateLive={this.state.neubs.live.mostRecentDateLive}
             mostRecentSubmitterLive={this.state.neubs.live.mostRecentSubmitterLive} mostRecentBuilderLive={this.state.neubs.live.mostRecentBuilderLive}
             mostRecentTierLive={this.state.neubs.live.mostRecentTierLive} mostRecentShortnameLive={this.state.neubs.live.mostRecentShortnameLive}
             mostRecentWebTypeLive={this.state.neubs.live.mostRecentWebTypeLive} tier0={this.state.neubs.records.tier0} tier1={this.state.neubs.records.tier1}
             tier2={this.state.neubs.records.tier2} tier3={this.state.neubs.records.tier3} tier4={this.state.neubs.records.tier4} 
             tier0Live={this.state.neubs.live.tier0Live} tier1Live={this.state.neubs.live.tier1Live}
             tier2Live={this.state.neubs.live.tier2Live} tier3Live={this.state.neubs.live.tier3Live} tier4Live={this.state.neubs.live.tier4Live}/>
            </Container>
{/*
            <Container>
              <Integrator records={this.state.amaia.records} live={this.state.amaia.live} name={this.state.amaia.name} image={this.state.amaia.image} 
              title={this.state.amaia.title} slack={this.state.amaia.slack} timezone={this.state.amaia.timezone}
              phone={this.state.amaia.phone} email={this.state.amaia.email} office={this.state.amaia.office} 
              manager={this.state.amaia.manager}/>
            </Container>
            
            <Container>
              <Integrator records={this.state.marco.records} live={this.state.marco.live} name={this.state.marco.name} image={this.state.marco.image} 
              title={this.state.marco.title} slack={this.state.marco.slack} timezone={this.state.marco.timezone}
              phone={this.state.marco.phone} email={this.state.marco.email} office={this.state.marco.office} 
              manager={this.state.marco.manager}/>
            </Container>
            <Container>
              <Integrator records={this.state.zack.records} live={this.state.zack.live} name={this.state.zack.name} image={this.state.zack.image} 
              title={this.state.zack.title} slack={this.state.zack.slack} timezone={this.state.zack.timezone}
              phone={this.state.zack.phone} email={this.state.zack.email} office={this.state.zack.office} 
              manager={this.state.zack.manager}/>
            </Container>
            <Container>
              <Integrator records={this.state.elly.records} live={this.state.elly.live} name={this.state.elly.name} image={this.state.elly.image} 
              title={this.state.elly.title} slack={this.state.elly.slack} timezone={this.state.elly.timezone}
              phone={this.state.elly.phone} email={this.state.elly.email} office={this.state.elly.office} 
              manager={this.state.elly.manager}/>
            </Container>
            <Container>
              <Integrator records={this.state.tobey.records} live={this.state.tobey.live} name={this.state.tobey.name} image={this.state.tobey.image} 
              title={this.state.tobey.title} slack={this.state.tobey.slack} timezone={this.state.tobey.timezone}
              phone={this.state.tobey.phone} email={this.state.tobey.email} office={this.state.tobey.office} 
              manager={this.state.tobey.manager}/>
            </Container>
            <Container>
              <Integrator records={this.state.johnny.records} live={this.state.johnny.live} name={this.state.johnny.name} image={this.state.johnny.image} 
              title={this.state.johnny.title} slack={this.state.johnny.slack} timezone={this.state.johnny.timezone}
              phone={this.state.johnny.phone} email={this.state.johnny.email} office={this.state.johnny.office} 
              manager={this.state.johnny.manager}/>
            </Container>*/}
          </AppContainer>
          </div>
          }
          
      </div>
  )
}

}

export default App;
