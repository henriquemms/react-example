import React from 'react';
import ValidationAge from './ValidationAge';

function Person(props) {
  return (
  <div>
    <h2>Meu nome é {props.name} e sou <ValidationAge idade={props.idade}/></h2>
  </div>
  );
}

export default Person;
