import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';





function Header(props) {
  return (
<header class="back">   
      <div>
        <h1 class="tit_pag">{props.name}</h1>
        <Link class="back_home" to="/">Home</Link>
        <Link class="back_home" to="/calculator">Calculadora</Link>
        <Link class="back_home" to="/star-wars">Star Wars</Link>
      </div>
</header>
  );
}

export default Header;
