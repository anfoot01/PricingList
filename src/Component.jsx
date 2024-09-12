import "./App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
 
        <Container className="my-5">
            <Row className="text-center">
                <Col lg={4} md={6} className="mb-4">
                    <Card className="pricing-table border-0 shadow">
                        <Card.Header className="pricing-header bg-light text-dark">
                            <h2 className="h4">Basic</h2>
                            <p className="h1">$19<span className="h6">/month</span></p>
                        </Card.Header>
                        <Card.Body className="pricing-body text-center">
                            <ul className="list-unstyled">
                                <li>10 Users</li>
                                <li>5GB Storage</li>
                                <li>Basic Support</li>
                            </ul>
                            <Button variant="primary">Sign Up</Button>
                        </Card.Body>
                        <Card.Footer className="pricing-footer bg-light text-dark">
                            <small>Most popular</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4} md={6} className="mb-4">
                    <Card className="pricing-table border-0 shadow">
                        <Card.Header className="pricing-header bg-primary text-white">
                            <h2 className="h4">Standard</h2>
                            <p className="h1">$39<span className="h6">/month</span></p>
                        </Card.Header>
                        <Card.Body className="pricing-body text-center">
                            <ul className="list-unstyled">
                                <li>50 Users</li>
                                <li>20GB Storage</li>
                                <li>Priority Support</li>
                            </ul>
                            <Button variant="light">Sign Up</Button>
                        </Card.Body>
                        <Card.Footer className="pricing-footer bg-light text-dark">
                            <small>Recommended</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4} md={6} className="mb-4">
                    <Card className="pricing-table border-0 shadow">
                        <Card.Header className="pricing-header bg-dark text-white">
                            <h2 className="h4">Premium</h2>
                            <p className="h1">$99<span className="h6">/month</span></p>
                        </Card.Header>
                        <Card.Body className="pricing-body text-center">
                            <ul className="list-unstyled">
                                <li>Unlimited Users</li>
                                <li>100GB Storage</li>
                                <li>24/7 Support</li>
                            </ul>
                            <Button variant="light">Sign Up</Button>
                        </Card.Body>
                        <Card.Footer className="pricing-footer bg-light text-dark">
                            <small>Best Value</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default App;
