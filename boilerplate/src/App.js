

import React from 'react'
import { Container } from 'react-bootstrap'
import Posts from './Pages/Posts'
import Users from './Pages/Users'
import Pictures from './Pages/Pictures'
import Header from './components/Header'
import {  BrowserRouter, Routes,  Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>

        <Header />
        <Container>

        

        </Container>
        <Container>
          <Routes>

            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
            <Route path="pictures" element={<Pictures />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
