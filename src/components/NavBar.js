import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to={"/"} className="navbar-brand">Inicio</Link>
                    <Link to={"/conocenos"} className="nav-link">Conocenos</Link>
                    <Link to={"/contacto"} className="nav-link">Contacto</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to={"/registro"} className="nav-link">Registrarse</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={"/inicioSesion"} className="nav-link">Iniciar Sesión</Link>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}