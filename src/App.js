import React from 'react';
import './App.css';
import Person from './Person';
import WelcomeMessage from './WelcomeMessage';
import Calculator from './components/Calculator';

function App() {
  return (
    <div>

     <h1>Este é um componente do react</h1>
     <Person name ='Matheus, menino bom' idade='16'/>
     <Person name ='Xibamba, o bruto'idade='25'/>
     ---------------------------------------------------------------------------------------------------------

    <h1>Projeto react training</h1>

    <WelcomeMessage name = 'Henrique'/>
    <Calculator title="Calculadora que só soma"/>



    </div>
  );
}

export default App;
