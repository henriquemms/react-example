import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


import Alerta from '../Alerta'
import MyInputText from '../MyInputText';
import { BtnConf } from './css';
import { Divisao } from './css';

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      login: '',
      pass: '',
      blank_login: '',
      blank_pass: '',
      logged: false,
      alertaExibe: false,
      alertaVariant: '',
      alertaMensagem: ''
    }

    this.onChange = this.onChange.bind(this)
    this.dateMessage = this.dateMessage.bind(this)
  }

  onChange (e) {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  dateMessage () {
    var user = 'Henrique'
    var password = '123456'

    if (this.state.login === '') {
      this.setState({ blank_login: '*Informe o usuário' })
    } else {
      this.setState({ blank_login: '' })
    }

    if (this.state.pass === '') {
      this.setState({ blank_pass: '*Informe a senha' })
    } else {
      this.setState({ blank_pass: '' })
    }

    if (user === this.state.login && password === this.state.pass) {
      localStorage.setItem('token', 'Viva');
      this.setState({logged : true,  alertaExibe: false});

    } else if (this.state.login !== '' && this.state.pass !== ''){
      this.setState({
        alertaExibe: 'true',
        alertaVariant: 'danger',
        alertaMensagem: 'Usuário e/ou senha errado'
      })
    } else {
      this.setState({alertaExibe: false});
    } 
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={5}>
            <Divisao>
              <MyInputText
                label='Digite o usuário'
                inputTyper='text'
                name='login'
                value={this.state.login}
                placeholder='Digite seu usuário para logar'
                onChange={this.onChange}
                alerta={this.state.blank_login}
              />

              <MyInputText
                label='Digite a senha'
                inputTyper='password'
                name='pass'
                value={this.state.pass}
                placeholder='Digite sua senha para logar'
                onChange={this.onChange}
                alerta={this.state.blank_pass}
              />

<Alerta
                  show={this.state.alertaExibe}
                  variant={this.state.alertaVariant}
                  mensagem={this.state.alertaMensagem}
                />

              <BtnConf>
                <Button variant='success' onClick={this.dateMessage}>
                  Autenticar
                </Button>
              </BtnConf>

              {this.state.logged&&<Redirect to={{ pathname : '/', state:{ from: this.props.location } }} />}
            </Divisao>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login
