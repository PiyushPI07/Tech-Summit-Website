import React, { Component, Fragment } from 'react';
import { Container, Row, Col,Image, } from 'react-bootstrap';
import {Code, BusinessCenter, EmojiObjects, Person} from '@material-ui/icons';
import {Speakers} from '../../data/Speakers'
import {Sponsors} from '../../data/Sponsors'

// Data abstraction implemented by fetching data of speakers and sponsors from separate JavaScript Files.
// Data could be fetched from API endpoints into those separate files in Data directory in real world application.

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            Speakers,
            Sponsors
        }
    }
    
    render() {

        const speaker = this.state.Speakers.map((spkr) => {
            return(
                <Col xs={6} md={3}>
                    <div className="spkr-card">
                        {/* Material Icon used just for purpose of representation. Image component can be used for real world application, */}
                        <Person className="icon-person" style={{ fontSize: 120 }} />   
                        <h5>{spkr.name}</h5>
                        <h6>{spkr.designation}</h6>
                        <h6>{spkr.organisation}</h6>
                    </div>
                </Col>
            )
        })
        const sponsor = this.state.Sponsors.map((spnsr) => {
            return(
                <Col xs={6} md={3}>
                    <div className="spnsr-card">
                        {/* Material Icon used just for purpose of representation. Image component can be used for real world application, */}
                        <Image src={spnsr.logo_link} width="180px" />  
                        <h5>{spnsr.name}</h5>
                    </div>
                </Col>
            )
        })

        

        return (
          <Fragment>

                <div className="intro">
                    <Container>
                        <h1 className="logo">ESummit</h1>
                        A Global Tech Summit that provides software engineers, managers and start-ups with the latest trends in the technological world so that they can stay ahead of the curve.

                    </Container>
                </div>

                <div className="summit-brief">
                    <Container>
                        <h4 className="tech-header">Summit provides unrivalled access to top notch technology and business pioneeers in various sectors.</h4>
                        <div className="tech-div">
                            <Row justify-content>
                                <Col xs={10} md={4}>
                                    <div className="tech-card">
                                        <Code style={{ fontSize: 40 }}/>
                                        <h4>Software Development</h4>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </Col> 
                                <Col xs={10} md={4}>
                                    <div className="tech-card">
                                        <BusinessCenter style={{ fontSize: 40 }}/>
                                        <h4>Technologies in Business</h4>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </Col> 
                                <Col xs={10} md={4}>
                                    <div className="tech-card">
                                        <EmojiObjects style={{ fontSize: 40 }}/>
                                        <h4>StartUps and Investment</h4>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </Col> 
                            </Row>
                        </div>
                    </Container>
                </div>


                <div className="speakers">
                    <Container>
                        <h4 className="speakers-header">
                            Keynote speakers
                        </h4>
                        <Row>
                            {speaker}
                        </Row>
                    </Container>
                </div>

                <div className="sponsors-div">
                    <Container>
                        <h4 className="sponsors-header">
                            Sponsors
                        </h4>
                        <Row>
                            {sponsor}
                        </Row>
                    </Container>
                </div>
          </Fragment>
        )
    }
}


export default Home;