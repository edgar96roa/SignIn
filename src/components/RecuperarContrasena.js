import React, { Component } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';

export default class RecuperarContrasena extends Component {
    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-8">
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header style={{"textAlign":"center"}}>
                            <h3>Recuperar contraseña</h3>
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
                            </Card.Body>
                            <Card.Footer style={{"textAlign":"right"}}>
                                <Button size="sm" variant="primary btn-block" type="submit">
                                    Enviar
                                </Button>
                            </Card.Footer>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}