import React, { Component } from 'react';
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
    margin-top:10px;
`;

const MainHeading = styled.h1`
  font-size:2.25rem;
  display:inline-block;
  margin-left:10px;
  margin-bottom:20px;
  color:white;
`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
  margin-top:10px;
`;

const apiKey = process.env.REACT_APP_AIRTABLE_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true
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

  let dailyIntegrationsArrayLiveZack = [];
  let totalIntegrationsArrayLiveZack = [];
  let monthlyIntegrationsArrayLiveZack = [];

  let dailyIntegrationsArrayLiveMarco = [];
  let totalIntegrationsArrayLiveMarco = [];
  let monthlyIntegrationsArrayLiveMarco = [];

  let dailyIntegrationsArrayLiveAmaia = [];
  let totalIntegrationsArrayLiveAmaia = [];
  let monthlyIntegrationsArrayLiveAmaia = [];

  let dailyIntegrationsArrayLiveElly = [];
  let totalIntegrationsArrayLiveElly = [];
  let monthlyIntegrationsArrayLiveElly = [];

  let dailyIntegrationsArrayLiveTobey = [];
  let totalIntegrationsArrayLiveTobey = [];
  let monthlyIntegrationsArrayLiveTobey = [];

  let dailyIntegrationsArrayLiveJohnny = [];
  let totalIntegrationsArrayLiveJohnny = [];
  let monthlyIntegrationsArrayLiveJohnny = [];

  let companyArrayLive = [];          
  let completionDateArrayLive = [];
  let submitterArrayLive = [];
  let integrationTypeArrayLive = [];
  let tierArrayLive = [];
  let shortnameArrayLive = [];
  let webTypeArrayLive = [];
  let companyRegionArrayLive = [];

  let companyArrayLiveNeubs = [];          
  let completionDateArrayLiveNeubs = [];
  let submitterArrayLiveNeubs = [];
  let integrationTypeArrayLiveNeubs = [];
  let tierArrayLiveNeubs = [];
  let shortnameArrayLiveNeubs = [];
  let webTypeArrayLiveNeubs = [];
  let companyRegionArrayLiveNeubs = [];

  let companyArrayLiveZack = [];          
  let completionDateArrayLiveZack = [];
  let submitterArrayLiveZack = [];
  let integrationTypeArrayLiveZack = [];
  let tierArrayLiveZack = [];
  let shortnameArrayLiveZack = [];
  let webTypeArrayLiveZack = [];
  let companyRegionArrayLiveZack = [];

  let companyArrayLiveMarco = [];          
  let completionDateArrayLiveMarco = [];
  let submitterArrayLiveMarco = [];
  let integrationTypeArrayLiveMarco = [];
  let tierArrayLiveMarco = [];
  let shortnameArrayLiveMarco = [];
  let webTypeArrayLiveMarco = [];
  let companyRegionArrayLiveMarco = [];

  let companyArrayLiveAmaia = [];          
  let completionDateArrayLiveAmaia = [];
  let submitterArrayLiveAmaia = [];
  let integrationTypeArrayLiveAmaia = [];
  let tierArrayLiveAmaia = [];
  let shortnameArrayLiveAmaia = [];
  let webTypeArrayLiveAmaia = [];
  let companyRegionArrayLiveAmaia = [];

  let companyArrayLiveElly = [];          
  let completionDateArrayLiveElly = [];
  let submitterArrayLiveElly = [];
  let integrationTypeArrayLiveElly = [];
  let tierArrayLiveElly = [];
  let shortnameArrayLiveElly = [];
  let webTypeArrayLiveElly = [];
  let companyRegionArrayLiveElly = [];

  let companyArrayLiveTobey = [];          
  let completionDateArrayLiveTobey = [];
  let submitterArrayLiveTobey = [];
  let integrationTypeArrayLiveTobey = [];
  let tierArrayLiveTobey = [];
  let shortnameArrayLiveTobey = [];
  let webTypeArrayLiveTobey = [];
  let companyRegionArrayLiveTobey = [];

  let companyArrayLiveJohnny = [];          
  let completionDateArrayLiveJohnny = [];
  let submitterArrayLiveJohnny = [];
  let integrationTypeArrayLiveJohnny = [];
  let tierArrayLiveJohnny = [];
  let shortnameArrayLiveJohnny = [];
  let webTypeArrayLiveJohnny = [];
  let companyRegionArrayLiveJohnny = [];

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

  let tier0LiveZack = 0;
  let tier1LiveZack = 0;
  let tier2LiveZack = 0;
  let tier3LiveZack = 0;
  let tier4LiveZack = 0;

  let tier0LiveMarco = 0;
  let tier1LiveMarco = 0;
  let tier2LiveMarco = 0;
  let tier3LiveMarco = 0;
  let tier4LiveMarco = 0;

  let tier0LiveAmaia = 0;
  let tier1LiveAmaia = 0;
  let tier2LiveAmaia = 0;
  let tier3LiveAmaia = 0;
  let tier4LiveAmaia = 0;

  let tier0LiveElly = 0;
  let tier1LiveElly = 0;
  let tier2LiveElly = 0;
  let tier3LiveElly = 0;
  let tier4LiveElly = 0;

  let tier0LiveTobey = 0;
  let tier1LiveTobey = 0;
  let tier2LiveTobey = 0;
  let tier3LiveTobey = 0;
  let tier4LiveTobey = 0;

  let tier0LiveJohnny = 0;
  let tier1LiveJohnny  = 0;
  let tier2LiveJohnny  = 0;
  let tier3LiveJohnny  = 0;
  let tier4LiveJohnny  = 0;

  let totalRecordsLive = [];
  let totalRecordsLiveNeubs = [];
  let totalRecordsLiveZack = [];
  let totalRecordsLiveMarco = [];
  let totalRecordsLiveAmaia = [];
  let totalRecordsLiveElly = [];
  let totalRecordsLiveTobey = [];
  let totalRecordsLiveJohnny = [];
           
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
            let lastItemIntegrationTypeLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLive[totalRecordsLive.length - 1].fields['Company Region'];
            
            companyArrayLive.push(lastItemNameLive);
            completionDateArrayLive.push(lastItemDateFormattedLive);
            submitterArrayLive.push(lastItemSubmitterLive);
            integrationTypeArrayLive.push(lastItemIntegrationTypeLive);
            tierArrayLive.push(lastItemTierLive);
            shortnameArrayLive.push(lastItemShortnameLive);
            webTypeArrayLive.push(lastItemWebTypeLive);
            companyRegionArrayLive.push(lastCompanyRegionLive);
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
            let lastItemIntegrationTypeLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveNeubs[totalRecordsLiveNeubs.length - 1].fields['Company Region'];
            
            companyArrayLiveNeubs.push(lastItemNameLive);
            completionDateArrayLiveNeubs.push(lastItemDateFormattedLive);
            submitterArrayLiveNeubs.push(lastItemSubmitterLive);
            integrationTypeArrayLiveNeubs.push(lastItemIntegrationTypeLive);
            tierArrayLiveNeubs.push(lastItemTierLive);
            shortnameArrayLiveNeubs.push(lastItemShortnameLive);
            webTypeArrayLiveNeubs.push(lastItemWebTypeLive);
            companyRegionArrayLiveNeubs.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[2]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveZack.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveZack++;
                  break;
                case '1':
                  tier1LiveZack++;
                  break;
                case '2':
                  tier2LiveZack++;
                  break;
                case '3':
                  tier3LiveZack++;
                  break;
                case '4':
                  tier4LiveZack++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveZack.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveZack.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveZack.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveZack[totalRecordsLiveZack.length - 1].fields['Company Region'];
            
            companyArrayLiveZack.push(lastItemNameLive);
            completionDateArrayLiveZack.push(lastItemDateFormattedLive);
            submitterArrayLiveZack.push(lastItemSubmitterLive);
            integrationTypeArrayLiveZack.push(lastItemIntegrationTypeLive);
            tierArrayLiveZack.push(lastItemTierLive);
            shortnameArrayLiveZack.push(lastItemShortnameLive);
            webTypeArrayLiveZack.push(lastItemWebTypeLive);
            companyRegionArrayLiveZack.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[3]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveMarco.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveMarco++;
                  break;
                case '1':
                  tier1LiveMarco++;
                  break;
                case '2':
                  tier2LiveMarco++;
                  break;
                case '3':
                  tier3LiveMarco++;
                  break;
                case '4':
                  tier4LiveMarco++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveMarco.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveMarco.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveMarco.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveMarco[totalRecordsLiveMarco.length - 1].fields['Company Region'];
            
            companyArrayLiveMarco.push(lastItemNameLive);
            completionDateArrayLiveMarco.push(lastItemDateFormattedLive);
            submitterArrayLiveMarco.push(lastItemSubmitterLive);
            integrationTypeArrayLiveMarco.push(lastItemIntegrationTypeLive);
            tierArrayLiveMarco.push(lastItemTierLive);
            shortnameArrayLiveMarco.push(lastItemShortnameLive);
            webTypeArrayLiveMarco.push(lastItemWebTypeLive);
            companyRegionArrayLiveMarco.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[4]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveAmaia.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveAmaia++;
                  break;
                case '1':
                  tier1LiveAmaia++;
                  break;
                case '2':
                  tier2LiveAmaia++;
                  break;
                case '3':
                  tier3LiveAmaia++;
                  break;
                case '4':
                  tier4LiveAmaia++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveAmaia.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveAmaia.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveAmaia.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveAmaia[totalRecordsLiveAmaia.length - 1].fields['Company Region'];
            
            companyArrayLiveAmaia.push(lastItemNameLive);
            completionDateArrayLiveAmaia.push(lastItemDateFormattedLive);
            submitterArrayLiveAmaia.push(lastItemSubmitterLive);
            integrationTypeArrayLiveAmaia.push(lastItemIntegrationTypeLive);
            tierArrayLiveAmaia.push(lastItemTierLive);
            shortnameArrayLiveAmaia.push(lastItemShortnameLive);
            webTypeArrayLiveAmaia.push(lastItemWebTypeLive);
            companyRegionArrayLiveAmaia.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[5]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveElly.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveElly++;
                  break;
                case '1':
                  tier1LiveElly++;
                  break;
                case '2':
                  tier2LiveElly++;
                  break;
                case '3':
                  tier3LiveElly++;
                  break;
                case '4':
                  tier4LiveElly++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveElly.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveElly.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveElly.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveElly[totalRecordsLiveElly.length - 1].fields['Company Region'];
            
            companyArrayLiveElly.push(lastItemNameLive);
            completionDateArrayLiveElly.push(lastItemDateFormattedLive);
            submitterArrayLiveElly.push(lastItemSubmitterLive);
            integrationTypeArrayLiveElly.push(lastItemIntegrationTypeLive);
            tierArrayLiveElly.push(lastItemTierLive);
            shortnameArrayLiveElly.push(lastItemShortnameLive);
            webTypeArrayLiveElly.push(lastItemWebTypeLive);
            companyRegionArrayLiveElly.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[6]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveTobey.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveTobey++;
                  break;
                case '1':
                  tier1LiveTobey++;
                  break;
                case '2':
                  tier2LiveTobey++;
                  break;
                case '3':
                  tier3LiveTobey++;
                  break;
                case '4':
                  tier4LiveTobey++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveTobey.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveTobey.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveTobey.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveTobey[totalRecordsLiveTobey.length - 1].fields['Company Region'];

            companyArrayLiveTobey.push(lastItemNameLive);
            completionDateArrayLiveTobey.push(lastItemDateFormattedLive);
            submitterArrayLiveTobey.push(lastItemSubmitterLive);
            integrationTypeArrayLiveTobey.push(lastItemIntegrationTypeLive);
            tierArrayLiveTobey.push(lastItemTierLive);
            shortnameArrayLiveTobey.push(lastItemShortnameLive);
            webTypeArrayLiveTobey.push(lastItemWebTypeLive);
            companyRegionArrayLiveTobey.push(lastCompanyRegionLive);
          } 
        } catch(err) {
          
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[7]) {
            if(record.fields['Completion Date']) {
              totalRecordsLiveJohnny.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0LiveJohnny++;
                  break;
                case '1':
                  tier1LiveJohnny++;
                  break;
                case '2':
                  tier2LiveJohnny++;
                  break;
                case '3':
                  tier3LiveJohnny++;
                  break;
                case '4':
                  tier4LiveJohnny++;
                  break;
              }
            }
            let completionDateLive = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayLiveJohnny.push(completionDateLive);
              if(completionDateLive === date) {          
                dailyIntegrationsArrayLiveJohnny.push(completionDateLive);
              }
              let completionMonthLive = completionDateLive.split('-')[1];
              if(completionMonthLive === month) {
                monthlyIntegrationsArrayLiveJohnny.push(completionDateLive);
              }

            let lastItemNameLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Company Name'];
            let lastItemDateLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Completion Date'];
            let lastItemDateFormattedLive = moment(lastItemDateLive).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitterLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Name of submitter'];
            let lastItemIntegrationTypeLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Type of Integration Request'];
            let lastItemTierLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Tier'];
            let lastItemShortnameLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Shortname'];
            let lastItemWebTypeLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Website Type'];
            let lastCompanyRegionLive = totalRecordsLiveJohnny[totalRecordsLiveJohnny.length - 1].fields['Company Region'];
            
            companyArrayLiveJohnny.push(lastItemNameLive);
            completionDateArrayLiveJohnny.push(lastItemDateFormattedLive);
            submitterArrayLiveJohnny.push(lastItemSubmitterLive);
            integrationTypeArrayLiveJohnny.push(lastItemIntegrationTypeLive);
            tierArrayLiveJohnny.push(lastItemTierLive);
            shortnameArrayLiveJohnny.push(lastItemShortnameLive);
            webTypeArrayLiveJohnny.push(lastItemWebTypeLive);
            companyRegionArrayLiveJohnny.push(lastCompanyRegionLive);
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
    let companyRegionArray = [];

    let dailyIntegrationsArrayNeubs = [];
    let totalIntegrationsArrayNeubs = [];
    let monthlyIntegrationsArrayNeubs = [];
    let companyArrayNeubs = [];
    let completionDateArrayNeubs = [];
    let submitterArrayNeubs = [];
    let builderArrayNeubs = [];
    let tierArrayNeubs = [];
    let shortnameArrayNeubs = [];
    let webTypeArrayNeubs = [];
    let companyRegionArrayNeubs = [];

    let dailyIntegrationsArrayZack = [];
    let totalIntegrationsArrayZack = [];
    let monthlyIntegrationsArrayZack = [];
    let companyArrayZack = [];
    let completionDateArrayZack = [];
    let submitterArrayZack = [];
    let builderArrayZack = [];
    let tierArrayZack = [];
    let shortnameArrayZack = [];
    let webTypeArrayZack = [];
    let companyRegionArrayZack = [];

    let dailyIntegrationsArrayMarco = [];
    let totalIntegrationsArrayMarco = [];
    let monthlyIntegrationsArrayMarco = [];
    let companyArrayMarco = [];
    let completionDateArrayMarco = [];
    let submitterArrayMarco = [];
    let builderArrayMarco = [];
    let tierArrayMarco = [];
    let shortnameArrayMarco = [];
    let webTypeArrayMarco = [];
    let companyRegionArrayMarco = [];

    let dailyIntegrationsArrayAmaia = [];
    let totalIntegrationsArrayAmaia = [];
    let monthlyIntegrationsArrayAmaia = [];
    let companyArrayAmaia = [];
    let completionDateArrayAmaia = [];
    let submitterArrayAmaia = [];
    let builderArrayAmaia = [];
    let tierArrayAmaia = [];
    let shortnameArrayAmaia = [];
    let webTypeArrayAmaia = [];
    let companyRegionArrayAmaia = [];

    let dailyIntegrationsArrayElly= [];
    let totalIntegrationsArrayElly = [];
    let monthlyIntegrationsArrayElly = [];
    let companyArrayElly = [];
    let completionDateArrayElly = [];
    let submitterArrayElly = [];
    let builderArrayElly = [];
    let tierArrayElly = [];
    let shortnameArrayElly = [];
    let webTypeArrayElly = [];
    let companyRegionArrayElly = [];

    let dailyIntegrationsArrayTobey = [];
    let totalIntegrationsArrayTobey = [];
    let monthlyIntegrationsArrayTobey = [];
    let companyArrayTobey = [];
    let completionDateArrayTobey = [];
    let submitterArrayTobey = [];
    let builderArrayTobey = [];
    let tierArrayTobey = [];
    let shortnameArrayTobey = [];
    let webTypeArrayTobey = [];
    let companyRegionArrayTobey = [];

    let dailyIntegrationsArrayJohnny = [];
    let totalIntegrationsArrayJohnny = [];
    let monthlyIntegrationsArrayJohnny = [];
    let companyArrayJohnny = [];
    let completionDateArrayJohnny = [];
    let submitterArrayJohnny = [];
    let builderArrayJohnny = [];
    let tierArrayJohnny = [];
    let shortnameArrayJohnny = [];
    let webTypeArrayJohnny = [];
    let companyRegionArrayJohnny = [];

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

    let tier0Zack = 0;
    let tier1Zack = 0;
    let tier2Zack = 0;
    let tier3Zack = 0;
    let tier4Zack = 0;

    let tier0Marco = 0;
    let tier1Marco = 0;
    let tier2Marco = 0;
    let tier3Marco = 0;
    let tier4Marco = 0;

    let tier0Amaia = 0;
    let tier1Amaia = 0;
    let tier2Amaia = 0;
    let tier3Amaia = 0;
    let tier4Amaia = 0;

    let tier0Elly = 0;
    let tier1Elly = 0;
    let tier2Elly = 0;
    let tier3Elly = 0;
    let tier4Elly = 0;

    let tier0Tobey = 0;
    let tier1Tobey = 0;
    let tier2Tobey = 0;
    let tier3Tobey = 0;
    let tier4Tobey = 0;

    let tier0Johnny = 0;
    let tier1Johnny = 0;
    let tier2Johnny = 0;
    let tier3Johnny = 0;
    let tier4Johnny = 0;

    
    let totalRecords = [];  
    let totalRecordsNeubs = [];     
    let totalRecordsZack = [];
    let totalRecordsMarco = [];       
    let totalRecordsAmaia = [];
    let totalRecordsElly = []; 
    let totalRecordsTobey = [];
    let totalRecordsJohnny = [];           
    
  
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
            let lastCompanyRegion = totalRecords[totalRecords.length - 1].fields['Company Region'];
            
            companyArray.push(lastItemName);
            completionDateArray.push(lastItemDateFormatted);
            submitterArray.push(lastItemSubmitter);
            builderArray.push(lastItemBuilder);
            tierArray.push(lastItemTier);
            shortnameArray.push(lastItemShortname);
            webTypeArray.push(lastItemWebType);
            companyRegionArray.push(lastCompanyRegion);
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
            let lastCompanyRegion = totalRecordsNeubs[totalRecordsNeubs.length - 1].fields['Company Region'];
            
            companyArrayNeubs.push(lastItemName);
            completionDateArrayNeubs.push(lastItemDateFormatted);
            submitterArrayNeubs.push(lastItemSubmitter);
            builderArrayNeubs.push(lastItemBuilder);
            tierArrayNeubs.push(lastItemTier);
            shortnameArrayNeubs.push(lastItemShortname);
            webTypeArrayNeubs.push(lastItemWebType);
            companyRegionArrayNeubs.push(lastCompanyRegion);
            }
            }
              } catch(err) {
                
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[2]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecordsZack.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Zack++;
                  break;
                case '1':
                  tier1Zack++;
                  break;
                case '2':
                  tier2Zack++;
                  break;
                case '3':
                  tier3Zack++;
                  break;
                case '4':
                  tier4Zack++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayZack.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArrayZack.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArrayZack.push(completionDate);
              }

              
            let lastItemName = totalRecordsZack[totalRecordsZack.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecordsZack[totalRecordsZack.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecordsZack[totalRecordsZack.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
            let lastItemBuilder = totalRecordsZack[totalRecordsZack.length - 1].fields['Dashboard Builder'];
            let lastItemTier = totalRecordsZack[totalRecordsZack.length - 1].fields['Tier'];
            let lastItemShortname = totalRecordsZack[totalRecordsZack.length - 1].fields['Shortname'];
            let lastItemWebType = totalRecordsZack[totalRecordsZack.length - 1].fields['Website Type'];
            let lastCompanyRegion = totalRecordsZack[totalRecordsZack.length - 1].fields['Company Region'];
            
            companyArrayZack.push(lastItemName);
            completionDateArrayZack.push(lastItemDateFormatted);
            submitterArrayZack.push(lastItemSubmitter);
            builderArrayZack.push(lastItemBuilder);
            tierArrayZack.push(lastItemTier);
            shortnameArrayZack.push(lastItemShortname);
            webTypeArrayZack.push(lastItemWebType);
            companyRegionArrayZack.push(lastCompanyRegion);
            }
            }
              } catch(err) {
                
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[3]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecordsMarco.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Marco++;
                  break;
                case '1':
                  tier1Marco++;
                  break;
                case '2':
                  tier2Marco++;
                  break;
                case '3':
                  tier3Marco++;
                  break;
                case '4':
                  tier4Marco++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayMarco.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArrayMarco.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArrayMarco.push(completionDate);
              }

              
            let lastItemName = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
            let lastItemBuilder = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Dashboard Builder'];
            let lastItemTier = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Tier'];
            let lastItemShortname = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Shortname'];
            let lastItemWebType = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Website Type'];
            let lastCompanyRegion = totalRecordsMarco[totalRecordsMarco.length - 1].fields['Company Region'];
            
            companyArrayMarco.push(lastItemName);
            completionDateArrayMarco.push(lastItemDateFormatted);
            submitterArrayMarco.push(lastItemSubmitter);
            builderArrayMarco.push(lastItemBuilder);
            tierArrayMarco.push(lastItemTier);
            shortnameArrayMarco.push(lastItemShortname);
            webTypeArrayMarco.push(lastItemWebType);
            companyRegionArrayMarco.push(lastCompanyRegion);
            }
            }
              } catch(err) {
                
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[4]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecordsAmaia.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Amaia++;
                  break;
                case '1':
                  tier1Amaia++;
                  break;
                case '2':
                  tier2Amaia++;
                  break;
                case '3':
                  tier3Amaia++;
                  break;
                case '4':
                  tier4Amaia++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayAmaia.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArrayAmaia.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArrayAmaia.push(completionDate);
              }

              
            let lastItemName = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
            let lastItemBuilder = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Dashboard Builder'];
            let lastItemTier = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Tier'];
            let lastItemShortname = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Shortname'];
            let lastItemWebType = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Website Type'];
            let lastCompanyRegion = totalRecordsAmaia[totalRecordsAmaia.length - 1].fields['Company Region'];
            
            
            companyArrayAmaia.push(lastItemName);
            completionDateArrayAmaia.push(lastItemDateFormatted);
            submitterArrayAmaia.push(lastItemSubmitter);
            builderArrayAmaia.push(lastItemBuilder);
            tierArrayAmaia.push(lastItemTier);
            shortnameArrayAmaia.push(lastItemShortname);
            webTypeArrayAmaia.push(lastItemWebType);
            companyRegionArrayAmaia.push(lastCompanyRegion);
            }
            }
              } catch(err) {
                
              }
              try {
            if(record.fields['Claimed By:'][0] === idArray[5]) {
                  
            if(record.fields['Completion Date']) {
              if(record === records.length -1) {
                console.log(record);
              }
                totalRecordsElly.push(record);
              switch(record.fields['Tier']){
                case '0': 
                  tier0Elly++;
                  break;
                case '1':
                  tier1Elly++;
                  break;
                case '2':
                  tier2Elly++;
                  break;
                case '3':
                  tier3Elly++;
                  break;
                case '4':
                  tier4Elly++;
                  break;
              }
              let completionDate = record.fields['Completion Date'].split('T').shift();
              totalIntegrationsArrayElly.push(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArrayElly.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArrayElly.push(completionDate);
              }

              
            let lastItemName = totalRecordsElly[totalRecordsElly.length - 1].fields['Company Name'];
            //console.log(lastItemName);
            let lastItemDate = totalRecordsElly[totalRecordsElly.length - 1].fields['Completion Date'];
            let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
            let lastItemSubmitter = totalRecordsElly[totalRecordsElly.length - 1].fields['Name of submitter'];
            //console.log(lastItemSubmitter);
            let lastItemBuilder = totalRecordsElly[totalRecordsElly.length - 1].fields['Dashboard Builder'];
            let lastItemTier = totalRecordsElly[totalRecordsElly.length - 1].fields['Tier'];
            let lastItemShortname = totalRecordsElly[totalRecordsElly.length - 1].fields['Shortname'];
            let lastItemWebType = totalRecordsElly[totalRecordsElly.length - 1].fields['Website Type'];
            let lastCompanyRegion = totalRecordsElly[totalRecordsElly.length - 1].fields['Company Region'];
            
            companyArrayElly.push(lastItemName);
            completionDateArrayElly.push(lastItemDateFormatted);
            submitterArrayElly.push(lastItemSubmitter);
            builderArrayElly.push(lastItemBuilder);
            tierArrayElly.push(lastItemTier);
            shortnameArrayElly.push(lastItemShortname);
            webTypeArrayElly.push(lastItemWebType);
            companyRegionArrayElly.push(lastCompanyRegion);
            }
            }
              } catch(err) {
                
              }
            
                  try {
                    if(record.fields['Claimed By:'][0] === idArray[6]) {
                          
                    if(record.fields['Completion Date']) {
                      if(record === records.length -1) {
                        console.log(record);
                      }
                        totalRecordsTobey.push(record);
                      switch(record.fields['Tier']){
                        case '0': 
                          tier0Tobey++;
                          break;
                        case '1':
                          tier1Tobey++;
                          break;
                        case '2':
                          tier2Tobey++;
                          break;
                        case '3':
                          tier3Tobey++;
                          break;
                        case '4':
                          tier4Tobey++;
                          break;
                      }
                      let completionDate = record.fields['Completion Date'].split('T').shift();
                      totalIntegrationsArrayTobey.push(completionDate);
                      if(completionDate === date) {          
                        dailyIntegrationsArrayTobey.push(completionDate);
                      }
                      let completionMonth = completionDate.split('-')[1];
                      if(completionMonth === month) {
                        monthlyIntegrationsArrayTobey.push(completionDate);
                      }
        
                      
                    let lastItemName = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Company Name'];
                    //console.log(lastItemName);
                    let lastItemDate = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Completion Date'];
                    let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
                    let lastItemSubmitter = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Name of submitter'];
                    //console.log(lastItemSubmitter);
                    let lastItemBuilder = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Dashboard Builder'];
                    let lastItemTier = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Tier'];
                    let lastItemShortname = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Shortname'];
                    let lastItemWebType = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Website Type'];
                    let lastCompanyRegion = totalRecordsTobey[totalRecordsTobey.length - 1].fields['Company Region'];
                    
                    companyArrayTobey.push(lastItemName);
                    completionDateArrayTobey.push(lastItemDateFormatted);
                    submitterArrayTobey.push(lastItemSubmitter);
                    builderArrayTobey.push(lastItemBuilder);
                    tierArrayTobey.push(lastItemTier);
                    shortnameArrayTobey.push(lastItemShortname);
                    webTypeArrayTobey.push(lastItemWebType);
                    companyRegionArrayTobey.push(lastCompanyRegion);
                    }
                    }
                      } catch(err) {
                        
                      }
                      try {
                        if(record.fields['Claimed By:'][0] === idArray[7]) {
                              
                        if(record.fields['Completion Date']) {
                          if(record === records.length -1) {
                            console.log(record);
                          }
                            totalRecordsJohnny.push(record);
                          switch(record.fields['Tier']){
                            case '0': 
                              tier0Johnny++;
                              break;
                            case '1':
                              tier1Johnny++;
                              break;
                            case '2':
                              tier2Johnny++;
                              break;
                            case '3':
                              tier3Johnny++;
                              break;
                            case '4':
                              tier4Johnny++;
                              break;
                          }
                          let completionDate = record.fields['Completion Date'].split('T').shift();
                          totalIntegrationsArrayJohnny.push(completionDate);
                          if(completionDate === date) {          
                            dailyIntegrationsArrayJohnny.push(completionDate);
                          }
                          let completionMonth = completionDate.split('-')[1];
                          if(completionMonth === month) {
                            monthlyIntegrationsArrayJohnny.push(completionDate);
                          }
            
                          
                        let lastItemName = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Company Name'];
                        //console.log(lastItemName);
                        let lastItemDate = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Completion Date'];
                        let lastItemDateFormatted = moment(lastItemDate).format('MMMM Do YYYY, h:mm a');
                        let lastItemSubmitter = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Name of submitter'];
                        //console.log(lastItemSubmitter);
                        let lastItemBuilder = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Dashboard Builder'];
                        let lastItemTier = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Tier'];
                        let lastItemShortname = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Shortname'];
                        let lastItemWebType = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Website Type'];
                        let lastCompanyRegion = totalRecordsJohnny[totalRecordsJohnny.length - 1].fields['Company Region'];
                        
                        companyArrayJohnny.push(lastItemName);
                        completionDateArrayJohnny.push(lastItemDateFormatted);
                        submitterArrayJohnny.push(lastItemSubmitter);
                        builderArrayJohnny.push(lastItemBuilder);
                        tierArrayJohnny.push(lastItemTier);
                        shortnameArrayJohnny.push(lastItemShortname);
                        webTypeArrayJohnny.push(lastItemWebType);
                        companyRegionArrayJohnny.push(lastCompanyRegion);
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
        let mostRecentCompanyRegion = companyRegionArray.pop();

        let colorProp = '';
        let green = '#60af64';
        let blue = '#399adb';
        let pink = '#db6280';
        switch(mostRecentCompanyRegion) {
          case 'Americas':
            colorProp = green;
            break;
          case 'EMEA':
            colorProp = blue;
            break;
          case 'APAC':
            colorProp = pink;
            break;
          default: 
            colorProp = green;
        }

        let mostRecentNameLive = companyArrayLive.pop();
        let mostRecentDateLive = completionDateArrayLive.pop();
        let mostRecentSubmitterLive = submitterArrayLive.pop();
        let mostRecentIntegrationTypeLive = integrationTypeArrayLive.pop();
        let mostRecentTierLive = tierArrayLive.pop();
        let mostRecentShortnameLive = shortnameArrayLive.pop();
        let mostRecentWebTypeLive = webTypeArrayLive.pop();
        let mostRecentCompanyRegionLive = companyRegionArrayLive.pop();

        let colorPropLive = '';
        switch(mostRecentCompanyRegionLive) {
          case 'Americas':
            colorPropLive = green;
            break;
          case 'EMEA':
            colorPropLive = blue;
            break;
          case 'APAC':
            colorPropLive = pink;
            break;
          default: 
            colorPropLive = green;
        }

        let mostRecentNameNeubs = companyArrayNeubs.pop();  
        let mostRecentDateNeubs = completionDateArrayNeubs.pop();
        let mostRecentSubmitterNeubs = submitterArrayNeubs.pop();
        let mostRecentBuilderNeubs = builderArrayNeubs.pop();
        let mostRecentTierNeubs = tierArrayNeubs.pop();
        let mostRecentShortnameNeubs = shortnameArrayNeubs.pop();
        let mostRecentWebTypeNeubs = webTypeArrayNeubs.pop();
        let mostRecentCompanyRegionNeubs = companyRegionArrayNeubs.pop();

        let colorPropNeubs = '';
        switch(mostRecentCompanyRegionNeubs) {
          case 'Americas':
            colorPropNeubs = green;
            break;
          case 'EMEA':
            colorPropNeubs = blue;
            break;
          case 'APAC':
            colorPropNeubs = pink;
            break;
          default: 
            colorPropNeubs = green;
        }

        let mostRecentNameLiveNeubs = companyArrayLiveNeubs.pop();
        let mostRecentDateLiveNeubs = completionDateArrayLiveNeubs.pop();
        let mostRecentSubmitterLiveNeubs = submitterArrayLiveNeubs.pop();
        let mostRecentIntegrationTypeLiveNeubs = integrationTypeArrayLiveNeubs.pop();
        let mostRecentTierLiveNeubs = tierArrayLiveNeubs.pop();
        let mostRecentShortnameLiveNeubs = shortnameArrayLiveNeubs.pop();
        let mostRecentWebTypeLiveNeubs = webTypeArrayLiveNeubs.pop();
        let mostRecentCompanyRegionLiveNeubs = companyRegionArrayLiveNeubs.pop();

        let colorPropLiveNeubs = '';
        switch(mostRecentCompanyRegionLiveNeubs) {
          case 'Americas':
            colorPropLiveNeubs = green;
            break;
          case 'EMEA':
            colorPropLiveNeubs = blue;
            break;
          case 'APAC':
            colorPropLiveNeubs = pink;
            break;
          default: 
            colorPropLiveNeubs = green;
        }
        
        let mostRecentNameZack = companyArrayZack.pop();  
        let mostRecentDateZack = completionDateArrayZack.pop();
        let mostRecentSubmitterZack = submitterArrayZack.pop();
        let mostRecentBuilderZack = builderArrayZack.pop();
        let mostRecentTierZack = tierArrayZack.pop();
        let mostRecentShortnameZack = shortnameArrayZack.pop();
        let mostRecentWebTypeZack = webTypeArrayZack.pop();
        let mostRecentCompanyRegionZack = companyRegionArrayZack.pop();

        let colorPropZack = '';
        switch(mostRecentCompanyRegionZack) {
          case 'Americas':
            colorPropZack = green;
            break;
          case 'EMEA':
            colorPropZack = blue;
            break;
          case 'APAC':
            colorPropZack = pink;
            break;
          default: 
            colorPropZack = green;
        }

        let mostRecentNameLiveZack = companyArrayLiveZack.pop();
        let mostRecentDateLiveZack = completionDateArrayLiveZack.pop();
        let mostRecentSubmitterLiveZack = submitterArrayLiveZack.pop();
        let mostRecentIntegrationTypeLiveZack = integrationTypeArrayLiveZack.pop();
        let mostRecentTierLiveZack = tierArrayLiveZack.pop();
        let mostRecentShortnameLiveZack = shortnameArrayLiveZack.pop();
        let mostRecentWebTypeLiveZack = webTypeArrayLiveZack.pop();
        let mostRecentCompanyRegionLiveZack = companyRegionArrayLiveZack.pop();

        let colorPropLiveZack = '';
        switch(mostRecentCompanyRegionLiveZack) {
          case 'Americas':
            colorPropLiveZack = green;
            break;
          case 'EMEA':
            colorPropLiveZack = blue;
            break;
          case 'APAC':
            colorPropLiveZack = pink;
            break;
          default: 
            colorPropLiveZack = green;
        }

        let mostRecentNameMarco = companyArrayMarco.pop();  
        let mostRecentDateMarco = completionDateArrayMarco.pop();
        let mostRecentSubmitterMarco = submitterArrayMarco.pop();
        let mostRecentBuilderMarco = builderArrayMarco.pop();
        let mostRecentTierMarco = tierArrayMarco.pop();
        let mostRecentShortnameMarco = shortnameArrayMarco.pop();
        let mostRecentWebTypeMarco = webTypeArrayMarco.pop();
        let mostRecentCompanyRegionMarco = companyRegionArrayMarco.pop();

        let colorPropMarco = '';
        switch(mostRecentCompanyRegionMarco) {
          case 'Americas':
            colorPropMarco = green;
            break;
          case 'EMEA':
            colorPropMarco = blue;
            break;
          case 'APAC':
            colorPropMarco = pink;
            break;
          default: 
            colorPropMarco = green;
        }

        let mostRecentNameLiveMarco = companyArrayLiveMarco.pop();
        let mostRecentDateLiveMarco = completionDateArrayLiveMarco.pop();
        let mostRecentSubmitterLiveMarco = submitterArrayLiveMarco.pop();
        let mostRecentIntegrationTypeLiveMarco = integrationTypeArrayLiveMarco.pop();
        let mostRecentTierLiveMarco = tierArrayLiveMarco.pop();
        let mostRecentShortnameLiveMarco = shortnameArrayLiveMarco.pop();
        let mostRecentWebTypeLiveMarco = webTypeArrayLiveMarco.pop();
        let mostRecentCompanyRegionLiveMarco = companyRegionArrayLiveMarco.pop();

        let colorPropLiveMarco = '';
        switch(mostRecentCompanyRegionLiveMarco) {
          case 'Americas':
            colorPropLiveMarco = green;
            break;
          case 'EMEA':
            colorPropLiveMarco = blue;
            break;
          case 'APAC':
            colorPropLiveMarco = pink;
            break;
          default: 
            colorPropLiveMarco = green;
        }

        let mostRecentNameAmaia= companyArrayAmaia.pop();  
        let mostRecentDateAmaia = completionDateArrayAmaia.pop();
        let mostRecentSubmitterAmaia = submitterArrayAmaia.pop();
        let mostRecentBuilderAmaia = builderArrayAmaia.pop();
        let mostRecentTierAmaia = tierArrayAmaia.pop();
        let mostRecentShortnameAmaia = shortnameArrayAmaia.pop();
        let mostRecentWebTypeAmaia = webTypeArrayAmaia.pop();
        let mostRecentCompanyRegionAmaia = companyRegionArrayAmaia.pop();

        let colorPropAmaia = '';
        switch(mostRecentCompanyRegionAmaia) {
          case 'Americas':
            colorPropAmaia = green;
            break;
          case 'EMEA':
            colorPropAmaia = blue;
            break;
          case 'APAC':
            colorPropAmaia = pink;
            break;
          default: 
            colorPropAmaia = green;
        }

        console.log(colorPropAmaia);

        let mostRecentNameLiveAmaia = companyArrayLiveAmaia.pop();
        let mostRecentDateLiveAmaia = completionDateArrayLiveAmaia.pop();
        let mostRecentSubmitterLiveAmaia = submitterArrayLiveAmaia.pop();
        let mostRecentIntegrationTypeLiveAmaia = integrationTypeArrayLiveAmaia.pop();
        let mostRecentTierLiveAmaia = tierArrayLiveAmaia.pop();
        let mostRecentShortnameLiveAmaia = shortnameArrayLiveAmaia.pop();
        let mostRecentWebTypeLiveAmaia = webTypeArrayLiveAmaia.pop();
        let mostRecentCompanyRegionLiveAmaia = companyRegionArrayLiveAmaia.pop();

        let colorPropLiveAmaia = '';
        switch(mostRecentCompanyRegionLiveAmaia) {
          case 'Americas':
            colorPropLiveAmaia = green;
            break;
          case 'EMEA':
            colorPropLiveAmaia = blue;
            break;
          case 'APAC':
            colorPropLiveAmaia = pink;
            break;
          default: 
            colorPropLiveAmaia = green;
        }

        let mostRecentNameElly = companyArrayElly.pop();  
        let mostRecentDateElly = completionDateArrayElly.pop();
        let mostRecentSubmitterElly = submitterArrayElly.pop();
        let mostRecentBuilderElly = builderArrayElly.pop();
        let mostRecentTierElly = tierArrayElly.pop();
        let mostRecentShortnameElly = shortnameArrayElly.pop();
        let mostRecentWebTypeElly = webTypeArrayElly.pop();
        let mostRecentCompanyRegionElly = companyRegionArrayElly.pop();

        let colorPropElly = '';
        switch(mostRecentCompanyRegionElly) {
          case 'Americas':
            colorPropElly = green;
            break;
          case 'EMEA':
            colorPropElly = blue;
            break;
          case 'APAC':
            colorPropElly = pink;
            break;
          default: 
            colorPropElly = green;
        }

        let mostRecentNameLiveElly = companyArrayLiveElly.pop();
        let mostRecentDateLiveElly = completionDateArrayLiveElly.pop();
        let mostRecentSubmitterLiveElly = submitterArrayLiveElly.pop();
        let mostRecentIntegrationTypeLiveElly = integrationTypeArrayLiveElly.pop();
        let mostRecentTierLiveElly = tierArrayLiveElly.pop();
        let mostRecentShortnameLiveElly = shortnameArrayLiveElly.pop();
        let mostRecentWebTypeLiveElly = webTypeArrayLiveElly.pop();
        let mostRecentCompanyRegionLiveElly = companyRegionArrayLiveElly.pop();

        let colorPropLiveElly = '';
        switch(mostRecentCompanyRegionLiveElly) {
          case 'Americas':
            colorPropLiveElly = green;
            break;
          case 'EMEA':
            colorPropLiveElly = blue;
            break;
          case 'APAC':
            colorPropLiveElly = pink;
            break;
          default: 
            colorPropLiveElly = green;
        }

        let mostRecentNameTobey = companyArrayTobey.pop();  
        let mostRecentDateTobey = completionDateArrayTobey.pop();
        let mostRecentSubmitterTobey = submitterArrayTobey.pop();
        let mostRecentBuilderTobey = builderArrayTobey.pop();
        let mostRecentTierTobey = tierArrayTobey.pop();
        let mostRecentShortnameTobey = shortnameArrayTobey.pop();
        let mostRecentWebTypeTobey = webTypeArrayTobey.pop();
        let mostRecentCompanyRegionTobey = companyRegionArrayTobey.pop();

        let colorPropTobey = '';
        switch(mostRecentCompanyRegionTobey) {
          case 'Americas':
            colorPropTobey = green;
            break;
          case 'EMEA':
            colorPropTobey = blue;
            break;
          case 'APAC':
            colorPropTobey = pink;
            break;
          default: 
          colorPropTobey = green;
        }

        let mostRecentNameLiveTobey = companyArrayLiveTobey.pop();
        let mostRecentDateLiveTobey = completionDateArrayLiveTobey.pop();
        let mostRecentSubmitterLiveTobey = submitterArrayLiveTobey.pop();
        let mostRecentIntegrationTypeLiveTobey = integrationTypeArrayLiveTobey.pop();
        let mostRecentTierLiveTobey = tierArrayLiveTobey.pop();
        let mostRecentShortnameLiveTobey = shortnameArrayLiveTobey.pop();
        let mostRecentWebTypeLiveTobey = webTypeArrayLiveTobey.pop();
        let mostRecentCompanyRegionLiveTobey = companyRegionArrayLiveTobey.pop();

        let colorPropLiveTobey = '';
        switch(mostRecentCompanyRegionLiveTobey) {
          case 'Americas':
            colorPropLiveTobey = green;
            break;
          case 'EMEA':
            colorPropLiveTobey = blue;
            break;
          case 'APAC':
            colorPropLiveTobey = pink;
            break;
          default: 
          colorPropLiveTobey = green;
        }

        let mostRecentNameJohnny = companyArrayJohnny.pop();  
        let mostRecentDateJohnny = completionDateArrayJohnny.pop();
        let mostRecentSubmitterJohnny = submitterArrayJohnny.pop();
        let mostRecentBuilderJohnny = builderArrayJohnny.pop();
        let mostRecentTierJohnny = tierArrayJohnny.pop();
        let mostRecentShortnameJohnny = shortnameArrayJohnny.pop();
        let mostRecentWebTypeJohnny = webTypeArrayJohnny.pop();
        let mostRecentCompanyRegionJohnny = companyRegionArrayJohnny.pop();

        let colorPropJohnny = '';
        switch(mostRecentCompanyRegionJohnny) {
          case 'Americas':
            colorPropJohnny = green;
            break;
          case 'EMEA':
            colorPropJohnny = blue;
            break;
          case 'APAC':
            colorPropJohnny = pink;
            break;
          default: 
          colorPropJohnny = green;
        }

        let mostRecentNameLiveJohnny = companyArrayLiveJohnny.pop();
        let mostRecentDateLiveJohnny = completionDateArrayLiveJohnny.pop();
        let mostRecentSubmitterLiveJohnny = submitterArrayLiveJohnny.pop();
        let mostRecentIntegrationTypeLiveJohnny = integrationTypeArrayLiveJohnny.pop();
        let mostRecentTierLiveJohnny = tierArrayLiveJohnny.pop();
        let mostRecentShortnameLiveJohnny = shortnameArrayLiveJohnny.pop();
        let mostRecentWebTypeLiveJohnny = webTypeArrayLiveJohnny.pop();
        let mostRecentCompanyRegionLiveJohnny = companyRegionArrayLiveJohnny.pop();

        let colorPropLiveJohnny = '';
        switch(mostRecentCompanyRegionLiveJohnny) {
          case 'Americas':
            colorPropLiveJohnny = green;
            break;
          case 'EMEA':
            colorPropLiveJohnny = blue;
            break;
          case 'APAC':
            colorPropLiveJohnny = pink;
            break;
          default: 
          colorPropLiveJohnny = green;
        }
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
              mostRecentCompanyRegion: mostRecentCompanyRegion,
              colorProp: colorProp,
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
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLive,
              mostRecentTierLive: mostRecentTierLive,
              mostRecentShortnameLive: mostRecentShortnameLive,
              mostRecentWebTypeLive: mostRecentWebTypeLive,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLive,
              colorProp: colorPropLive,
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
              manager: 'Raleigh',
              teamLead: 'neubs'
            
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
              mostRecentCompanyRegion: mostRecentCompanyRegionNeubs,
              colorProp: colorPropNeubs,
              tier0: tier0Neubs,
              tier1: tier1Neubs,
              tier2: tier2Neubs,
              tier3: tier3Neubs,
              tier4: tier4Neubs,
            },
            live: {
              total: totalIntegrationsArrayLiveNeubs.length,
              monthly:  monthlyIntegrationsArrayLiveNeubs.length,
              daily: dailyIntegrationsArrayLiveNeubs.length,
              mostRecentNameLive: mostRecentNameLiveNeubs,
              mostRecentDateLive: mostRecentDateLiveNeubs,
              mostRecentSubmitterLive: mostRecentSubmitterLiveNeubs,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveNeubs,
              mostRecentTierLive: mostRecentTierLiveNeubs,
              mostRecentShortnameLive: mostRecentShortnameLiveNeubs,
              mostRecentWebTypeLive: mostRecentWebTypeLiveNeubs,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveNeubs,
              colorProp: colorPropLiveNeubs,
              tier0Live: tier0LiveNeubs,
              tier1Live: tier1LiveNeubs,
              tier2Live: tier2LiveNeubs,
              tier3Live: tier3LiveNeubs,
              tier4Live: tier4LiveNeubs,
            },
            info:{
              name: 'Alex Neubauer',
              image: neubsImage,
              title: 'Enterprise Integrations',
              slack: 'neubs',
              timezone: 'Mountain',
              phone: '615-354-4808',
              email: 'alex@fareharbor.com',
              office: 'Denver',
              manager: 'Raleigh Caruso'
            
            }
          },
          zack: {
            records: {
              monthly: monthlyIntegrationsArrayZack.length,
              daily: dailyIntegrationsArrayZack.length,
              total: totalIntegrationsArrayZack.length,
              mostRecentName: mostRecentNameZack,
              mostRecentDate: mostRecentDateZack,
              mostRecentSubmitter: mostRecentSubmitterZack,
              mostRecentBuilder: mostRecentBuilderZack,
              mostRecentTier: mostRecentTierZack,
              mostRecentShortname: mostRecentShortnameZack,
              mostRecentWebType: mostRecentWebTypeZack,
              mostRecentCompanyRegion: mostRecentCompanyRegionZack,
              colorProp: colorPropZack,
              tier0: tier0Zack,
              tier1: tier1Zack,
              tier2: tier2Zack,
              tier3: tier3Zack,
              tier4: tier4Zack,
            },
            live: {
              total: totalIntegrationsArrayLiveZack.length,
              monthly:  monthlyIntegrationsArrayLiveZack.length,
              daily: dailyIntegrationsArrayLiveZack.length,
              mostRecentNameLive: mostRecentNameLiveZack,
              mostRecentDateLive: mostRecentDateLiveZack,
              mostRecentSubmitterLive: mostRecentSubmitterLiveZack,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveZack,
              mostRecentTierLive: mostRecentTierLiveZack,
              mostRecentShortnameLive: mostRecentShortnameLiveZack,
              mostRecentWebTypeLive: mostRecentWebTypeLiveZack,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveZack,
              colorProp: colorPropLiveZack,
              tier0Live: tier0LiveZack,
              tier1Live: tier1LiveZack,
              tier2Live: tier2LiveZack,
              tier3Live: tier3LiveZack,
              tier4Live: tier4LiveZack,
            },
            info:{
              name: 'Zack Feld',
              image: zackImage,
              title: 'Special Big Helper',
              slack: 'zackf',
              timezone: 'Mountain',
              phone: '847-912-1215',
              email: 'zack@fareharbor.com',
              office: 'Denver',
              manager: 'Mark Loh'
            
            }
          },
          marco: {
            records: {
              monthly: monthlyIntegrationsArrayMarco.length,
              daily: dailyIntegrationsArrayMarco.length,
              total: totalIntegrationsArrayMarco.length,
              mostRecentName: mostRecentNameMarco,
              mostRecentDate: mostRecentDateMarco,
              mostRecentSubmitter: mostRecentSubmitterMarco,
              mostRecentBuilder: mostRecentBuilderMarco,
              mostRecentTier: mostRecentTierMarco,
              mostRecentShortname: mostRecentShortnameMarco,
              mostRecentWebType: mostRecentWebTypeMarco,
              mostRecentCompanyRegion: mostRecentCompanyRegionMarco,
              colorProp: colorPropMarco,
              tier0: tier0Marco,
              tier1: tier1Marco,
              tier2: tier2Marco,
              tier3: tier3Marco,
              tier4: tier4Marco,
            },
            live: {
              total: totalIntegrationsArrayLiveMarco.length,
              monthly:  monthlyIntegrationsArrayLiveMarco.length,
              daily: dailyIntegrationsArrayLiveMarco.length,
              mostRecentNameLive: mostRecentNameLiveMarco,
              mostRecentDateLive: mostRecentDateLiveMarco,
              mostRecentSubmitterLive: mostRecentSubmitterLiveMarco,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveMarco,
              mostRecentTierLive: mostRecentTierLiveMarco,
              mostRecentShortnameLive: mostRecentShortnameLiveMarco,
              mostRecentWebTypeLive: mostRecentWebTypeLiveMarco,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveMarco,
              colorProp: colorPropLiveMarco,
              tier0Live: tier0LiveMarco,
              tier1Live: tier1LiveMarco,
              tier2Live: tier2LiveMarco,
              tier3Live: tier3LiveMarco,
              tier4Live: tier4LiveMarco,
            },
            info:{
              name: 'Marco Depperu',
              image: marcoImage,
              title: 'Integrations Specialist',
              slack: 'mdepperu',
              timezone: 'Central European Summer Time',
              phone: '0686423460',
              email: 'marco.depperu@fareharbor.com',
              office: 'Amsterdam',
              manager: 'Michael Klempner'
            
            }
          },
          amaia: {
            records: {
              monthly: monthlyIntegrationsArrayAmaia.length,
              daily: dailyIntegrationsArrayAmaia.length,
              total: totalIntegrationsArrayAmaia.length,
              mostRecentName: mostRecentNameAmaia,
              mostRecentDate: mostRecentDateAmaia,
              mostRecentSubmitter: mostRecentSubmitterAmaia,
              mostRecentBuilder: mostRecentBuilderAmaia,
              mostRecentTier: mostRecentTierAmaia,
              mostRecentShortname: mostRecentShortnameAmaia,
              mostRecentWebType: mostRecentWebTypeAmaia,
              mostRecentCompanyRegion: mostRecentCompanyRegionAmaia,
              colorProp: colorPropAmaia,
              tier0: tier0Amaia,
              tier1: tier1Amaia,
              tier2: tier2Amaia,
              tier3: tier3Amaia,
              tier4: tier4Amaia,
            },
            live: {
              total: totalIntegrationsArrayLiveAmaia.length,
              monthly:  monthlyIntegrationsArrayLiveAmaia.length,
              daily: dailyIntegrationsArrayLiveAmaia.length,
              mostRecentNameLive: mostRecentNameLiveAmaia,
              mostRecentDateLive: mostRecentDateLiveAmaia,
              mostRecentSubmitterLive: mostRecentSubmitterLiveAmaia,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveAmaia,
              mostRecentTierLive: mostRecentTierLiveAmaia,
              mostRecentShortnameLive: mostRecentShortnameLiveAmaia,
              mostRecentWebTypeLive: mostRecentWebTypeLiveAmaia,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveAmaia,
              colorProp: colorPropLiveAmaia,
              tier0Live: tier0LiveAmaia,
              tier1Live: tier1LiveAmaia,
              tier2Live: tier2LiveAmaia,
              tier3Live: tier3LiveAmaia,
              tier4Live: tier4LiveAmaia
            },
            info:{
              name: 'Amaia Ibarra',
              image: amaiaImage,
              title: 'Integrations Specialist',
              slack: 'amaia',
              timezone: 'Central European Summer Time',
              phone: '34615711333',
              email: 'amaia.ibarra@fareharbor.com',
              office: 'Amsterdam',
              manager: 'Michael Klempner'
            
            }
          },
          elly: {
            records: {
              monthly: monthlyIntegrationsArrayElly.length,
              daily: dailyIntegrationsArrayElly.length,
              total: totalIntegrationsArrayElly.length,
              mostRecentName: mostRecentNameElly,
              mostRecentDate: mostRecentDateElly,
              mostRecentSubmitter: mostRecentSubmitterElly,
              mostRecentBuilder: mostRecentBuilderElly,
              mostRecentTier: mostRecentTierElly,
              mostRecentShortname: mostRecentShortnameElly,
              mostRecentWebType: mostRecentWebTypeElly,
              mostRecentCompanyRegion: mostRecentCompanyRegionElly,
              colorProp: colorPropElly,
              tier0: tier0Elly,
              tier1: tier1Elly,
              tier2: tier2Elly,
              tier3: tier3Elly,
              tier4: tier4Elly,
            },
            live: {
              total: totalIntegrationsArrayLiveElly.length,
              monthly:  monthlyIntegrationsArrayLiveElly.length,
              daily: dailyIntegrationsArrayLiveElly.length,
              mostRecentNameLive: mostRecentNameLiveElly,
              mostRecentDateLive: mostRecentDateLiveElly,
              mostRecentSubmitterLive: mostRecentSubmitterLiveElly,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveElly,
              mostRecentTierLive: mostRecentTierLiveElly,
              mostRecentShortnameLive: mostRecentShortnameLiveElly,
              mostRecentWebTypeLive: mostRecentWebTypeLiveElly,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveElly,
              colorProp: colorPropLiveElly,
              tier0Live: tier0LiveElly,
              tier1Live: tier1LiveElly,
              tier2Live: tier2LiveElly,
              tier3Live: tier3LiveElly,
              tier4Live: tier4LiveElly
            },
            info:{
              name: 'Nallely Torres',
              image: ellyImage,
              title: 'Integrations Specialist',
              slack: 'elly',
              timezone: 'Mountain',
              phone: '720-380-3867',
              email: 'nallely.torres@fareharbor.com',
              office: 'Denver',
              manager: 'Raleigh',
              teamLead: 'Neubs'
            
            }
          },
          tobey: {
            records: {
              monthly: monthlyIntegrationsArrayTobey.length,
              daily: dailyIntegrationsArrayTobey.length,
              total: totalIntegrationsArrayTobey.length,
              mostRecentName: mostRecentNameTobey,
              mostRecentDate: mostRecentDateTobey,
              mostRecentSubmitter: mostRecentSubmitterTobey,
              mostRecentBuilder: mostRecentBuilderTobey,
              mostRecentTier: mostRecentTierTobey,
              mostRecentShortname: mostRecentShortnameTobey,
              mostRecentWebType: mostRecentWebTypeTobey,
              mostRecentCompanyRegion: mostRecentCompanyRegionTobey,
              colorProp: colorPropTobey,
              tier0: tier0Tobey,
              tier1: tier1Tobey,
              tier2: tier2Tobey,
              tier3: tier3Tobey,
              tier4: tier4Tobey,
            },
            live: {
              total: totalIntegrationsArrayLiveTobey.length,
              monthly:  monthlyIntegrationsArrayLiveTobey.length,
              daily: dailyIntegrationsArrayLiveTobey.length,
              mostRecentNameLive: mostRecentNameLiveTobey,
              mostRecentDateLive: mostRecentDateLiveTobey,
              mostRecentSubmitterLive: mostRecentSubmitterLiveTobey,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveTobey,
              mostRecentTierLive: mostRecentTierLiveTobey,
              mostRecentShortnameLive: mostRecentShortnameLiveTobey,
              mostRecentWebTypeLive: mostRecentWebTypeLiveTobey,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveTobey,
              colorProp: colorPropLiveTobey,
              tier0Live: tier0LiveTobey,
              tier1Live: tier1LiveTobey,
              tier2Live: tier2LiveTobey,
              tier3Live: tier3LiveTobey,
              tier4Live: tier4LiveTobey
            },
            info:{
              name: 'Tobey Ross',
              image: tobeyImage,
              title: 'Integrations Specialist',
              slack: 'tobez',
              timezone: 'Mountain',
              phone: '512-529-6783',
              email: 'tobey.ross@fareharbor.com',
              office: 'Denver',
              manager: 'Raleigh',
              teamLead: 'Neubs'
            
            }
          },
          johnny: {
            records: {
              monthly: monthlyIntegrationsArrayJohnny.length,
              daily: dailyIntegrationsArrayJohnny.length,
              total: totalIntegrationsArrayJohnny.length,
              mostRecentName: mostRecentNameJohnny,
              mostRecentDate: mostRecentDateJohnny,
              mostRecentSubmitter: mostRecentSubmitterJohnny,
              mostRecentBuilder: mostRecentBuilderJohnny,
              mostRecentTier: mostRecentTierJohnny,
              mostRecentShortname: mostRecentShortnameJohnny,
              mostRecentWebType: mostRecentWebTypeJohnny,
              mostRecentCompanyRegion: mostRecentCompanyRegionJohnny,
              colorProp: colorPropJohnny,
              tier0: tier0Johnny,
              tier1: tier1Johnny,
              tier2: tier2Johnny,
              tier3: tier3Johnny,
              tier4: tier4Johnny,
            },
            live: {
              total: totalIntegrationsArrayLiveJohnny.length,
              monthly:  monthlyIntegrationsArrayLiveJohnny.length,
              daily: dailyIntegrationsArrayLiveJohnny.length,
              mostRecentNameLive: mostRecentNameLiveJohnny,
              mostRecentDateLive: mostRecentDateLiveJohnny,
              mostRecentSubmitterLive: mostRecentSubmitterLiveJohnny,
              mostRecentIntegrationTypeLive: mostRecentIntegrationTypeLiveJohnny,
              mostRecentTierLive: mostRecentTierLiveJohnny,
              mostRecentShortnameLive: mostRecentShortnameLiveJohnny,
              mostRecentWebTypeLive: mostRecentWebTypeLiveJohnny,
              mostRecentCompanyRegionLive: mostRecentCompanyRegionLiveJohnny,
              colorProp: colorPropLiveJohnny,
              tier0Live: tier0LiveJohnny,
              tier1Live: tier1LiveJohnny,
              tier2Live: tier2LiveJohnny,
              tier3Live: tier3LiveJohnny,
              tier4Live: tier4LiveJohnny
            },
            info:{
              name: 'Johnny Garcia',
              image: johnnyImage,
              title: 'Integrations Specialist',
              slack: 'johnnyboy',
              timezone: 'Mountain',
              phone: '303-514-1387',
              email: 'johnny.garcia@fareharbor.com',
              office: 'Denver',
              manager: 'Raleigh Caruso',
              teamLead:'Neubs'
            }
          }
        
        })
        
        
    }, 12000);

  }

