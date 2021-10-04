import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
                <Card className="text-center">
                <Card.Header className="text-info fs-3">Music Valley is one of the best Platform to start your Music career</Card.Header>
                <Card.Body>
                <Card.Title>We provide Both Online and Offline Courses</Card.Title>
                <Card.Text className="w-75 mx-auto">
                    We are here to help you to follow your passion. Our main moto is Music for anybody. We want to make things easy for tallented people who has passion and talent for music but can not get the oppurtunities.
                    If you have any trouble to manage fees..feel free to apply for scholarship.
                </Card.Text>
                
                <button className="btn-info" >Apply for Scholarship</button>

                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

        <div className="container d-flex">
            <div className="w-50 p-2">
                <Row xs={1} md={2} className="g-5">
                
                <Col>
                <Card>
                    <Card.Img className="p-3"  variant="top" src="./images/cover1.jpg" />
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top"  className="p-3" src="./images/cover2.jpg" />
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img   className="p-3" variant="top" src="./images/cover3.jpg" />
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img className="p-3" variant="top" src="./images/cover5.jpg" />
                </Card>
                </Col>
                </Row>
            </div>

            <div className="w-50 p-2">
                <ListGroup>
                    <ListGroup.Item>
                        <h2>We Provide several services</h2>
                    </ListGroup.Item>
                    <ListGroup.Item variant="primary">Guiter playing </ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        Violin
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success">
                        Piyano
                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                        Flute
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                        Drums
                    </ListGroup.Item>
                    <ListGroup.Item action variant="info">
                        Ukelele
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        Bagpine
                    </ListGroup.Item>
                    <ListGroup.Item action variant="dark">
                        Saxophone
                    </ListGroup.Item>
                </ListGroup>

            </div>
           
        </div>
        </div>
    );
};

export default About;