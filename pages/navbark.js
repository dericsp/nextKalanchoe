import {Nav, Navbar} from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
    return (
      <div>
      <Navtop/>
      <Navbottom/>
      </div>

  )

}

function Navtop() {
  return (

	<Nav className="navbar navbar-default navbar-fixed-top">

  <div className="btn-group btn-group-justified tamanhoMax" role="group">
  <a className ='justify-content-center' href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado."><img className='whats' src='/whatsapp.png'/></a>
    <div className="btn-group social" role="group">
      <span><a href="http://www.instagram.com/kalanchoemoda" target="_blank"><i className="fa fa-instagram"></i></a></span>
      <span><a href="http://www.facebook.com/kalanchoemoda" target="_blank"><i className="fa fa-facebook-square"></i></a></span>
    </div>
  </div>
        <span className="textoImagemW"><a href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado." target="_blank"></a></span>
      <span className="textoFonteW"><a href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado." target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></span>
</Nav>

  )


}

function Navbottom() {
  return (
<Navbar expand="lg">
  <Navbar.Brand>
    <img src="/kalanchoe.png" alt="logotipo Kalanchoê Modas" className='img-fluid logo'/>
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