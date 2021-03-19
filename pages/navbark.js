import {Nav, Navbar} from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
    return (
      <div>
      <NavMenu/>
      </div>

  )

}

function NavMenu() {
  return (
    <Navbar expand="lg">
      <a href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado."><img className='whats' src='/whatsapp.png'/></a>
      <Navbar.Brand>
        <a href='/'><img src="/kalanchoe.png" alt="logotipo Kalanchoê Modas" className='img-fluid logo'/></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <Link href="/"><a className='navbar nav'>Home</a></Link>
          <Link href="/seja-uma-revendedora-de-roupas-femininas"><a className='navbar nav'>Seja uma revendedora</a></Link>
          <Link href="kalanchoe-modas"><a className='navbar nav' >A Kalanchoê</a></Link>
          <Link href="depoimentos"><a className='navbar nav'>Depoimentos</a></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation