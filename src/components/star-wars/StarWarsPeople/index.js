import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { BtnConf } from './css'
import { Divisao } from './css'
import { findById } from '../../../services/StarWarsService'
import Alerta from '../../Alerta'
import MyInputText from '../../MyInputText'

class StarWarsPeople extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: undefined,
      cod: '',
      imc: 0,
      alertaExibe: false,
      alertaVariant: '',
      alertaMensagem: ''
    }
  }

  onChange = e => {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  buscaPersonagem = id => {
    if (id !== '') {
      this.setState({ alertaSemCodigo: 'false' })

      findById(id)
        .then(res => {
          if (res.ok) {
            return res.json().then(res => {
              this.setState({ person: res })
            })
          } else {
            return Promise.reject(
              'Algum erro aconteceu. Talvez tenha sido um erro 404'
            )
          }
        })
        .catch(err => {
          this.setState({
            perso: undefined,
            alertaSemCodigo: 'true',
            alertaVariant: 'danger',
            alertaMensagem: 'Código informado inválido.'
          })
        })
    } else {
      this.setState({
        alertaSemCodigo: 'true',
        alertaVariant: 'warning',
        alertaMensagem: 'Informe o código da personagem'
      })
    }
  }

  genero = () => {
    let gen = this.state.person.gender

    if (gen === 'male') {
      return 'Masculino'
    } else if (gen === 'female') {
      return 'Feminino'
    } else {
      return 'Indefinido'
    }
  }

  calcIMC = () => {
    let peso = this.state.person.mass
    let altura = this.state.person.height / 100
    return (peso / (altura * altura)).toFixed(2)
  }

  render () {
    return (
      <div>
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={8}>
              <Divisao>
                <MyInputText
                  label='Entre com o código do personagem '
                  inputTyper='text'
                  name='cod'
                  value={this.state.cod}
                  placeholder='Informe o código da personagem'
                  onChange={this.onChange}
                />

                <Alerta
                  show={this.props.alertaExibe}
                  variant={this.props.alertaVariant}
                  mensagem={this.props.alertaMensagem}
                />

                <BtnConf>
                  <Button
                    variant='success'
                    onClick={() => this.buscaPersonagem(this.state.cod)}
                  >
                    Buscar
                  </Button>
                </BtnConf>
              </Divisao>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className='justify-content-md-center'>
            <Col md={8}>
              <Divisao>
                {this.state.person && (
                  <span>Nome: {this.state.person.name} </span>
                )}
                <br />
                {this.state.person && (
                  <span>Altura: {this.state.person.height / 100}m</span>
                )}
                <br />
                {this.state.person && (
                  <span>Peso: {this.state.person.mass} Kg</span>
                )}
                <br />
                {this.state.person && <span>IMC: {this.calcIMC()}</span>}
                <br />
                {this.state.person && <span>Genero: {this.genero()}</span>}
                <br />
              </Divisao>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {this.state.person && (
          <span>
            Ignorar texto abaixo, ele foi inserido somente para exemplo do JSON
            <br />
            <br />
            <br /> {JSON.stringify(this.state.person)}{' '}
          </span>
        )}
      </div>
    )
  }
}

export default StarWarsPeople
