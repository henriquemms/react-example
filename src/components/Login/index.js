import React from 'react'
import MyInputText from '../MyInputText'
import './login.css'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      login: '',
      pass: '',
      blank_login: '',
      blank_pass: '',
      fail_aut: ''
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

    if(this.state.login === ''){
      this.setState({blank_login : '*Informe o usuário'})
    }
    else{
      this.setState({blank_login : ''})
    }

    if(this.state.pass === ''){
      this.setState({blank_pass : '*Informe a senha'})
    }
    else{
      this.setState({blank_pass : ''})
    }


    if (user === this.state.login && password === this.state.pass) {
      localStorage.setItem('token', 'Viva')
    }
  }

  render () {
    return (
      <form className='formulario'>
        <MyInputText
          label='Digite o usuário'
          inputTyper='text'
          name='login'
          value={this.state.login}
          onChange={this.onChange}
        />
        <span className='blankData'>{this.state.blank_login}</span>

        <br />

        <MyInputText
          label='Digite a senha'
          inputTyper='password'
          name='pass'
          value={this.state.pass}
          onChange={this.onChange}
        />
        <span className='blankData'>{this.state.blank_pass}</span>

        <br />
        <br />
        <button className='btn' type='button' onClick={this.dateMessage}>
          Autenticar
        </button>
      </form>
    )
  }
}

export default Login
