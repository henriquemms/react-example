import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import {isAuthenticated} from '../../services/isAuthenticated'


class Header extends React.Component {

  constructor(props) {

    super(props)

    this.logoff = this.logoff.bind(this);
  }


logoff () {
  localStorage.removeItem("token")
}


render () {
  return (
    
    

    <header className='back'>
      <div>
        <h1 className='tit_pag'>{this.props.name}</h1>
        <Link className='back_home' to='/'>
          Home
        </Link>
        <Link className='back_home' to='/login-page'>
          Login
        </Link>
        <Link className='back_home' to='/calculator'>
          Calculadora
        </Link>
        <Link className='back_home' to='/star-wars'>
          Star Wars
        </Link>
        <div className="logoff">
        <button type='button'
                onClick={this.logoff}>
          Logoff
        </button>
        </div>
      </div>
    </header>
  )
}
}
export default Header
