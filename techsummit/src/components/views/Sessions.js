import React, {Component, Fragment} from 'react';
import { Col, Row, Container, Button, Tabs, Tab } from 'react-bootstrap';



class Sessions extends Component {
    constructor(Props){
        super();
        this.state= {
            key: "IT_Sessions",
        }
    }

    render() {
        return(
            <Fragment>
                <div className="session-div">
                    <Tabs
                        activeKey={this.state.key}
                        onSelect={(e) => { this.setState({ key: e }) }}
                    >
                        <Tab eventKey="IT_Sessions" title="IT Sessions" className="IT-tab">
                            <div className="itsess-div">
                                <Container>
                                    <Row>
                                        <Col xs={10} md={8}>
                                            <div className="session">
                                                <h3>Session Title 1</h3>
                                                <h4>Timings and venue</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <Button variant="secondary">Apply!</Button>
                                            </div>
                                        </Col>
                                    </Row>

                                </Container>
                            </div>

                            <div className="itsess-div">
                                <Container>
                                    <Row>
                                        <Col xs={10} md={8}>
                                            <div className="session">
                                                <h3>Session Title 2</h3>
                                                <h4>Timings and venue</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <Button variant="secondary" className="biz-button">Apply!</Button>
                                            </div>
                                        </Col>
                                    </Row>

                                </Container>
                            </div>
                        </Tab>
                        <Tab eventKey="Biz_Sessions" title="Business Sessions" className="biz-tab">
                            <div className="bizsess-div">
                                <Container>
                                    <Row>
                                        <Col xs={10} md={8}>
                                            <div className="session">
                                                <h3>Session Title</h3>
                                                <h4>Timings and venue</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <Button variant="secondary">Apply!</Button>
                                            </div>
                                        </Col>
                                    </Row>

                                </Container>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Fragment>

        )
    }
}
export default Sessions;