import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
const UserCard = ({ user }) => {
    return (
        <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img variant="top" src={user.picture.large} />
            <Card.Body>
                <Card.Title>{user.name.title} {user.name.first} {user.name.last} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Row>
                    <Col>
                        <i class="fas fa-phone-alt"></i> {user.phone}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i class="fas fa-map-marker-alt"></i> {user.location.city}
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <i class="fas fa-calendar"></i> {user.dob.age}
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    )
}

export default UserCard