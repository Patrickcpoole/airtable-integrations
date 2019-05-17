import React, { Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

import Modal from './Modal';

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

const apiKey = 'keyBupI08coJkltKa'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
     
      patrick: {
        records: [],
        name: 'Patrick Poole',
        image: patrickImage,
        title: 'Integrations Specialist',
        slack: 'patrick',
        timezone: 'Mountain',
        phone: '303-888-8909',
        email: 'patrick.poole@fareharbor.com',
        office: 'Denver',
        manager: 'Neubs/Raleigh'
      },
      neubs: {
        records: [],
        name: 'Alex Neubauer',
        image: neubsImage,
        title: 'Enterprise Integrations Specialist',
        slack: 'neubs',
        timezone: 'Mountain',
        phone: '615-354-4808',
        email: 'alex@fareharbor.com',
        office: 'Denver',
        manager: 'Raleigh Caruso'

      },
      zack: {
        records: [],
        name: 'Zack Feld',
        image: zackImage,
        title: 'Special Big Helper',
        slack: 'zackf',
        timezone: 'Mountain',
        phone: '847-912-1215',
        email: 'zack@fareharbor.com',
        office: 'Denver',
        manager: 'Mark Loh'
      },
      marco: {
        records: [],
        name: 'Marco Depperu',
        image: marcoImage,
        title: 'Integrations Specialist',
        slack: 'mdepperu',
        timezone: 'Central European Summer Time',
        phone: '0686423460',
        email: 'marco.depperu@fareharbor.com',
        office: 'Amsterdam',
        manager: 'Michael Klempner'
      },
      amaia: {
        records: [],
        name: 'Amaia Ibarra',
        image: amaiaImage,
        title: 'Integrations Specialist',
        slack: 'amaia',
        timezone: 'Central European Summer Time',
        phone: '34615711333',
        email: 'amaia.ibarra@fareharbor.com',
        office: 'Amsterdam',
        manager: 'Michael Klempner'
      },
      //recvnh0fRFsGvqPYx
      elly: {
        records: [],
        name: 'Nallely Torres',
        image: ellyImage,
        title: 'Integrations Specialist',
        slack: 'elly',
        timezone: 'Mountain',
        phone: '720-380-3867',
        email: 'nallely.torres@fareharbor.com',
        office: 'Denver',
        manager: 'Neubs'
      },
      //recGu8dqcUNmX7Lsx
      tobey: {
        records: [],
        name: 'Tobey Ross',
        image: tobeyImage,
        title: 'Integrations Specialist',
        slack: 'tobez',
        timezone: 'Mountain',
        phone: '512-529-6783',
        email: 'tobey.ross@fareharbor.com',
        office: 'Denver',
        manager: 'Neubs'
      },
      //recjAF0GGGahIkwti
      johnny: {
        records: [],
        name: 'Johnny Garcia',
        image: johnnyImage,
        title: 'Integrations Specialist',
        slack: 'patrick',
        timezone: 'Mountain',
        phone: '303-888-8909',
        email: 'patrick.poole@fareharbor.com',
        office: 'Denver',
        manager: 'Raleigh Caruso',
        manager: 'Neubs'
      },
  
      nick: {
        records: [],
      },

      notClaimed: []
    }
  }

 
  
