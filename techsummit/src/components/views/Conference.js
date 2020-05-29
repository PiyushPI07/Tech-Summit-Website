import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Table, Form, Button, Image } from 'react-bootstrap';
import { Room, Layers, EventSeat, Flight } from '@material-ui/icons';

class Conference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fname:"",
            Lname:"",
            email:"",
            phone:"",
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            clicked: !this.state.clicked,
        })
    }


    render() {
        console.log("Conf")
        return(
            <Fragment>
                <div className="conf-container">
                    <div className="programmes">
                        <Container>
                            <h5 className="prog-header">Programmes</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Container>
                    </div>
                    <div className="summit-brief">
                        <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={12}>
                                            <h2 className="venue"> Venue: National Auditorium, Mumbai</h2>
                                        </Col>
                                        <Col xs={10} md={3}>
                                            <Flight style={{ fontSize: 100 }} />
                                            <h5> Worldwide Connectivity</h5>
                                        </Col>
                                        <Col xs={10} md={3}>
                                            <Room style={{ fontSize: 100 }} />
                                            <h5>Great Location</h5>
                                        </Col>
                                        <Col xs={10} md={3}>
                                            <Layers style={{ fontSize: 100 }} />
                                            <h5>20,000+ SQ.M</h5>
                                        </Col>
                                        <Col xs={10} md={3}>
                                            <EventSeat style={{ fontSize: 100 }} />
                                            <h5>5000+ Seats</h5>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Image className='venue-img' src="https://www.totalexpo.ie/wp-content/uploads/Liffey-Stage-at-Dublin-Tech-Summit-2018-v1.jpg" width="700px"/>
                                </Col>
                            </Row>
                        </Container>
                        <p style={{ float: "right" , marginRight:"35px"  }}>*image and name for representational purpose only</p>

                    </div> 
                    
                    
                    <div className="schedule">
                        <Container>
                            <h4>Delegate Tariff</h4>
                            <Table variant="dark">
                                <thead>
                                    <th>Date</th>
                                    <th>Registration Slots</th>
                                    <th>Tariff*</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1st to 7th June, 2020</td>
                                        <td>100</td>
                                        <td>Rs. 1000</td>
                                    </tr>
                                    <tr>
                                        <td>8th to 24th June, 2020</td>
                                        <td>300</td>
                                        <td>Rs. 1500</td>
                                    </tr>
                                    <tr>
                                        <td>25th June, 2020 and onwards, On spot egistrations.</td>
                                        <td>500</td>
                                        <td>Rs. 2500</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>(*Terms and conditions apply)</p>
                        </Container>
                    </div>
                    <div className="reg-div">
                        <Container>
                            <Button onClick={this.handleClick}> Register!</Button>
                        </Container>
                        {this.state.clicked ? 
                            <Container>
                                <div className="reg-form">
                                    <Form>
                                        <Row>

                                            <Col xs={12} md={4}>
                                                <Form.Group controlId="formGroupFirstName">
                                                    <Form.Label>FirstName</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter first name" onChange={(e)=>{this.setState({Fname: e.target.value})}}/>
                                                </Form.Group>
                                            </Col>

                                            <Col xs={10} md={4}>
                                                <Form.Group controlId="formGroupLastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter last name" onChange={(e) => { this.setState({ Lname: e.target.value }) }} />
                                                </Form.Group>
                                            </Col>
                                                
                                            <Col xs={10} md={8} >
                                                {/* input-box will get red outline for invalid mail id */}
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                                </Form.Group>
                                            </Col>

                                            <Col xs={10} md={8}>
                                                <Form.Group controlId="formGroupPhone">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                                                </Form.Group>
                                            </Col>

                                            <Col xs={12}>
                                                {/* Button to send information collected from form to backend */}
                                                <Button>Submit</Button>
                                            </Col>
                                        </Row>

                                    </Form>
                                </div>  
                            </Container>
                            
                            :null
                        }
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Conference;