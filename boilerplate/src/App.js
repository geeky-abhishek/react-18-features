

import React from 'react'
import { Container } from 'react-bootstrap'
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import Posts from './Pages/Posts'
import Users from './Pages/Users'
import Pictures from './Pages/Pictures'
import Header from './components/Header'
import  PrimeNumbers  from './Pages/PrimeNumbers';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />       
        <Container>
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
            <Route path="pictures" element={<Pictures />} />
            <Route path="prime_numbers" element={<PrimeNumbers />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
