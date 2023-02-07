import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import { db, auth } from './firebase';
import { Navbar } from "./components/Navbar"
import { Container } from 'react-bootstrap';
import { Route, Router, Routes } from 'react-router-dom';
import { HomePage } from "./components/HomePage"
import { CarForm } from "./components/CarForm"
import ChatPage from "./components/ChatPage"
import Map from "./components/Map"
import { db } from "./firebase"
// import { Footer } from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar/>
      <Container className='mb-4' fluid
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingBottom: 0,
          paddingTop: 0,
          paddingRight: 0, 
        }}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/form' element={<CarForm/>} />
          <Route path='/chat' element={<ChatPage/>} />
          <Route path='/map' element={<Map/>}/>
        </Routes>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
