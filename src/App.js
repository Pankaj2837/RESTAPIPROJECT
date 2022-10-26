import React from "react";
import"./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Allusers from "./components/Allusers";
import Adduser from "./components/Adduser";
import { ToastContainer } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import Menues from "./components/Menues";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App(){
    return (<div>
        <Router>
        <ToastContainer/>
        <Container>
            <Header/>
         <Row>
             <Col md={4}>
                <Menues/>
             </Col>
             <Col md={8}>
                 <Routes>
                 <Route path="/" element={<Home/>}exact/>
                 <Route path="/add-user" element={<Adduser/>}exact/>
                 <Route path="/view-user" element={<Allusers/>}exact/> 
                 </Routes>
             </Col>
         </Row>   
        </Container>
        </Router>
    </div>);
}

export default App;