import React, { Component } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class InicioSesion extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        id:'', correo:'', contrasena:''
    };

    hacerAlgo = () => {
        alert("Hola");
    }

    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-8">
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header style={{"textAlign":"center"}}>
                        <h3>Iniciar Sesión</h3>
                    </Card.Header>
                    <Form onSubmit={this.hacerAlgo} id="personaFormId">
                        <Card.Body>
                                <Form.Group as={Col} controlId="formGridCorreo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="email"
                                        name="correo"
                                        //value={correo}
                                        onChange={this.personaChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Ingrese su correo"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridContrasena">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="password"
                                        name="contrasena"
                                        //value={contrasena}
                                        onChange={this.personaChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Ingrese su contraseña"
                                    />
                                </Form.Group>
                            
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="primary btn-block" type="submit">Ingresar</Button>
                            <Link to={"/recuperarContrasena"}>
                                <Card.Link>Recuperar contraseña</Card.Link>
                            </Link> 
                        </Card.Footer>
                    </Form>
                </Card>
                </div>
            </div>
        );
    }
}