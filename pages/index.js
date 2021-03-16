import { useState } from 'react'
import Navigation from './navbark'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Jumbotron, Row} from 'react-bootstrap';
import Aplicativo from './_app'
function Home() {
    return (  
        <div>
            <Navigation/>
            </div>
            )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return(
        <Jumbotron>
           <Row >
               <Col align='center'>{contador}</Col></Row>
               <Row><Col align='center'><button onClick={adicionarContador}>Adicionar</button></Col>
            </Row>
        </Jumbotron>
    )
}

export default Home