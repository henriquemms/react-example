import React from 'react';
import Header from '../../components/Header';
import Calculator from '../../components/Calculator'


function CalculatorPage(props) {
  return (
  <div>
    <Header name='Esta é a página da calculadora que só soma' />
    <br />
    <Calculator/>
  </div>
  );
}

export default CalculatorPage;
