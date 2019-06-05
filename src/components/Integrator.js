import React, { Component, useState } from 'react'
import './App.css';
import styled from 'styled-components';
import Modal from './Modal';
import Completed from './Completed';
import CompanyInfo from './CompanyInfo';





const IntegratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    width: 23vw;
    margin-right:2%;
    margin-left:2%;
    margin-top:2%;
    background-color:white;
    height: 65vh;
    border-radius:8px;
    box-shadow: 2px 3px 12px 2px hsla(0, 0%, 0%, 0.3);
    transition: .4s all ease-in-out;
    :hover {
      background-color:#ffbf00;
      cursor: pointer;
  }
  @media (max-width: 1500px) {
    width: 30vw;
    height: 70vh;
  }
  `;

  const Header = styled.div`
     height:30%;
     width:100%;
    border-bottom: solid 2px;
    border-color:#282c34;
    @media (max-width: 1500px) {
    height:27.5%;
  }
  `;

  const IntegratorName = styled.h3`
    color:#282c34;
    font-size:1.5rem;
    margin-bottom:3%;
  `;

class Integrator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      }
    }

  toggleModal = () => {
   {this.state.isOpen ===false ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'inherit'}
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 render() {
    console.log(this.props.tier0Live);
    return (
        
        <IntegratorContainer onClick={this.toggleModal} >
          <Header>
            <img className="picture" src={this.props.image} alt="integrator-profile"/>
              <IntegratorName>{this.props.name}</IntegratorName>
          </Header>
         
          <Completed monthly={this.props.monthly} total={this.props.total} daily={this.props.daily}/>

          <CompanyInfo mostRecentName={this.props.mostRecentName} mostRecentDate={this.props.mostRecentDate} mostRecentSubmitter={this.props.mostRecentSubmitter} 
          mostRecentBuilder={this.props.mostRecentBuilder} 
              mostRecentTier={this.props.mostRecentTier} mostRecentShortname={this.props.mostRecentShortname} mostRecentWebType={this.props.mostRecentWebType}
              mostRecentCompanyRegion={this.props.mostRecentCompanyRegion} colorProp={this.props.colorProp}/>

              <Modal name={this.props.name} monthly = {this.props.monthly} monthlyLive={this.props.monthlyLive} 
              daily={this.props.daily} dailyLive={this.props.dailyLive} total={this.props.total} 
              totalLive={this.props.totalLive} image={this.props.image} title={this.props.title}
              slack={this.props.slack} timezone={this.props.timezone} phone={this.props.phone} email={this.props.email}
              office={this.props.office} manager={this.props.manager} show={this.state.isOpen} onClose={this.toggleModal}
              recentName={this.props.mostRecentName} recentDate={this.props.mostRecentDate} recentSubmitter={this.props.mostRecentSubmitter} 
              recentBuilder={this.props.mostRecentBuilder} recentTier={this.props.mostRecentTier} recentShortname={this.props.mostRecentShortname} 
              recentWebType={this.props.mostRecentWebType}  mostRecentCompanyRegion={this.props.mostRecentCompanyRegion} colorProp={this.props.colorProp}
              mostRecentNameLive={this.props.mostRecentNameLive} mostRecentDateLive={this.props.mostRecentDateLive} mostRecentSubmitterLive={this.props.mostRecentSubmitterLive}
              mostRecentBuilderLive={this.props.mostRecentBuilderLive} mostRecentTierLive={this.props.mostRecentTierLive} mostRecentShortnameLive={this.props.mostRecentShortnameLive}
              mostRecentWebTypeLive={this.props.mostRecentWebTypeLive} mostRecentCompanyRegionLive={this.props.mostRecentCompanyRegionLive}tier0={this.props.tier0} tier1={this.props.tier1} 
              colorPropLive={this.props.colorPropLive} tier2={this.props.tier2} tier3={this.props.tier3} tier4={this.props.tier4}
              tier0Live={this.props.tier0Live} tier1Live={this.props.tier1Live} 
              tier2Live={this.props.tier2Live} tier3Live={this.props.tier3Live} tier4Live={this.props.tier4Live}/>  
           
        </IntegratorContainer>
    
      
    )
  }
}

export default Integrator;