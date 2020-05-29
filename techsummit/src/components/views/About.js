import React, { Component, Fragment } from 'react';
import { Carousel, Container, } from 'react-bootstrap';

class About extends Component {
    render() {
        return(
            <Fragment>
                <Container className="carousel-container">
                    <h4 className="header"> ESummit over the years.</h4>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://www.tricentis.com/wp-content/uploads/2020/01/Accelerate-Conference-Crowd-Shot-1-1120x433.jpg"
                                alt="1st slide"
                            />
                            <Carousel.Caption>
                                <h4>ESummit conference 2017</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://cdn.geekwire.com/wp-content/uploads/2019/06/summitday11820x1024.jpg"
                                alt="2nd slide"
                            />
                            <Carousel.Caption>
                                <h4>ESummit conference 2018</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://files.ondemandhosting.info/imagecache/cropfit@w=748@cr=309,256,1514,852@qa=85/blob/images/articles/4/d/4d2a035d-7dbf-11e9-8472-42010a800095/15th-human-rights-summit-dsc08518.jpg"
                                alt="3rd slide"
                            />
                            <Carousel.Caption>
                                <h4>ESummit conference 2019</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <div className="summit-brief">
                    <Container>
                        <div className="info-box">
                            <h3>About Us</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="info-box">
                            <h3>Vision</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </Container>
                </div>

            </Fragment>
        )
    }
}

export default About;