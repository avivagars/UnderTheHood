import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import { CarForm } from "./components/CarForm";
import { About } from "./components/About";
import ChatPage from "./components/ChatPage";
import Map from "./components/Map";


function App() {
  return (
    <div>
      <Navbar/>
      <Container fluid
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
          <Route path='/form/:issue' element={<CarForm/>} />
          <Route path='/chat/:id' element={<ChatPage/>} />
          <Route path='/map' element={<Map/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