loadOBRecords();
 

}
render() {

  return (
    <div className="App">
    {this.state.loading ? <LoadingSpinner /> :
    <div>
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainHeading>Airtable Metrics Dashboard</MainHeading>
      </div>
         <AppContainer>
            <Container>
              <Integrator name={this.state.patrick.info.name} image={this.state.patrick.info.image} 
             title={this.state.patrick.info.title} slack={this.state.patrick.info.slack} timezone={this.state.patrick.info.timezone}
             phone={this.state.patrick.info.phone} email={this.state.patrick.info.email} office={this.state.patrick.info.office} 
             manager={this.state.patrick.info.manager}  total={this.state.patrick.records.total} monthly={this.state.patrick.records.monthly}
             daily={this.state.patrick.records.daily} mostRecentName={this.state.patrick.records.mostRecentName} mostRecentDate={this.state.patrick.records.mostRecentDate}
             mostRecentSubmitter={this.state.patrick.records.mostRecentSubmitter} mostRecentBuilder={this.state.patrick.records.mostRecentBuilder}
             mostRecentTier={this.state.patrick.records.mostRecentTier} mostRecentShortname={this.state.patrick.records.mostRecentShortname}
             mostRecentWebType={this.state.patrick.records.mostRecentWebType} mostRecentCompanyRegion={this.state.patrick.records.mostRecentCompanyRegion} 
             colorProp={this.state.patrick.records.colorProp} totalLive={this.state.patrick.live.total} monthlyLive={this.state.patrick.live.monthly}
             dailyLive={this.state.patrick.live.daily} mostRecentNameLive={this.state.patrick.live.mostRecentNameLive} mostRecentDateLive={this.state.patrick.live.mostRecentDateLive}
             mostRecentSubmitterLive={this.state.patrick.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.patrick.live.mostRecentIntegrationTypeLive}
             mostRecentTierLive={this.state.patrick.live.mostRecentTierLive} mostRecentShortnameLive={this.state.patrick.live.mostRecentShortnameLive}
             mostRecentWebTypeLive={this.state.patrick.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.patrick.live.mostRecentCompanyRegionLive} 
             colorPropLive={this.state.patrick.live.colorProp} tier0={this.state.patrick.records.tier0} tier1={this.state.patrick.records.tier1}
             tier2={this.state.patrick.records.tier2} tier3={this.state.patrick.records.tier3} tier4={this.state.patrick.records.tier4} 
             tier0Live={this.state.patrick.live.tier0Live} tier1Live={this.state.patrick.live.tier1Live}
             tier2Live={this.state.patrick.live.tier2Live} tier3Live={this.state.patrick.live.tier3Live} tier4Live={this.state.patrick.live.tier4Live}/> 
           </Container>
           <Container>
              <Integrator name={this.state.amaia.info.name} image={this.state.amaia.info.image} 
                title={this.state.amaia.info.title} slack={this.state.amaia.info.slack} timezone={this.state.amaia.info.timezone}
                phone={this.state.amaia.info.phone} email={this.state.amaia.info.email} office={this.state.amaia.info.office} 
                manager={this.state.amaia.info.manager}  total={this.state.amaia.records.total} monthly={this.state.amaia.records.monthly}
                daily={this.state.amaia.records.daily} mostRecentName={this.state.amaia.records.mostRecentName} mostRecentDate={this.state.amaia.records.mostRecentDate}
                mostRecentSubmitter={this.state.amaia.records.mostRecentSubmitter} mostRecentBuilder={this.state.amaia.records.mostRecentBuilder}
                mostRecentTier={this.state.amaia.records.mostRecentTier} mostRecentShortname={this.state.amaia.records.mostRecentShortname}
                mostRecentWebType={this.state.amaia.records.mostRecentWebType} mostRecentCompanyRegion={this.state.amaia.records.mostRecentCompanyRegion} 
                colorProp={this.state.amaia.records.colorProp} totalLive={this.state.amaia.live.total} monthlyLive={this.state.amaia.live.monthly}
                dailyLive={this.state.amaia.live.daily} mostRecentNameLive={this.state.amaia.live.mostRecentNameLive} mostRecentDateLive={this.state.amaia.live.mostRecentDateLive}
                mostRecentSubmitterLive={this.state.amaia.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.amaia.live.mostRecentIntegrationTypeLive}
                mostRecentTierLive={this.state.amaia.live.mostRecentTierLive} mostRecentShortnameLive={this.state.amaia.live.mostRecentShortnameLive}
                mostRecentWebTypeLive={this.state.amaia.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.amaia.live.mostRecentCompanyRegionLive} 
                colorPropLive={this.state.amaia.live.colorProp} tier0={this.state.amaia.records.tier0} tier1={this.state.amaia.records.tier1}
                tier2={this.state.amaia.records.tier2} tier3={this.state.amaia.records.tier3} tier4={this.state.amaia.records.tier4} 
                tier0Live={this.state.amaia.live.tier0Live} tier1Live={this.state.amaia.live.tier1Live}
                tier2Live={this.state.amaia.live.tier2Live} tier3Live={this.state.amaia.live.tier3Live} tier4Live={this.state.amaia.live.tier4Live}/>
            </Container>
           <Container>
           <Integrator name={this.state.neubs.info.name} image={this.state.neubs.info.image} 
             title={this.state.neubs.info.title} slack={this.state.neubs.info.slack} timezone={this.state.neubs.info.timezone}
             phone={this.state.neubs.info.phone} email={this.state.neubs.info.email} office={this.state.neubs.info.office} 
             manager={this.state.neubs.info.manager}  total={this.state.neubs.records.total} monthly={this.state.neubs.records.monthly}
             daily={this.state.neubs.records.daily} mostRecentName={this.state.neubs.records.mostRecentName} mostRecentDate={this.state.neubs.records.mostRecentDate}
             mostRecentSubmitter={this.state.neubs.records.mostRecentSubmitter} mostRecentBuilder={this.state.neubs.records.mostRecentBuilder}
             mostRecentTier={this.state.neubs.records.mostRecentTier} mostRecentShortname={this.state.neubs.records.mostRecentShortname}
             mostRecentWebType={this.state.neubs.records.mostRecentWebType} mostRecentCompanyRegion={this.state.neubs.records.mostRecentCompanyRegion} 
             colorProp={this.state.neubs.records.colorProp} totalLive={this.state.neubs.live.total} monthlyLive={this.state.neubs.live.monthly}
             dailyLive={this.state.neubs.live.daily} mostRecentNameLive={this.state.neubs.live.mostRecentNameLive} mostRecentDateLive={this.state.neubs.live.mostRecentDateLive}
             mostRecentSubmitterLive={this.state.neubs.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.neubs.live.mostRecentIntegrationTypeLive}
             mostRecentTierLive={this.state.neubs.live.mostRecentTierLive} mostRecentShortnameLive={this.state.neubs.live.mostRecentShortnameLive}
             mostRecentWebTypeLive={this.state.neubs.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.neubs.live.mostRecentCompanyRegionLive} 
             colorPropLive={this.state.neubs.live.colorProp}tier0={this.state.neubs.records.tier0} tier1={this.state.neubs.records.tier1}
             tier2={this.state.neubs.records.tier2} tier3={this.state.neubs.records.tier3} tier4={this.state.neubs.records.tier4} 
             tier0Live={this.state.neubs.live.tier0Live} tier1Live={this.state.neubs.live.tier1Live}
             tier2Live={this.state.neubs.live.tier2Live} tier3Live={this.state.neubs.live.tier3Live} tier4Live={this.state.neubs.live.tier4Live}/>
            </Container>
            
            <Container>
              <Integrator name={this.state.marco.info.name} image={this.state.marco.info.image} 
                title={this.state.marco.info.title} slack={this.state.marco.info.slack} timezone={this.state.marco.info.timezone}
                phone={this.state.marco.info.phone} email={this.state.marco.info.email} office={this.state.marco.info.office} 
                manager={this.state.marco.info.manager}  total={this.state.marco.records.total} monthly={this.state.marco.records.monthly}
                daily={this.state.marco.records.daily} mostRecentName={this.state.marco.records.mostRecentName} mostRecentDate={this.state.marco.records.mostRecentDate}
                mostRecentSubmitter={this.state.marco.records.mostRecentSubmitter} mostRecentBuilder={this.state.marco.records.mostRecentBuilder}
                mostRecentTier={this.state.marco.records.mostRecentTier} mostRecentShortname={this.state.marco.records.mostRecentShortname}
                mostRecentWebType={this.state.marco.records.mostRecentWebType} mostRecentCompanyRegion={this.state.marco.records.mostRecentCompanyRegion} 
                colorProp={this.state.marco.records.colorProp} totalLive={this.state.marco.live.total} monthlyLive={this.state.marco.live.monthly}
                dailyLive={this.state.marco.live.daily} mostRecentNameLive={this.state.marco.live.mostRecentNameLive} mostRecentDateLive={this.state.marco.live.mostRecentDateLive}
                mostRecentSubmitterLive={this.state.marco.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.marco.live.mostRecentIntegrationTypeLive}
                mostRecentTierLive={this.state.marco.live.mostRecentTierLive} mostRecentShortnameLive={this.state.marco.live.mostRecentShortnameLive}
                mostRecentWebTypeLive={this.state.marco.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.marco.live.mostRecentCompanyRegionLive} 
                colorPropLive={this.state.marco.live.colorProp} tier0={this.state.marco.records.tier0} tier1={this.state.marco.records.tier1}
                tier2={this.state.marco.records.tier2} tier3={this.state.marco.records.tier3} tier4={this.state.marco.records.tier4} 
                tier0Live={this.state.marco.live.tier0Live} tier1Live={this.state.marco.live.tier1Live}
                tier2Live={this.state.marco.live.tier2Live} tier3Live={this.state.marco.live.tier3Live} tier4Live={this.state.marco.live.tier4Live}/>
            </Container>
           
            <Container>
              <Integrator name={this.state.tobey.info.name} image={this.state.tobey.info.image} 
                title={this.state.tobey.info.title} slack={this.state.tobey.info.slack} timezone={this.state.tobey.info.timezone}
                phone={this.state.tobey.info.phone} email={this.state.tobey.info.email} office={this.state.tobey.info.office} 
                manager={this.state.tobey.info.manager}  total={this.state.tobey.records.total} monthly={this.state.tobey.records.monthly}
                daily={this.state.tobey.records.daily} mostRecentName={this.state.tobey.records.mostRecentName} mostRecentDate={this.state.tobey.records.mostRecentDate}
                mostRecentSubmitter={this.state.tobey.records.mostRecentSubmitter} mostRecentBuilder={this.state.tobey.records.mostRecentBuilder}
                mostRecentTier={this.state.tobey.records.mostRecentTier} mostRecentShortname={this.state.tobey.records.mostRecentShortname}
                mostRecentWebType={this.state.tobey.records.mostRecentWebType} mostRecentCompanyRegion={this.state.tobey.records.mostRecentCompanyRegion} 
                colorProp={this.state.tobey.records.colorProp} totalLive={this.state.tobey.live.total} monthlyLive={this.state.tobey.live.monthly}
                dailyLive={this.state.tobey.live.daily} mostRecentNameLive={this.state.tobey.live.mostRecentNameLive} mostRecentDateLive={this.state.tobey.live.mostRecentDateLive}
                mostRecentSubmitterLive={this.state.tobey.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.tobey.live.mostRecentIntegrationTypeLive}
                mostRecentTierLive={this.state.tobey.live.mostRecentTierLive} mostRecentShortnameLive={this.state.tobey.live.mostRecentShortnameLive}
                mostRecentWebTypeLive={this.state.tobey.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.tobey.live.mostRecentCompanyRegionLive} 
                colorPropLive={this.state.tobey.live.colorProp}tier0={this.state.tobey.records.tier0} tier1={this.state.tobey.records.tier1}
                tier2={this.state.tobey.records.tier2} tier3={this.state.tobey.records.tier3} tier4={this.state.tobey.records.tier4} 
                tier0Live={this.state.tobey.live.tier0Live} tier1Live={this.state.tobey.live.tier1Live}
                tier2Live={this.state.tobey.live.tier2Live} tier3Live={this.state.tobey.live.tier3Live} tier4Live={this.state.tobey.live.tier4Live}/>
            </Container>
            <Container>
              <Integrator name={this.state.johnny.info.name} image={this.state.johnny.info.image} 
                title={this.state.johnny.info.title} slack={this.state.johnny.info.slack} timezone={this.state.johnny.info.timezone}
                phone={this.state.johnny.info.phone} email={this.state.johnny.info.email} office={this.state.johnny.info.office} 
                manager={this.state.johnny.info.manager}  total={this.state.johnny.records.total} monthly={this.state.johnny.records.monthly}
                colorProp={this.state.johnny.records.colorProp} daily={this.state.johnny.records.daily} mostRecentName={this.state.johnny.records.mostRecentName} mostRecentDate={this.state.johnny.records.mostRecentDate}
                mostRecentSubmitter={this.state.johnny.records.mostRecentSubmitter} mostRecentBuilder={this.state.johnny.records.mostRecentBuilder}
                mostRecentTier={this.state.johnny.records.mostRecentTier} mostRecentShortname={this.state.johnny.records.mostRecentShortname}
                mostRecentWebType={this.state.johnny.records.mostRecentWebType} mostRecentCompanyRegion={this.state.johnny.records.mostRecentCompanyRegion} 
                totalLive={this.state.johnny.live.total} monthlyLive={this.state.johnny.live.monthly}
                dailyLive={this.state.johnny.live.daily} mostRecentNameLive={this.state.johnny.live.mostRecentNameLive} mostRecentDateLive={this.state.johnny.live.mostRecentDateLive}
                mostRecentSubmitterLive={this.state.johnny.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.johnny.live.mostRecentIntegrationTypeLive}
                mostRecentTierLive={this.state.johnny.live.mostRecentTierLive} mostRecentShortnameLive={this.state.johnny.live.mostRecentShortnameLive}
                mostRecentWebTypeLive={this.state.johnny.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.johnny.live.mostRecentCompanyRegionLive} 
                colorPropLive={this.state.johnny.live.colorProp} tier0={this.state.johnny.records.tier0} tier1={this.state.johnny.records.tier1}
                tier2={this.state.johnny.records.tier2} tier3={this.state.johnny.records.tier3} tier4={this.state.johnny.records.tier4} 
                tier0Live={this.state.johnny.live.tier0Live} tier1Live={this.state.johnny.live.tier1Live}
                tier2Live={this.state.johnny.live.tier2Live} tier3Live={this.state.johnny.live.tier3Live} tier4Live={this.state.johnny.live.tier4Live}/>
            </Container>
            <Container>
              <Integrator name={this.state.elly.info.name} image={this.state.elly.info.image} 
                title={this.state.elly.info.title} slack={this.state.elly.info.slack} timezone={this.state.elly.info.timezone}
                phone={this.state.elly.info.phone} email={this.state.elly.info.email} office={this.state.elly.info.office} 
                manager={this.state.elly.info.manager}  total={this.state.elly.records.total} monthly={this.state.elly.records.monthly}
                daily={this.state.elly.records.daily} mostRecentName={this.state.elly.records.mostRecentName} mostRecentDate={this.state.elly.records.mostRecentDate}
                mostRecentSubmitter={this.state.elly.records.mostRecentSubmitter} mostRecentBuilder={this.state.elly.records.mostRecentBuilder}
                mostRecentTier={this.state.elly.records.mostRecentTier} mostRecentShortname={this.state.elly.records.mostRecentShortname}
                mostRecentWebType={this.state.elly.records.mostRecentWebType} mostRecentCompanyRegion={this.state.elly.records.mostRecentCompanyRegion} 
                colorProp={this.state.elly.records.colorProp} totalLive={this.state.elly.live.total} monthlyLive={this.state.elly.live.monthly}
                dailyLive={this.state.elly.live.daily} mostRecentNameLive={this.state.elly.live.mostRecentNameLive} mostRecentDateLive={this.state.elly.live.mostRecentDateLive}
                mostRecentSubmitterLive={this.state.elly.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.elly.live.mostRecentIntegrationTypeLive}
                mostRecentTierLive={this.state.elly.live.mostRecentTierLive} mostRecentShortnameLive={this.state.elly.live.mostRecentShortnameLive}
                mostRecentWebTypeLive={this.state.elly.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.elly.live.mostRecentCompanyRegionLive} tier0={this.state.elly.records.tier0} tier1={this.state.elly.records.tier1}
                colorPropLive={this.state.elly.live.colorProp} tier2={this.state.elly.records.tier2} tier3={this.state.elly.records.tier3} tier4={this.state.elly.records.tier4} 
                tier0Live={this.state.elly.live.tier0Live} tier1Live={this.state.elly.live.tier1Live}
                tier2Live={this.state.elly.live.tier2Live} tier3Live={this.state.elly.live.tier3Live} tier4Live={this.state.elly.live.tier4Live}/>
            </Container>
            <Container>
           <Integrator name={this.state.zack.info.name} image={this.state.zack.info.image} 
             title={this.state.zack.info.title} slack={this.state.zack.info.slack} timezone={this.state.zack.info.timezone}
             phone={this.state.zack.info.phone} email={this.state.zack.info.email} office={this.state.zack.info.office} 
             manager={this.state.zack.info.manager}  total={this.state.zack.records.total} monthly={this.state.zack.records.monthly}
             daily={this.state.zack.records.daily} mostRecentName={this.state.zack.records.mostRecentName} mostRecentDate={this.state.zack.records.mostRecentDate}
             mostRecentSubmitter={this.state.zack.records.mostRecentSubmitter} mostRecentBuilder={this.state.zack.records.mostRecentBuilder}
             mostRecentTier={this.state.zack.records.mostRecentTier} mostRecentShortname={this.state.zack.records.mostRecentShortname}
             mostRecentWebType={this.state.zack.records.mostRecentWebType} mostRecentCompanyRegion={this.state.zack.records.mostRecentCompanyRegion}  
             colorProp={this.state.zack.records.colorProp} totalLive={this.state.zack.live.total} monthlyLive={this.state.zack.live.monthly}
             dailyLive={this.state.zack.live.daily} mostRecentNameLive={this.state.zack.live.mostRecentNameLive} mostRecentDateLive={this.state.zack.live.mostRecentDateLive}
             mostRecentSubmitterLive={this.state.zack.live.mostRecentSubmitterLive} mostRecentIntegrationTypeLive={this.state.zack.live.mostRecentIntegrationTypeLive}
             mostRecentTierLive={this.state.zack.live.mostRecentTierLive} mostRecentShortnameLive={this.state.zack.live.mostRecentShortnameLive}
             mostRecentWebTypeLive={this.state.zack.live.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.state.zack.live.mostRecentCompanyRegionLive} 
             colorPropLive={this.state.zack.live.colorProp}tier0={this.state.zack.records.tier0} tier1={this.state.zack.records.tier1}
             tier2={this.state.zack.records.tier2} tier3={this.state.zack.records.tier3} tier4={this.state.zack.records.tier4} 
             tier0Live={this.state.zack.live.tier0Live} tier1Live={this.state.zack.live.tier1Live}
             tier2Live={this.state.zack.live.tier2Live} tier3Live={this.state.zack.live.tier3Live} tier4Live={this.state.zack.live.tier4Live}/>
            </Container>
          </AppContainer>
          </div>
          }
          
      </div>
  )
}

}

export default App;