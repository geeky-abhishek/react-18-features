import React from 'react'
import { Card} from 'react-bootstrap';
const Post = ({ post }) => {
    return (
        <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Body>
                <Card.Title>{post.title}  </Card.Title>
                <Card.Text>
                   {post.body}
                </Card.Text>
            </Card.Body>
           
        </Card>
    )
}

export default Post