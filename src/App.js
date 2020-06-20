import React from 'react';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Conocenos from './components/Conocenos';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import InicioSesion from './components/InicioSesion';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RecuperarContrasena from './components/RecuperarContrasena';

function App() {
  const marginTop = {
    marginTop: "2%"
  };

  return (
    <div className="col-13">
    <Router>
        <NavigationBar/>
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
                <Switch>
                    <Route path="/" exact component={Inicio}/>
                    <Route path="/conocenos" exact component={Conocenos}/>
                    <Route path="/contacto" exact component={Contacto}/>
                    <Route path="/registro" exact component={Registro}/>
                    <Route path="/inicioSesion" exact component={InicioSesion}/>
                    <Route path="/recuperarContrasena" exact component={RecuperarContrasena}/>
                </Switch>
              </Col>
            </Row>
          </Container>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
