import React from 'react';
import Header from '../../components/Header';
import '../../components/Header/Header.css';
import Login from '../../components/Login'


function LoginPage(props) {
  return (
    <div>
    <Header name='Página de login' /> 
    <br />
    <Login/>
    </div>
  );
}

export default LoginPage;
