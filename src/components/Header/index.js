import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { BarraNavegacao, Imagem } from './css'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.logoff = this.logoff.bind(this)
  }

  logoff () {
    localStorage.removeItem('token');

  }

  render () {
    return (
      <BarraNavegacao>
        <Navbar
          className='navbarra'
          collapseOnSelect
          expand='lg'
          variant='dark'
        >
          <Navbar.Brand className='navbar-ligh' href='/'>
            {this.props.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/calculator'>Calculadora</Nav.Link>
              <Nav.Link href='/star-wars'>Star Wars</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                alignRight
                title={
                  <Imagem
                    src={
                      'https://i1.sndcdn.com/artworks-000577149764-s77dqq-t500x500.jpg'
                    }
                  />
                }
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item href='O que fazer?'>
                  Configuração
                </NavDropdown.Item>
                <NavDropdown.Item href='O que fazer?'>Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.logoff} href="/login-page">Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </BarraNavegacao>
    )
  }
}
export default Header
