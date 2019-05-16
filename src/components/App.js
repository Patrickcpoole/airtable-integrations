import React, { Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';
import Modal from './Modal';
import ModalWrapper from './Modal';

import patrickImage from '../fh-patrick.jpg';
import neubsImage from '../alex-neubauer.jpeg';
import amaiaImage from '../amaia-ibarra.jpeg';
import marcoImage from '../marco.png';
import zackImage from '../zack.jpeg';
import ellyImage from '../elly.jpg';
import tobeyImage from '../tobey.jpg';
import johnnyImage from '../johnny.png';


import Integrator from './Integrator';

const AppContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:flex-end;
    
`;

const MainHeading = styled.h1`
  font-size:32px;
`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
`;

const apiKey = 'keyBupI08coJkltKa'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patrick: {
        records: [],
        name: 'Patrick Poole',
        image: patrickImage,
      },
      neubs: {
        records: [],
        name: 'Alex Neubauer',
        image: neubsImage,

      },
      zack: {
        records: [],
        name: 'Zack Feld',
        image: zackImage
      },
      marco: {
        records: [],
        name: 'Marco Depperu',
        image: marcoImage
      },
      amaia: {
        records: [],
        name: 'Amaia Ibarra',
        image: amaiaImage
      },
      //recvnh0fRFsGvqPYx
      elly: {
        records: [],
        name: 'Nallely Torres',
        image: ellyImage
      },
      //recGu8dqcUNmX7Lsx
      tobey: {
        records: [],
        name: 'Tobey Ross',
        image: tobeyImage
      },
      //recjAF0GGGahIkwti
      johnny: {
        records: [],
        name: 'Johnny Garcia',
        image: johnnyImage
      },
  
      nick: {
        records: [],
      },

      notClaimed: []
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
                                                  const offset5 = jsonResponse5.offset;
                                                  totalRecords.push(records5);
                                                  fetch(`https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?offset=${offset5}`, {
                                            headers: {
                                                Authorization: `Bearer ${apiKey}`
                                              }
                                              }).then(response6 => {
                                                return response6.json()})
                                                .then(jsonResponse6 => {
                                                  const records6 = jsonResponse6.records;
                                                  totalRecords.push(records6);
                                                  totalRecords.forEach(page => {
                                                   // console.log(page);
                                                    page.forEach(record => {
                                                      console.log(record);
                                                      try{
                                              if(!record.fields['Claimed By:']) {
                                                const notClaimedRecordsState = [];
                                                notClaimedRecordsState.push(record);
                                                //record['Claimed By:'][0] = 'Blank';
                                                console.log(record)
                                                this.setState({
                                                  notClaimed: [...this.state.notClaimed, ...notClaimedRecordsState]
                                                  
                                                })
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                                    
                                             //console.log(record);
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'rec4sRpMUGLTGahXW') {
                                                const patrickRecordsState = [];
                                                patrickRecordsState.push(record);
                                                //console.log(patrickState);
                                                this.setState({
                                                  patrick:{
                                                    records: [...this.state.patrick.records, ...patrickRecordsState],
                                                    name: 'Patrick Poole',
                                                    image: patrickImage
                                                  }
                                                })
                                                
                                              } else {
                                                throw new Error('Undefined');
                                              } 
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recFfOW7iuzI6a8cb') {
                                                const neubsRecordsState = [];
                                                neubsRecordsState.push(record);
                                                //console.log(neubsState);
                                                this.setState({
                                                  neubs:{
                                                    records: [...this.state.neubs.records, ...neubsRecordsState],
                                                    name: 'Alex Neubauer',
                                                    image: neubsImage,
                                                  }
                                                })
                                                
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recbMjoumd8cb6pQg') {
                                                const zackRecordsState = [];
                                                zackRecordsState.push(record);
                                              // console.log(zackState);
                                                this.setState({
                                                  zack:{
                                                    records: [...this.state.zack.records, ...zackRecordsState],
                                                    name: 'Zack Feld',
                                                    image: zackImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                              try {
                                              if(record.fields['Claimed By:'][0] === 'recV6fVqabawVDGuZ') {
                                                const marcoRecordsState = [];
                                                marcoRecordsState.push(record);
                                              // console.log(marcoState);
                                                this.setState({
                                                  marco:{
                                                    records: [...this.state.marco.records, ...marcoRecordsState],
                                                    name: 'Marco Depperu',
                                                    image: marcoImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recUKD8ue91sXjx0x') {
                                                const amaiaRecordsState = [];
                                                amaiaRecordsState.push(record);
                                                //console.log(amaiaState);
                                                this.setState({
                                                  amaia:{
                                                    records: [...this.state.amaia.records, ...amaiaRecordsState],
                                                    name: 'Amaia Ibarra',
                                                    image: amaiaImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recvnh0fRFsGvqPYx') {
                                                const ellyRecordsState = [];
                                                ellyRecordsState.push(record);
                                                //console.log(amaiaState);
                                                this.setState({
                                                  elly:{
                                                    records: [...this.state.elly.records, ...ellyRecordsState],
                                                    name: 'Nallely Torres',
                                                    image: ellyImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recGu8dqcUNmX7Lsx') {
                                                const tobeyRecordsState = [];
                                                tobeyRecordsState.push(record);
                                                //console.log(amaiaState);
                                                this.setState({
                                                  tobey:{
                                                    records: [...this.state.tobey.records, ...tobeyRecordsState],
                                                    name: 'Tobey Ross',
                                                    image: tobeyImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recjAF0GGGahIkwti') {
                                                const johnnyRecordsState = [];
                                                johnnyRecordsState.push(record);
                                                //console.log(johnnyState);
                                                this.setState({
                                                  johnny:{
                                                    records: [...this.state.johnny.records, ...johnnyRecordsState],
                                                    name: 'Johnny Garcia',
                                                    image: johnnyImage
                                                  }
                                                })
                                              
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
                                            try {
                                              if(record.fields['Claimed By:'][0] === 'recfDa2Zeu940sdpA') {
                                                const nickRecordsState = [];
                                                nickRecordsState.push(record);
                                                //console.log(nickState);
                                                this.setState({
                                                  nick:{
                                                    records: [...this.state.nick.records, ...nickRecordsState]
                                                  }
                                                })
                                              } else {
                                                throw new Error('Undefined');
                                              }
                                            } catch(err) {
                                              console.log('There was an error: ', err);
                                            }
    
                                            })
                                          })
                                      }).catch(err => {
                                        console.log('There was an error: ', err);
                                      })
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
            <Container>
              <Integrator records = {this.state.patrick.records} name={this.state.patrick.name} image={this.state.patrick.image} />
              <ModalWrapper records = {this.state.patrick.records} image={this.state.patrick.image}/>
           </Container>
            <Container>
              <Integrator records = {this.state.amaia.records} name={this.state.amaia.name} image={this.state.amaia.image} />
              <Modal records = {this.state.amaia.records} image={this.state.amaia.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.neubs.records} name={this.state.neubs.name} image={this.state.neubs.image} />
              <Modal records = {this.state.neubs.records} image={this.state.neubs.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.marco.records} name={this.state.marco.name} image={this.state.marco.image} />
              <Modal records = {this.state.marco.records} image={this.state.marco.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.zack.records} name={this.state.zack.name} image={this.state.zack.image} />
              <Modal records = {this.state.zack.records} image={this.state.zack.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.elly.records} name={this.state.elly.name} image={this.state.elly.image} />
              <Modal records = {this.state.elly.records} image={this.state.elly.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.tobey.records} name={this.state.tobey.name} image={this.state.tobey.image} />
              <Modal records = {this.state.patrick.records} image={this.state.tobey.image}/>
            </Container>
            <Container>
              <Integrator records = {this.state.patrick.records} records = {this.state.johnny.records} name={this.state.johnny.name} image={this.state.johnny.image} />  
              <Modal records = {this.state.patrick.records} image={this.state.johnny.image}/>
            </Container>
          </AppContainer>

      </div>
    );
  }
}

export default App;
