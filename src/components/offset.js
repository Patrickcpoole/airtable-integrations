import React, { Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';

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
      // rec4sRpMUGLTGahXW
      patrick: [],
      // recFfOW7iuzI6a8cb
      neubs: [],
      // recfDa2Zeu940sdpA
      zack: [],
      // recbMjoumd8cb6pQg
      marco: [],
      // recUKD8ue91sXjx0x
      amaia: []
    }
  }

componentDidMount() {
  let totalRecords = [];
fetch('https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests', {
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
                                    //console.log(jsonResponse1);
                                    console.log(totalRecords);
                                     return totalRecords.forEach(page => {
                                      return page.forEach(record => {
                                        console.log(record);
                                        if(record.fields['Claimed By:'][0] === 'rec4sRpMUGLTGahXW') {
                                          const patrickState = [];
                                          patrickState.push(record);
                                          //console.log(patrickState);
                                          this.setState({
                                            patrick: [...this.state.patrick, ...patrickState]
                                          })
                                        } 
                                        if(record.fields['Claimed By:'][0] === 'recFfOW7iuzI6a8cb') {
                                          const neubsState = [];
                                          neubsState.push(record);
                                          //console.log(neubsState);
                                          this.setState({
                                            neubs: [...this.state.neubs, ...neubsState]
                                          })
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recfDa2Zeu940sdpA') {
                                          const zackState = [];
                                          zackState.push(record);
                                         // console.log(zackState);
                                          this.setState({
                                            zack: [...this.state.zack, ...zackState]
                                          })
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recbMjoumd8cb6pQg') {
                                          const marcoState = [];
                                          marcoState.push(record);
                                         // console.log(marcoState);
                                          this.setState({
                                            marco: [...this.state.marco, ...marcoState]
                                          })
                                        }
                                        if(record.fields['Claimed By:'][0] === 'recUKD8ue91sXjx0x') {
                                          const amaiaState = [];
                                          amaiaState.push(record);
                                          //console.log(amaiaState);
                                          this.setState({
                                            amaia: [...this.state.amaia, ...amaiaState]
                                          })
                                        }
                                        else {
                                          console.log('error');
                                        }
                                      })
                                    })
                                }).catch(err => {
                                  console.log(err)
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
            <Integrator />
            <Integrator />
            <Integrator />
          </AppContainer>

      </div>
    );
  }
}

export default App;
