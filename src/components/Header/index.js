import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';





function Header(props) {
  return (
<header>
  
    <h1 class="tit_pag">{props.name}</h1>
      <div>
        <Link class="back_home" to="/">Voltar para home</Link>
      </div>

</header>
  );
}

export default Header;
