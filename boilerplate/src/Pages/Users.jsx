import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserCard from '../components/UserCard';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';

const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=500')
            .then(res => setUsers(res.data.results))
    }, []);
    
    if (!users)
        return <Loader />
    return (
        <Row>
            {users.map((user,index) =>
                <Col md='4' key={`${user.id.value}_${index}`}>
                     <UserCard user={user} />
                </Col>)}
        </Row>
    )
}

export default Users