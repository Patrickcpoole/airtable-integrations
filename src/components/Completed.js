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
   
    let dailyIntegrations = [];
    let totalIntegrations = [];
    let monthlyIntegrations = [];
    
    this.props.records.map(record => {
      
        let completionDates = [];
       
        //console.log(record);
        if(record.fields['Completion Date']) {
          completionDates.push(record.fields['Completion Date'].split('T').shift());
          //console.log(completionDates);  
        }
        
          completionDates.forEach(completionDate => {
            totalIntegrations.push(completionDate);
            //console.log(completionDate);
            if(completionDate === date) {          
              dailyIntegrations.push(completionDate);
            }
            let completionMonth = completionDate.split('-')[1];
            if(completionMonth === month) {
              monthlyIntegrations.push(completionDate);
            }
            
          })
      })
      
     //console.log(weeklyIntegrations);
    return (
      <CompletedContainer>
          <NumberContainer>
            <CompletedNumber>{monthlyIntegrations.length}</CompletedNumber>
            <CompletedText>Integrations Completed This Month</CompletedText>
          </NumberContainer>
          <NumberContainer>
            <CompletedNumber>{totalIntegrations.length}</CompletedNumber>
            <CompletedText>Total Integrations Completed</CompletedText>
          </NumberContainer>
          <NumberContainer>
          <CompletedNumber>{dailyIntegrations.length}</CompletedNumber>
          <CompletedText>Integrations Completed Today</CompletedText>
          </NumberContainer>
      </CompletedContainer>
    )
  }
}

export default Completed;