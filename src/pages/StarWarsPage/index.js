import React from 'react';

import Header from '../../components/Header';
import StarWarsPeople from '../../components/star-wars/StarWarsPeople'


function StarWarsPage(props) {
  return (
  <div>
    <Header name='Esta é a página que usará a API do Star Wars' />

    <StarWarsPeople />

  </div>
  );
}

export default StarWarsPage;
