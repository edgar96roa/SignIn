import React, { Component } from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa";
import '../App.css';

export default class Footer extends Component {

    render(){
        const anio = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div className="text-white">
                            {anio} | Todos los derechos reservados <FaRegCopyright/>
                        </div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}