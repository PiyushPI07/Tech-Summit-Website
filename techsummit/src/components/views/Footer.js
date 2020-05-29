import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Instagram, Facebook,MailOutline, LinkedIn, Call, Business} from '@material-ui/icons';
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer-container">
                    <Container >
                        <div className="footer-row">
                            <Row>
                                <Col xs={4} md={3}>
                                    <h4>Quick Links</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/conference">Conference</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/sessions">Sessions</Link></li>
                                    </ul>
                                </Col>
                                <Col xs={8} md={6}>
                                    <h4> Event Secretariat</h4>
                                    <h5>FameTronix</h5>
                                    <Row>
                                        <Col xs={1}>
                                            <Business /> 
                                        </Col>
                                        <Col xs={9}>
                                            <p>
                                                #1300, 1st Floor, 13th cross,
                                                Eshwara Layout, Indiranagar,
                                                2nd Stage, Bangalore - 560038
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <Call /> 
                                        </Col>
                                        <Col xs={9}>
                                            <p>
                                                +91 63622 50931
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3}>
                                    <h4>Social Media</h4>
                                    <ul className="list-inline">
                                        <li><a href="ingalepiyush459@gmail.com">
                                            <span><MailOutline>filled</MailOutline></span>
                                        </a></li>
                                        <li><a href="www.instagram.com">
                                            <span><Instagram>filled</Instagram></span>
                                        </a></li>
                                        <li><a href="facebook.com">
                                            <span><Facebook>filled</Facebook></span>
                                        </a></li>
                                        <li><a href="linkedin.com">
                                            <span><LinkedIn>filled</LinkedIn></span>
                                        </a></li>

                                    </ul>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </footer>

            </Fragment>
        )
    }
}


export default Footer;