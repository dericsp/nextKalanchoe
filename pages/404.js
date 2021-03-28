
import Navigation from './navbark'
import {Container, Col, Row} from 'react-bootstrap';
import Link from 'next/link'

function Error404() {
    return (
        <div>
      <Navigation/>
      <Erro/>
      </div>
  )
}

function Erro() {

    return (
        <div>        
            <Container fluid>
                <Row align='center'>
                    <Col>
                    <h4 className='textos'>Essa página não existe use o menu  para ir para alguma de nossas paginas</h4>
                    < Link href='/'> Ou clique aqui para ir para a nossa pagina inicial</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Error404