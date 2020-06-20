import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Conocenos extends Component {
    render(){
        return (
            <Jumbotron className="bg-dark text-white">
                <h1 className="text-center">Bienvenido al LMS</h1>
                <blockquote className="blockquote mb-0">
                    <h6 className="text-center">
                        Conócenos
                    </h6>
                    <footer className="text-center">
                        Escuela Superior de Cómputo - Instituto Politécnico Nacional
                    </footer>
                </blockquote>
            </Jumbotron>
        );
    }
}