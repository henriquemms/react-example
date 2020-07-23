import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { BtnConf, TecladoNUM } from './css'
import { Divisao } from './css'
import MyInputText from '../MyInputText'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      valueOne: '',
      valueTwo: '',
      result: ''
    }

    this.onChange = this.onChange.bind(this)
    this.sum = this.sum.bind(this)
  }

  //comentário para fazer anotações
  onChange (e) {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log(e.target.name)
  }

  sum () {
    let value1 = this.state.valueOne
    let value2 = this.state.valueTwo

    this.setState({ result: parseFloat(value1) + parseFloat(value2) })
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={8}>
            <Divisao>
              <MyInputText
                label='Valor 1'
                inputTyper='text'
                name='valueOne'
                value={this.state.valueOne}
                placeholder='Informe o primeiro valor'
                onChange={this.onChange}
              />

              <MyInputText
                label='Valor 2'
                inputTyper='text'
                name='valueTwo'
                value={this.state.valueTwo}
                placeholder='Informe o primeiro valor'
                onChange={this.onChange}
              />

              <BtnConf>
                <Button variant='success' onClick={this.sum}>
                  Calcular
                </Button>
              </BtnConf>

              <br />
              {this.state.result !== '' && (
                <span>O resultado é: {this.state.result}</span>
              )}
            </Divisao>
          </Col>
        </Row>

        <Container>
          <TecladoNUM>
            <Row className='justify-content-md-center'>
              <Col md='auto'>
                <Button className='.btn' variant='secondary' active>
                  1
                </Button>
              </Col>
              <Col md='auto'>
                <Button className='.btn' variant='secondary' active>
                  2
                </Button>
              </Col>
              <Col md='auto'>
                <Button className='.btn' variant='secondary' active>
                  3
                </Button>
              </Col>
            </Row>
          </TecladoNUM>
        </Container>
      </Container>
    )
  }
}

export default Calculator
