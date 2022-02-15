import React from 'react';
import CleanButton from './Components/CleanButton';
import Simulation from './Components/Simulation';
import Form from './Components/Form';
import './CSS/App.css';
import { logoURL } from './Images/logo.js';

class App extends React.Component {
  render () {
    return (
      <>
        <div className="header">
          <h1>Simulador de Investimentos</h1>
          <img className="logo" src={ logoURL }/>
        </div>
        <hr className="barra-divisoria"/>
        <CleanButton />
        <div className="container-principal">
          <Form />
          <div className="container-indicadores">
          <Simulation />
          </div>
        </div>
      </>
    );
  }
}

export default App;