componentDidMount() {
  
  let totalRecords = [];
this.setState({loading:true});
  
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
                                                  this.setState({loading:false})
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
                                                    image: patrickImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'patrick',
                                                    timezone: 'Mountain',
                                                    phone: '303-888-8909',
                                                    email: 'patrick.poole@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Neubs/Raleigh'
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
                                                    title: 'Enterprise Integrations Specialist',
                                                    slack: 'neubs',
                                                    timezone: 'Mountain',
                                                    phone: '615-354-4808',
                                                    email: 'alex@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Raleigh Caruso'
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
                                                    image: zackImage,
                                                    title: 'Special Big Helper',
                                                    slack: 'zackf',
                                                    timezone: 'Mountain',
                                                    phone: '847-912-1215',
                                                    email: 'zack@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Mark Loh'
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
                                                    image: marcoImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'mdepperu',
                                                    timezone: 'Central European Summer Time',
                                                    phone: '0686423460',
                                                    email: 'marco.depperu@fareharbor.com',
                                                    office: 'Amsterdam',
                                                    manager: 'Michael Klempner'
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
                                                    image: amaiaImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'amaia',
                                                    timezone: 'Central European Summer Time',
                                                    phone: '34615711333',
                                                    email: 'amaia.ibarra@fareharbor.com',
                                                    office: 'Amsterdam',
                                                    manager: 'Michael Klempner'
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
                                                    image: ellyImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'elly',
                                                    timezone: 'Mountain',
                                                    phone: '720-380-3867',
                                                    email: 'nallely.torres@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Neubs'
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
                                                    image: tobeyImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'tobez',
                                                    timezone: 'Mountain',
                                                    phone: '512-529-6783',
                                                    email: 'tobey.ross@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Neubs'
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
                                                    image: johnnyImage,
                                                    title: 'Integrations Specialist',
                                                    slack: 'patrick',
                                                    timezone: 'Mountain',
                                                    phone: '303-888-8909',
                                                    email: 'patrick.poole@fareharbor.com',
                                                    office: 'Denver',
                                                    manager: 'Raleigh Caruso',
                                                    manager: 'Neubs'
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
          {//this.state.loading ? <LoadingSpinner /> :
          
         <AppContainer>
            <Container>
              <Integrator records = {this.state.patrick.records} name={this.state.patrick.name} image={this.state.patrick.image} 
             title={this.state.patrick.title} slack={this.state.patrick.slack} timezone={this.state.patrick.timezone}
             phone={this.state.patrick.phone} email={this.state.patrick.email} office={this.state.patrick.office} 
             manager={this.state.patrick.manager}/> 
           </Container>
            <Container>
              <Integrator records = {this.state.amaia.records} name={this.state.amaia.name} image={this.state.amaia.image} 
              title={this.state.amaia.title} slack={this.state.amaia.slack} timezone={this.state.amaia.timezone}
              phone={this.state.amaia.phone} email={this.state.amaia.email} office={this.state.amaia.office} 
              manager={this.state.amaia.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.neubs.records} name={this.state.neubs.name} image={this.state.neubs.image} 
              title={this.state.neubs.title} slack={this.state.neubs.slack} timezone={this.state.neubs.timezone}
              phone={this.state.neubs.phone} email={this.state.neubs.email} office={this.state.neubs.office} 
              manager={this.state.neubs.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.marco.records} name={this.state.marco.name} image={this.state.marco.image} 
              title={this.state.marco.title} slack={this.state.marco.slack} timezone={this.state.marco.timezone}
              phone={this.state.marco.phone} email={this.state.marco.email} office={this.state.marco.office} 
              manager={this.state.marco.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.zack.records} name={this.state.zack.name} image={this.state.zack.image} 
              title={this.state.zack.title} slack={this.state.zack.slack} timezone={this.state.zack.timezone}
              phone={this.state.zack.phone} email={this.state.zack.email} office={this.state.zack.office} 
              manager={this.state.zack.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.elly.records} name={this.state.elly.name} image={this.state.elly.image} 
              title={this.state.elly.title} slack={this.state.elly.slack} timezone={this.state.elly.timezone}
              phone={this.state.elly.phone} email={this.state.elly.email} office={this.state.elly.office} 
              manager={this.state.elly.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.tobey.records} name={this.state.tobey.name} image={this.state.tobey.image} 
              title={this.state.tobey.title} slack={this.state.tobey.slack} timezone={this.state.tobey.timezone}
              phone={this.state.tobey.phone} email={this.state.tobey.email} office={this.state.tobey.office} 
              manager={this.state.tobey.manager}/>
            </Container>
            <Container>
              <Integrator records = {this.state.johnny.records} name={this.state.johnny.name} image={this.state.johnny.image} 
              title={this.state.johnny.title} slack={this.state.johnny.slack} timezone={this.state.johnny.timezone}
              phone={this.state.johnny.phone} email={this.state.johnny.email} office={this.state.johnny.office} 
              manager={this.state.johnny.manager}/>
            </Container>
          </AppContainer>}

      </div>
    );
  }
}

export default App;
