import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import '../../components/Header/Header.css';


function HomePage(props) {
  return (
    <div>
      <h1 class="tit_pag">Bem vindo ao sistema!</h1>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculadora</Link>
            </li>
            <li>
              <Link to="/star-wars">Star Wars</Link>
            </li>
          </ul>
        </nav>
      </div>



    </div>
  );
}

export default HomePage;
