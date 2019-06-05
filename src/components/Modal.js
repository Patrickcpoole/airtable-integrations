import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from './Chart';



const CompletedContainer = styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-direction: row;
    border-color:#282c34;
    
`;

const NumberContainer = styled.div`
    width:33%;
    height:100%;
    margin-top:-5%;
    @media (max-width: 1500px) {
    margin-top:-10%;
  }
`;

const CompletedNumber = styled.h1`
    color:#282c34;
    font-size:2.5rem;
    @media (max-width: 1500px) {
    font-size:2.25rem;
    margin-top:25%;
  }
`;

const CompletedText = styled.h2`
    color:#282c34;
    font-size:1rem;
    padding:10px;
    margin-top:-3vh;
    @media (max-width: 1500px) {
    font-size:.75rem;
   
  }
`;

const CompanyContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:stretch;
    margin-top:-10%;
`;

const CompanyHeader = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

const CompanyHeading = styled.h1`
    font-size:1.25rem;
    color:#282c34;
    @media (max-width: 1500px) {
    font-size:1rem;
   
  }
`;

const CompanySubheading = styled.h2`
    font-size:1rem;
    color:#282c34;
    margin-top:-.75vh;
    @media (max-width: 1500px) {
    font-size:.75rem;
   
  }
`;

const InfoContainer = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:10%;
    
`;

const InfoRight = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`;

const InfoLeft = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const InfoText = styled.p`
    font-size:.85rem;
    color:#282c34;
    font-weight:600;
    padding:5px;
    @media (max-width: 1500px) {
    font-size:.75rem;
   
  }
`;

const CompanyLocation = styled.h3`
    font-size:1rem;
    color:#282c34;
    margin-top:.75vh;
    display:inline-block;
    border-radius:300px;
    padding: 5px 15px 5px 15px;
    background:${props => props.color};
    width:max-content;
    @media (max-width: 1500px) {
    font-size:.75rem;
   
  }
`;

const marginLeft = {
    marginLeft:'2.5%'
};




