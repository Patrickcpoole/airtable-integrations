import React, { Component, useState } from 'react'
import './App.css';
import styled from 'styled-components';
import Modal from './Modal';
import Completed from './Completed';
import CompanyInfo from './CompanyInfo';
import moment from 'moment';




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
    height: 65vh;
    border-radius:8px;
    box-shadow: 2px 5px 15px 2px hsla(0, 0%, 0%, 0.4);
    transition: .4s all ease-in-out;
    :hover {
      background-color:#ffbf00;
      cursor: pointer;
  }
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
  constructor(props) {
    super(props);
    this.loadIntegrationData = this.loadIntegrationData.bind(this);
    this.state = {
      isOpen:false,
      dailyIntegrations: 0,
      monthlyIntegrations: 0,
      totalIntegrations: 0
    }
  }

  loadIntegrationData() {
      console.log('loading data');
    let today = new Date();
    let day = today.getDate();
    
    let month = today.getMonth();
    month = month+1;
    let year = today.getFullYear();
   
    // Adds 0 to single digit days and months
    if (month < 10){
      month = "0"+month;
    }
  
      if (day < 10){
      day = "0"+day;
      }    
  
      const date = `${year}-${month}-${day}`;
     // console.log(date);
     
      
        let dailyIntegrationsArray = [];
        let totalIntegrationsArray = [];
        let monthlyIntegrationsArray = [];
      this.props.records.map(record => {
        
  
        
        let completionDates = [];
         
          //console.log(record);
          if(record.fields['Completion Date']) {
            completionDates.push(record.fields['Completion Date'].split('T').shift());
            //console.log(completionDates);  
          }
          
            completionDates.forEach(completionDate => {
              totalIntegrationsArray.push(completionDate);
              //console.log(completionDate);
              if(completionDate === date) {          
                dailyIntegrationsArray.push(completionDate);
              }
              let completionMonth = completionDate.split('-')[1];
              if(completionMonth === month) {
                monthlyIntegrationsArray.push(completionDate);
              }
              
            })
            
            let dailyIntegrations = dailyIntegrationsArray.length;
            let totalIntegrations = totalIntegrationsArray.length;
            let monthlyIntegrations = monthlyIntegrationsArray.length;
          
        this.setState({
            dailyIntegrations: dailyIntegrations,
            monthlyIntegrations: monthlyIntegrations,
            totalIntegrations: totalIntegrations
        })
        })

  }

  toggleModal = () => {
   {this.state.isOpen ===false ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'inherit'}
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  

  componentDidMount() {
    setTimeout(() => {
        this.loadIntegrationData();
      }, 3500)
  }

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
        
        <IntegratorContainer onClick={this.toggleModal} >
          <Header>
            <img className="picture" src={this.props.image} alt="integrator-profile"/>
              <IntegratorName>{this.props.name}</IntegratorName>
          </Header>
         
          <Completed records={this.props.records} monthly = {this.state.monthlyIntegrations} total={this.state.totalIntegrations} daily={this.state.dailyIntegrations}/>

          <CompanyInfo recentName={mostRecentName} recentDate={mostRecentDate} recentSubmitter={mostRecentSubmitter} recentBuilder={mostRecentBuilder} 
              recentTier={mostRecentTier} recentShortname={mostRecentShortname} recentWebType={mostRecentWebType}/>

              <Modal name={this.props.name} monthly = {this.state.monthlyIntegrations} daily={this.state.dailyIntegrations}
              total={this.state.totalIntegrations} image={this.props.image} title={this.props.title}
              slack={this.props.slack} timezone={this.props.timezone} phone={this.props.phone} email={this.props.email}
              office={this.props.office} manager={this.props.manager} show={this.state.isOpen} onClose={this.toggleModal}
              recentName={mostRecentName} recentDate={mostRecentDate} recentSubmitter={mostRecentSubmitter} recentBuilder={mostRecentBuilder} 
              recentTier={mostRecentTier} recentShortname={mostRecentShortname} recentWebType={mostRecentWebType} />  
           
        </IntegratorContainer>
    
      
    )
  }
}

export default Integrator;