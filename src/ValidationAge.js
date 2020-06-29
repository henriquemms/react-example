import React from 'react';

function ValidationAge(props) {
  return (
  <>
    {props.idade >= 18 ? <span style={{color:'pink'}}> maior de idade </span> : 'menor de idade'}
  </>
  );
}

export default ValidationAge;
