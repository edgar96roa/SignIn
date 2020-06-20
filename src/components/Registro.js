import React, { Component } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
//import axios from 'axios';

const marginTop = {
    marginBottom: "5%"
};

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        (valid = false);
    });
  
    return valid;
  };  

export default class Registro extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.usuarioChange = this.usuarioChange.bind(this);
        this.agregarUsuario = this.agregarUsuario.bind(this);
    }

    initialState = {
        id:'', nombre:'', primerApellido:'', segundoApellido:'', correo:'', contrasena:'', contrasena2:'', perfil:'',
        formErrors:{ id:'', nombre:'', primerApellido:'', segundoApellido:'', correo:'', contrasena:'', contrasena2:'', perfil:'' }
    };

    validarLongitudContrasena = e => {
        const passwordValidator = require('password-validator');
        const valido = new passwordValidator();
        const contrasena = this.state;

        valido.is().min(3).is().max(8);
        console.log(valido.validate(contrasena));

        let formErrors = this.state.formErrors;

        if(valido.validate(contrasena)===false) {
            formErrors.contrasena = "Debe tener entre 3 y 8 caracteres";
        }else{
            formErrors.contrasena = "";
        }
    }

    agregarUsuario = event => {
        event.preventDefault();
        this.validarLongitudContrasena();

        if (formValid(this.state)) {
            console.log(`
              --SUBMITTING--
              Nombre: ${this.state.nombre}
              Primer Apellido: ${this.state.primerApellido}
              Segundo Apellido: ${this.state.segundoApellido}
              Correo: ${this.state.correo}
              Contraseña: ${this.state.contrasena}
              Contraseña 2: ${this.state.contrasena2}
              Perfil: ${this.state.perfil}
            `);
          } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
        /*
        const usuario = {
            nombre: this.state.nombre,
            primerApellido: this.state.primerApellido,
            segundoApellido: this.state.segundoApellido,
            correo: this.state.correo,
            contrasena: this.state.contrasena,
            contrasena2: this.state.contrasena2,
            perfil: this.state.perfil
        };

        axios.post("http://localhost:8080/api/v1/personas", usuario)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"post"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                } else{
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);*/
    };

    usuarioChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        const { nombre, primerApellido, segundoApellido, correo, contrasena, contrasena2 } = this.state;

        return (
            <div className="row justify-content-center" style={marginTop}>
                <div className="col-6">
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header style={{"textAlign":"center"}}>
                        <h3>Registrarse</h3>
                    </Card.Header>
                    <Form onSubmit={this.agregarUsuario} id="personaFormId">
                        <Card.Body>
                            <Form.Group as={Col} controlId="formGridNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="nombre"
                                    value={nombre}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese su nombre"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrimerApellido">
                                <Form.Label>Primer Apellido</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="primerApellido"
                                    value={primerApellido}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese su primer apellido"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridSegundoApellido">
                                <Form.Label>Segundo Apellido</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="segundoApellido"
                                    value={segundoApellido}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese su segundo apellido"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCorreo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="email"
                                    name="correo"
                                    value={correo}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese su correo"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridContrasenia">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="password"
                                    name="contrasena"
                                    value={contrasena}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese su contraseña"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridContrasenia2">
                                <Form.Label>Repetir Contraseña</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="password"
                                    name="contrasena2"
                                    value={contrasena2}
                                    onChange={this.usuarioChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese nuevamente su contraseña"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPerfil" required>
                                <Form.Label>Seleccionar perfil</Form.Label>
                                <Col>
                                    <Form.Check
                                        required
                                        type="radio"
                                        label="Alumno"
                                        name="perfil"
                                        id="perfilAlumno"
                                        value={"alumno"}
                                        onChange={this.usuarioChange}
                                    />
                                    <Form.Check
                                        required
                                        type="radio"
                                        label="Profesor"
                                        name="perfil"
                                        id="perfilProfesor"
                                        value={"profesor"}
                                        onChange={this.usuarioChange}
                                    />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="primary btn-block" type="submit">Registrarse</Button>              
                        </Card.Footer>
                    </Form>
                </Card>
                </div>
            </div>
        );
    }
}