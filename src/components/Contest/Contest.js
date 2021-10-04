import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Contest = () => {
    return (
        <div>
                <Card className="text-center">
                <Card.Header className="text-info fs-3">Find Your Stength By Participating Contest</Card.Header>
                <Card.Body>
                <Card.Title>Contest on Various Catagories</Card.Title>
                <Card.Text className="w-75 mx-auto text-danger">
                    Fill up the form before deadline to partcipate.
                </Card.Text>
                
                </Card.Body>
                <Card.Footer className="text-muted">All rights of rule and regulation for the contest reserve to the Authority</Card.Footer>
            </Card>

        <div className="container d-flex">
            <div className="p-2">
                <Row xs={1} md={4} className="g-4">
                
                <Col>
                <Card className="h-100">
                    <Card.Img className="p-3"  variant="top" src="./images/guiter.jpg" />
                    <Card.Body>
                        <Card.Title>Guiter Contest</Card.Title>
                        <Card.Text>
                            <p>Deadline: 20 April,2022 </p>
                            <p>Contest Time: 20 March,2022</p>
                            <p>PrizeMoney: $200</p>
                            
                        </Card.Text>
                        <button className="btn btn-warning">Participate</button>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className="h-100">
                    <Card.Img variant="top"  className="p-3" src="./images/piyano.jpg" />
                    <Card.Body>
                        <Card.Title>Piyano Contest</Card.Title>
                        <Card.Text>
                            <p>Deadline: 20 April,2022 </p>
                            <p>Contest Time: 20 March,2022</p>
                            <p>PrizeMoney: $300</p>
                            
                        </Card.Text>
                        <button className="btn btn-warning">Participate</button>
                    </Card.Body>
                </Card>

                </Col>
                <Col>
                <Card className="h-100">
                    <Card.Img   className="p-3" variant="top" src="./images/drums.jpg" />
                    <Card.Body>
                        <Card.Title>Drums Contest</Card.Title>
                        <Card.Text>
                            <p>Deadline: 20 April,2022 </p>
                            <p>Contest Time: 20 March,2022</p>
                            <p>PrizeMoney: $100</p>
                            
                        </Card.Text>
                        <button className="btn btn-warning">Participate</button>
                    </Card.Body>
                </Card>

                </Col>
                <Col>
                <Card className="h-100">
                    <Card.Img className="p-3" variant="top" src="./images/violin.jpg" />
                    <Card.Body>
                        <Card.Title>Violin Contest</Card.Title>
                        <Card.Text>
                            <p>Deadline: 20 April,2022 </p>
                            <p>Contest Time: 20 March,2022</p>
                            <p>PrizeMoney: $500</p>
                            
                        </Card.Text>
                        <button className="btn btn-warning">Participate</button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </div>
           
        </div>
        </div>
    );
};

export default Contest;