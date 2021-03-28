
import Navigation from './navbark'
import {Container, Col, Row, Form} from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router'

function error404() {
    return (
        <div>
      <Navigation/>
      <Erro404/>
      </div>
  )
}

function Erro404() {

    return (
        <div>        
            <Container fluid>
                <Row align='center'>
                    <Col>
                    <h4 className='textos'>Essa página não existe use o menu  para ir para alguma de nossas paginas</h4>
                    < Link href='/'> Ou clique aqui para ir para a nossa Home</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default error404