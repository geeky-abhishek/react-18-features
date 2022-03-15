import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Picture from '../components/Picture';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';

const Pictures = () => {
    const [pictures, setPictures] = useState()
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=500')
            .then(res => setPictures(res.data.results))
    }, [])
    console.log('picturesss:', pictures);

    if (!pictures)
        return <Loader />
    return (
        <Row>
            {pictures.map((picture,index) =>
                <Col md='3' key={`${picture.userId}_${index}`}>
                     <Picture picture={picture} />
                </Col>)}
        </Row>
    )
}

export default Pictures