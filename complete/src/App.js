

import React from 'react'
import { Container } from 'react-bootstrap'
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import Header from './components/Header'
import Loader from './components/Loader';


const Posts =React.lazy(()=>  import('./Pages/Posts'));
const Users  =React.lazy(()=> import('./Pages/Users'));
const Pictures =React.lazy(()=> import('./Pages/Pictures'));
const PrimeNumbers =React.lazy(()=> import('./Pages/PrimeNumbers'));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />       
        <Container>
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="users" element={<Users />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="pictures" element={<Pictures />} />
                    <Route path="prime_numbers" element={<PrimeNumbers />} />
                </Routes>
            </React.Suspense>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
