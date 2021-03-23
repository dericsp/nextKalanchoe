import { Container } from 'react-bootstrap'
import Navigation from './navbark'

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
                <div class="row">
                    <div class="col-xs-12">
                        <div class="instagram-content">
                            <h3>Confira as fotos da coleção que está em andamento</h3>
                        </div>
                    </div>
                </div> 
            </Container>
        </div>
    )
}

export default Colecao
