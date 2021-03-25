import {Nav, Navbar} from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Navigation() {
    return (
      <NavMenu/>
  )

}

function NavMenu() {
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="content-language" content="pt-br, en-US, fr" />
        <meta name="description" content="O seguimento de moda jovem feminina é um dos mercados que mais tem crescido no Brasil. Tornando-se uma revendedora Kalanchoê Modas você vai ter a oportunidade de lucrar vendendo moda feminina de qualidade, preço justo e peças diferenciadas." />
        <meta name="keywords" content="kalanchoe,kalanchoê,renvender,roupas,femininas,revendedora,consultora,modas,moda,jovem,feminina,sao,jose,dos,campos,mogi,das,cruzes,aruja,suzano,jacarei,itatiba,valinhos,sumare,hortolandia,arujá,sjc,sp,são,josé" />
        <meta name="robots" content="index,follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="cache-control" content="max-age=360000"/>
      </Head>
      <Link href="https://api.whatsapp.com/send?phone=5511998305337&amp;text=Gostaria%20de%20obter%20maiores%20informações%20sobre%20a%20revenda%20de%20mercadoria%20em%20consignado."><a className='whats'><Image src='/whatsapp.png' width={90} height={90}/></a></Link>
      <Navbar expand="lg" className='navBarK'>
            <Navbar.Brand >
              <Image src="/kalanchoe.png" alt="logotipo Kalanchoê Modas" className='img-fluid logo' width={150} height={120}/>
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
                <Link  href='/colecao-kalanchoe'>
                  <a className='navLink'>Coleção</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Navigation