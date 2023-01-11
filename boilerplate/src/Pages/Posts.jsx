import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from '../components/Post';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';

const Posts = () => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
    }, [])
    console.log('Postss:', posts);

    if (!posts)
        return <Loader />
        
    return (
        <>
        <h6>Test</h6>
        <Row>
            {posts.map((post,index) =>
                <Col md='4' key={`${posts.userId}_${index}`}>
                     <Post post={post} />
                </Col>)}
        </Row>
        </>
    )
}

export default Posts