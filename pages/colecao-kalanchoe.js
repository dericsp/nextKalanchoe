import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './navbark'
import Iframe from 'react-iframe'
function Colecao () {
    return (
        <div>
            <Navigation/>
            <FotosInstagram/>
        </div>
    )
}

function FotosInstagram() {

    return (
        <div>        
            <Container fluid>
                <Row align='center'>
                    <Col>
                    <h4 className='textos'>Confira as fotos da coleção que está em andamento</h4>
                    <Iframe className='iframeStyle' src="https://embedsocial.com/facebook_album/pro_instagram/8df4e3a8f2c8aca21a4bb43a8c21ea0228a088f9" width='100%' height='600vh'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Colecao
