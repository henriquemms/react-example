import React from 'react';
import './MyInputText.css';


function MyInputText(props) {
  return (
    <div>
      <div>
        <label class="rotulo">{props.label}: </label>
      </div>
      <input class="inputText" type={props.inputTyper}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default MyInputText;
