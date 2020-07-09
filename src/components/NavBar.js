import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to={"/"} className="navbar-brand">Inicio</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to={"/conocenos"} className="nav-link">Conocenos</Link>
                <Link to={"/contacto"} className="nav-link">Contacto</Link>
                </Nav>
                <Nav>
                <Link to={"/registro"} className="nav-link">Registrarse</Link>
                <Link to={"/inicioSesion"} className="nav-link">Iniciar Sesión</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}