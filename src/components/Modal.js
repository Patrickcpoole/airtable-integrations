import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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

const CompanyContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:stretch;
`;

const CompanyHeader = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`;

const CompanyHeading = styled.h1`
    font-size:.75rem;
    color:#282c34;
`;

const CompanySubheading = styled.h2`
    font-size:1rem;
    color:#282c34;
    margin-top:-.75vh;
`;

const InfoContainer = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
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
    font-size:.75rem;
    color:#282c34;
    font-weight:600;
    padding:5px;
`;

class Modal extends React.Component {
    
  render() {
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
                <div className="row-two">
                    <CompanyContainer>
                        <CompanyHeader>
                            <CompanyHeading>Last Company Integrated:</CompanyHeading>
                            <CompanySubheading>{this.props.recentName}</CompanySubheading>
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
                <div className="row-three"></div>
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
                        <CompletedNumber>40</CompletedNumber>
                        <CompletedText>Integrations Completed This Month</CompletedText>
                    </NumberContainer>
                    <NumberContainer>
                        <CompletedNumber>40</CompletedNumber>
                        <CompletedText>Total Integrations Completed</CompletedText>
                    </NumberContainer>
                    <NumberContainer>
                    <CompletedNumber>40</CompletedNumber>
                    <CompletedText>Integrations Completed Today</CompletedText>
                    </NumberContainer>
                </CompletedContainer>
                </div>
                <div className="row-two">
                <CompanyContainer>
                    <CompanyHeader>
                            <CompanyHeading>Last Company Integrated:</CompanyHeading>
                            <CompanySubheading>{this.props.recentName}</CompanySubheading>
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
                <div className="row-three">
                    
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