class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{},
            chartDataLive:{},
        
          }
    }
    
    componentDidMount(){
        this.getChartData();
        console.log(this.props.tier0)
        
      }

      

      getChartData(){
          
          
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Tier 0', 'Tier 1', ' Tier 2', 'Tier 3', 'Tier 4'],
            datasets:[
              {
                label: 'Integrations Completed',
                data:[
                  this.props.tier0,
                  this.props.tier1,
                  this.props.tier2,
                  this.props.tier3,
                  this.props.tier4
                ],
                backgroundColor:[
                  'rgb(175, 132, 249)',
                  'rgb(255, 210, 102)',
                  'rgb(96, 175, 100)',
                  'rgb(229, 131, 84)',
                  'rgb(226, 129, 202)'
                ]
              }
            ]
          },
          chartDataLive:{
            labels: ['Tier 0', 'Tier 1', ' Tier 2', 'Tier 3', 'Tier 4'],
            datasets:[
              {
                label: 'Integrations Completed',
                data:[
                  this.props.tier0Live,
                  this.props.tier1Live,
                  this.props.tier2Live,
                  this.props.tier3Live,
                  this.props.tier4Live
                ],
                backgroundColor:[
                    'rgb(175, 132, 249)',
                    'rgb(255, 210, 102)',
                    'rgb(96, 175, 100)',
                    'rgb(229, 131, 84)',
                    'rgb(226, 129, 202)'
                ]
              }
            ]
          }
        });
      }
      
  render() {
    console.log(this.props.mostRecentNameLive);
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    
    return (
        
        <div className="modal">
        <div className="modal-card">
            <div className="left-column">
                <div className="row-one">
                <h3>OB Integration Requests</h3>
                    <CompletedContainer>
                        <NumberContainer>
                            <CompletedNumber>{this.props.monthly}</CompletedNumber>
                            <CompletedText>Integrations Completed This Month</CompletedText>
                        </NumberContainer>
                        <NumberContainer>
                            <CompletedNumber>{this.props.total}</CompletedNumber>
                            <CompletedText>Total Integrations Completed</CompletedText>
                        </NumberContainer>
                        <NumberContainer>
                            <CompletedNumber>{this.props.daily}</CompletedNumber>
                            <CompletedText>Integrations Completed Today</CompletedText>
                        </NumberContainer>
                    </CompletedContainer>
                </div>
                <div className="row-two-left">
                    <CompanyContainer>
                        <CompanyHeader>
                            <CompanyHeading>Last Company Integrated:</CompanyHeading>
                            <CompanySubheading>{this.props.recentName}</CompanySubheading>
                            <CompanyLocation color={this.props.colorProp}>{this.props.mostRecentCompanyRegion}</CompanyLocation>
                        </CompanyHeader>
                        <InfoContainer>
                            <InfoLeft>
                                <InfoText>Completion date: {this.props.recentDate}</InfoText>
                                <InfoText>Submitted by: {this.props.recentSubmitter}</InfoText>
                                <InfoText>Dashboard Builder: {this.props.recentBuilder}</InfoText>
                            </InfoLeft>
                            <InfoRight>
                                <InfoText>Tier: {this.props.recentTier}</InfoText>
                                <InfoText>Shortname: {this.props.recentShortname}</InfoText>
                                <InfoText>Web type: {this.props.recentWebType}</InfoText>
                            </InfoRight>
                        </InfoContainer>
                    </CompanyContainer>
                </div>
                <div className="row-three-left">
                    <div className="chart-container">
                        <Chart chartData={this.state.chartData} tierType="OB" legendPosition="bottom" />
                    </div>
                </div>
            </div>
            <div className="middle-column">
                <div className="top-row">
                    <h2>{this.props.name}</h2>
                    <img className="modal-picture" src={this.props.image} />
                   
                    <button className="close-button" onClick={this.props.onClose} >Close</button>
                    <h3>{this.props.title}</h3>
                </div>
                <div className="bottom-row">
                    <h5>Slack Name: {this.props.slack}</h5>
                    <h5>TimeZone: {this.props.timezone}</h5>
                    <h5>Phone Number: {this.props.phone}</h5>
                    <h5>Email: {this.props.email} </h5>
                    <h5>Office: {this.props.office}</h5>
                    <h5>Manager: {this.props.manager}</h5>
                </div>
            </div>
            <div className="right-column">
                <div className="row-one">
                <h3>Live Integration Requests</h3>
                <CompletedContainer>
                    <NumberContainer>
                        <CompletedNumber>{this.props.monthlyLive}</CompletedNumber>
                        <CompletedText>Integrations Completed This Month</CompletedText>
                    </NumberContainer>
                    <NumberContainer>
                        <CompletedNumber>{this.props.totalLive}</CompletedNumber>
                        <CompletedText>Total Integrations Completed</CompletedText>
                    </NumberContainer>
                    <NumberContainer>
                    <CompletedNumber>{this.props.dailyLive}</CompletedNumber>
                    <CompletedText>Integrations Completed Today</CompletedText>
                    </NumberContainer>
                </CompletedContainer>
                </div>
                <div className="row-two-right">
                <CompanyContainer>
                    <CompanyHeader>
                            <CompanyHeading>Last Company Integrated:</CompanyHeading>
                            <CompanySubheading>{this.props.mostRecentNameLive}</CompanySubheading>
                            <CompanyLocation color={this.props.colorPropLive}>{this.props.mostRecentCompanyRegionLive}</CompanyLocation>
                        </CompanyHeader>
                        <InfoContainer>
                            <InfoLeft>
                                <InfoText>Completion date: {this.props.mostRecentDateLive}</InfoText>
                                <InfoText>Submitted by: {this.props.mostRecentSubmitterLive}</InfoText>
                                <InfoText>Integration Type: {this.props.mostRecentIntegrationTypeLive}</InfoText>
                            </InfoLeft>
                            <InfoRight>
                                <InfoText>Tier: {this.props.mostRecentTierLive}</InfoText>
                                <InfoText>Shortname: {this.props.mostRecentShortnameLive}</InfoText>
                                <InfoText>Web type: {this.props.mostRecentWebTypeLive}</InfoText>
                            </InfoRight>
                        </InfoContainer>
                    </CompanyContainer>
                </div>
                <div className="row-three-right">
                    <div style={marginLeft} className="chart-container">
                        <Chart  chartData={this.state.chartDataLive} tierType="Live" legendPosition="bottom"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;