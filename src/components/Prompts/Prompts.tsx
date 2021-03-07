import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row } from 'react-bootstrap'
//BS

export const Prompts = () => {
    
    let { xxxData, getData } = useGetData();
    console.log(xxxData)
    
    const [count, setCount] = useState(0);
    
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Provide Some Information</h1>
                        <h2>The will help you choose </h2>
                        <Button>Next Question</Button>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        {xxxData.map ( (item:any) =>(
                            <div key="item.id">
                                <Card style= {{ width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            { item.xxx }
                                        </Card.Title>
                                        <Card.Text>
                                            { item.xxx }
                                        </Card.Text>
                                        <Card.Text>
                                            { item.xxx }
                                        </Card.Text>
                                    
                                        <Button variant="danger">Delete</Button>
                                        <Button variant="primary">Enter</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

