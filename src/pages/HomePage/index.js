import React from 'react';
import {Link} from 'react-router-dom';


function HomePage(props) {
  return (
    <div>
      <h2>Bem vindo ao sistema!</h2>

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
