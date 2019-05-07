import React, { Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';

import patrickImage from '../fh-patrick.jpg'
import neubsImage from '../alex-neubauer.jpeg';
import amaiaImage from '../amaia-ibarra.jpeg';

import Integrator from './Integrator';

const AppContainer = styled.div`
    display:flex;
    flex-wrap: no-wrap;
    justify-content:center;
    align-items:center;
`;

const MainHeading = styled.h1`
  font-size:32px;
`;

const apiKey = 'keyBupI08coJkltKa'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // rec4sRpMUGLTGahXW Patrick State
      patrickRecords: [],
      // recFfOW7iuzI6a8cb Neubs State
      neubsRecords: [],
      //  Zack State recbMjoumd8cb6pQg ... Accurate state of 57
      zackRecords: [],
      //  recV6fVqabawVDGuZ Marco State ... Inaccruate state of 22
      marcoRecords: [], 
      // recUKD8ue91sXjx0x Amaia State ... Accurate State of 74 
      amaiaRecords: [],
      // recfDa2Zeu940sdpA Nick State 
      nickRecords: [],

      
      //Names
      patrick: 'Patrick Poole',
      neubs: 'Alex Neubauer',
      zack: 'Zack Feld',
      amaia: 'Amaia Ibarra',

      patrickImage: patrickImage,
      neubsImage: neubsImage,
      amaiaImage: amaiaImage
    }
  }

componentDidMount() {
  
  let totalRecords = [];
 
fetch('https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?sort%5B0%5D%5Bfield%5D=Completion%20Date&sort%5B0%5D%5Bdirection%5D=asc', {
headers: {
    Authorization: `Bearer ${apiKey}`
  }
}).then(response => {
    return response.json()}) 
    .then(jsonResponse => {
      const offset = jsonResponse.offset;
      const records = jsonResponse.records; 
      totalRecords.push(records);
      //console.log(jsonResponse.offset);
      fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
          }
          }).then(response1 => {
            return response1.json()}) 
            .then(jsonResponse1 => {
              const offset1 = jsonResponse1.offset;
              const records1 = jsonResponse1.records;
              totalRecords.push(records1);
                //console.log(jsonResponse1);
                //console.log(totalRecords);
                fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset1}`, {
                  headers: {
                      Authorization: `Bearer ${apiKey}`
                    }
                    }).then(response2 => {
                      return response2.json()}) 
                      .then(jsonResponse2 => {
                        const offset2 = jsonResponse2.offset;
                        const records2 = jsonResponse2.records;
                        totalRecords.push(records2);
                          //console.log(jsonResponse1);
                          //console.log(totalRecords);
                          fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset2}`, {
                            headers: {
                                Authorization: `Bearer ${apiKey}`
                              }
                              }).then(response3 => {
                                return response3.json()}) 
                                .then(jsonResponse3 => {
                                  const offset3 = jsonResponse3.offset;
                                  const records3 = jsonResponse3.records;
                                  totalRecords.push(records3);
                                  fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset3}`, {
                                    headers: {
                                        Authorization: `Bearer ${apiKey}`
                                      }
                                      }).then(response4 => {
                                        return response4.json()}) 
                                        .then(jsonResponse4 => {
                                          const offset4 = jsonResponse4.offset;
                                          const records4 = jsonResponse4.records;
                                          totalRecords.push(records4);
                                          fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset4}`, {
                                            headers: {
                                                Authorization: `Bearer ${apiKey}`
                                              }
                                              }).then(response5 => {
                                                return response5.json()}) 
                                                .then(jsonResponse5 => {
                                          const records5 = jsonResponse5.records;
                                          totalRecords.push(records5);
                                            totalRecords.forEach(page => {
                                              //console.log(page);
                                              page.forEach(record => {

                                       // console.log(record);
                                        if(record.fields['Claimed By:'][0] === 'rec4sRpMUGLTGahXW') {
                                          const patrickRecordsState = [];
                                          patrickRecordsState.push(record);
                                          //console.log(patrickState);
                                          this.setState({
                                            patrickRecords: [...this.state.patrickRecords, ...patrickRecordsState]
                                          })
                                          
                                        } 
                                        if(record.fields['Claimed By:'][0] === 'recFfOW7iuzI6a8cb') {
                                          const neubsRecordsState = [];
                                          neubsRecordsState.push(record);
                                          //console.log(neubsState);
                                          this.setState({
                                            neubsRecords: [...this.state.neubsRecords, ...neubsRecordsState]
                                          })
                                          
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recbMjoumd8cb6pQg') {
                                          const zackRecordsState = [];
                                          zackRecordsState.push(record);
                                         // console.log(zackState);
                                          this.setState({
                                            zackRecords: [...this.state.zackRecords, ...zackRecordsState]
                                          })
                                         
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recV6fVqabawVDGuZ') {
                                          const marcoRecordsState = [];
                                          marcoRecordsState.push(record);
                                         // console.log(marcoState);
                                          this.setState({
                                            marcoRecords: [...this.state.marcoRecords, ...marcoRecordsState]
                                          })
                                         
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recUKD8ue91sXjx0x') {
                                          const amaiaRecordsState = [];
                                          amaiaRecordsState.push(record);
                                          //console.log(amaiaState);
                                          this.setState({
                                            amaiaRecords: [...this.state.amaiaRecords, ...amaiaRecordsState]
                                          })
                                         
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recfDa2Zeu940sdpA') {
                                          const nickRecordsState = [];
                                          nickRecordsState.push(record);
                                          //console.log(nickState);
                                          this.setState({
                                            nickRecords: [...this.state.nickRecords, ...nickRecordsState]
                                          })

                                          
                                        }
                                      })
                                    })
                                }).catch(err => {
                                  console.log(err)
                                  
                                })
                        })
                })
          })
        }) 
  })
}   
  



  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <MainHeading>Integration Team Airtable Data</MainHeading>
          <AppContainer>
            <Integrator records = {this.state.patrickRecords} name={this.state.patrick} image={this.state.patrickImage} />
            <Integrator records = {this.state.amaiaRecords} name={this.state.amaia} image={this.state.amaiaImage} />
            <Integrator records = {this.state.neubsRecords} name={this.state.neubs} image={this.state.neubsImage} />
          </AppContainer>

      </div>
    );
  }
}

export default App;
