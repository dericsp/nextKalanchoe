import {Nav, Navbar} from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
    return (
      <NavMenu/>
  )

}

function NavMenu() {
  return (
    <div>
    <Link href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado."><a><img className='whats' src='/whatsapp.png'/></a></Link>
    <Navbar expand="lg">
      <Navbar.Brand href='/'>
        <img src="/kalanchoe.png" alt="logotipo Kalanchoê Modas" className='img-fluid logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <Link href="/">
            <a className='navLink'>Home</a>
          </Link>
          <Link href="/seja-uma-revendedora-de-roupas-femininas">
            <a className='navLink'>Seja uma revendedora</a>
          </Link>
          <Link href="/kalanchoe-modas">
            <a className='navLink'>A Kalanchoê</a>
          </Link>
          <Link href="/depoimentos" className='navLink'>
            <a className='navLink'>Depoimentos</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default Navigation