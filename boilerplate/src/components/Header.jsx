import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link  } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React 18 Advance Features</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">
           <Link to="/users">Users</Link>
            </Nav.Link>
      <Nav.Link href="#features">
      <Link to="/posts">Posts</Link></Nav.Link>
      <Nav.Link href="#features">
      <Link to="/pictures">Pictures</Link></Nav.Link>
      <Nav.Link href="#features">
      <Link to="/prime_numbers">Prime Numbers</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header