import React, { useState, Component } from 'react';
import logo from '../airtable-logo.png';
import './App.css';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

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
        records: [],
        live: [],
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
        live: [],
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
        live: [],
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
        live: [],
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
        live: [],
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
        live: [],
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
        live: [],
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
        live: [],
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
  const patrickRecordsState = [];
  const neubsRecordsState = [];
  const zackRecordsState = [];
  const marcoRecordsState = [];
  const amaiaRecordsState = [];
  const ellyRecordsState = [];
  const tobeyRecordsState = [];
  const johnnyRecordsState = [];
  const nickRecordsState = [];
  //console.log(patrickRecordsState);

  const patrickLiveState = [];
  const neubsLiveState = [];
  const zackLiveState = [];
  const marcoLiveState = [];
  const amaiaLiveState = [];
  const ellyLiveState = [];
  const tobeyLiveState = [];
  const johnnyLiveState = [];
  const nickLiveState = [];
  console.log(patrickLiveState)
 
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

  const Airtable = require('airtable');
  
  const base = new Airtable({ apiKey: apiKey }).base('app9VtXS1vJyLgLgK');

  const loadLiveRecords = () => {
    base('Live Integration Requests').select({
      sort: [
          {field: 'Completion Date', direction: 'asc'}
      ]
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        //console.log(record);
        try {
          if(record.fields['Claimed By:'][0] === idArray[0]) {
            patrickLiveState.push(record);
            //console.log(patrickRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[1]) {
            neubsLiveState.push(record);
            //console.log(NeubsRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[2]) {
            zackLiveState.push(record);
            //console.log(zackRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[3]) {
            marcoLiveState.push(record);
            //console.log(marcoRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[4]) {
            amaiaLiveState.push(record);
            //console.log(amaiaRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        
        try {
          if(record.fields['Claimed By:'][0] === idArray[5]) {
            ellyLiveState.push(record);
            //console.log(nellyRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[6]) {
            tobeyLiveState.push(record);
            //console.log(tobeyRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[7]) {
            johnnyLiveState.push(record);
            //console.log(johnnyRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
        try {
          if(record.fields['Claimed By:'][0] === idArray[8]) {
            nickLiveState.push(record);
            //console.log(nickRecordsState);
          } 
        } catch(err) {
          console.log('There was an error: ', err);
        }
    });
      fetchNextPage();
  }, function done(error) {
      console.log(error);
});
  }


  const loadOBRecords = () => {
    
      base('OB Integration Requests').select({
          sort: [
              {field: 'Completion Date', direction: 'asc'}
          ]
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            //console.log(record);
            try {
                if(record.fields['Claimed By:'][0] === idArray[0]) {
                  patrickRecordsState.push(record);
                  //console.log(patrickRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[1]) {
                  neubsRecordsState.push(record);
                  //console.log(NeubsRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[2]) {
                  zackRecordsState.push(record);
                  //console.log(zackRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[3]) {
                  marcoRecordsState.push(record);
                  //console.log(marcoRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[4]) {
                  amaiaRecordsState.push(record);
                  //console.log(amaiaRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              
              try {
                if(record.fields['Claimed By:'][0] === idArray[5]) {
                  ellyRecordsState.push(record);
                  //console.log(nellyRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[6]) {
                  tobeyRecordsState.push(record);
                  //console.log(tobeyRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[7]) {
                  johnnyRecordsState.push(record);
                  //console.log(johnnyRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
              try {
                if(record.fields['Claimed By:'][0] === idArray[8]) {
                  nickRecordsState.push(record);
                  //console.log(nickRecordsState);
                } 
              } catch(err) {
                console.log('There was an error: ', err);
              }
          });
          fetchNextPage();
      }, function done(error) {
          console.log(error);
      });

      this.setState({
        
        patrick:{
          records: patrickRecordsState,
          live: patrickLiveState,
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
        
        zack: {
          records: zackRecordsState,
          live: zackLiveState,
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
        neubs: {
          records: neubsRecordsState,
          live: neubsLiveState,
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
        marco: {
          records: marcoRecordsState,
          live: marcoLiveState,
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
          records: amaiaRecordsState,
          live: amaiaLiveState,
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
        elly: {
          records: ellyRecordsState,
          live: ellyLiveState,
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
        tobey: {
          records: tobeyRecordsState,
          live: tobeyLiveState,
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
        johnny: {
          records: johnnyRecordsState,
          live: johnnyLiveState,
          name: 'Johnny Garcia',
          image: johnnyImage,
          title: 'Integrations Specialist',
          slack: 'patrick',
          timezone: 'Mountain',
          phone: '303-888-8909',
          email: 'patrick.poole@fareharbor.com',
          office: 'Denver',
          manager: 'Neubs'
        }
      })
  };

  loadLiveRecords();
loadOBRecords();


setTimeout(()=> {
  if(johnnyLiveState.length > 0) {
    this.setState({loading:false})
  }
}, 9000);
}

render() {


  return (
    <div className="App">
    {this.state.loading ? <LoadingSpinner /> :
    <div>
          <img src={logo} className="App-logo" alt="logo" />
          <MainHeading>Integration Team Airtable Data</MainHeading>
          
          

         <AppContainer>
            <Container>
              <Integrator records={this.state.patrick.records} live={this.state.patrick.live} name={this.state.patrick.name} image={this.state.patrick.image} 
             title={this.state.patrick.title} slack={this.state.patrick.slack} timezone={this.state.patrick.timezone}
             phone={this.state.patrick.phone} email={this.state.patrick.email} office={this.state.patrick.office} 
             manager={this.state.patrick.manager}/> 
           </Container>
            <Container>
              <Integrator records={this.state.amaia.records} live={this.state.amaia.live} name={this.state.amaia.name} image={this.state.amaia.image} 
              title={this.state.amaia.title} slack={this.state.amaia.slack} timezone={this.state.amaia.timezone}
              phone={this.state.amaia.phone} email={this.state.amaia.email} office={this.state.amaia.office} 
              manager={this.state.amaia.manager}/>
            </Container>
            <Container>
              <Integrator records={this.state.neubs.records} live={this.state.neubs.live} name={this.state.neubs.name} image={this.state.neubs.image} 
              title={this.state.neubs.title} slack={this.state.neubs.slack} timezone={this.state.neubs.timezone}
              phone={this.state.neubs.phone} email={this.state.neubs.email} office={this.state.neubs.office} 
              manager={this.state.neubs.manager}/>
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
            </Container>
          </AppContainer>
          </div>
          }
          
      </div>
  )
}

}

export default App;
