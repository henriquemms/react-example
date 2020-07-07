import React, { Component } from 'react';
import MyInputText from '../MyInputText';
import './login.css';

class Login extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            login: "",
            pass: ""
        }

        this.onChange = this.onChange.bind(this);
        this.sum = this.dateMessage.bind(this);

    }

    onChange(e) {
        e.persist()
        this.setState({ [e.target.name]: e.target.value })
      }

    dateMessage(props){
        alert(this.login);
        //alert("Usuário digitado: " + this.state.login + "\nSenha digitada: " + this.state.pass);
    }



        render() {
            return (
                <form class="formulario">
                    <MyInputText label="Digite o usuário" 
                                 inputTyper="text"
                                 name="login"
                                 value={this.state.login}
                                 onChange={this.onChange}/>
                    <br/>

                    <MyInputText label="Digite a senha" 
                                 inputTyper="password"
                                 name="pass"
                                 value={this.state.pass}
                                 onChange={this.onChange}/>

                    <br/>
                    <br/>
                    <button class="btn" type="button"
                        onClick={this.dateMessage}>Autenticar</button>
                </form>
            );
        }

}

export default Login;