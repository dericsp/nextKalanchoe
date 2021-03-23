
import Navigation from './navbark'
import {Container, Col, Row, Alert} from 'react-bootstrap';
import axios from 'axios';
import {useForm} from 'react-hook-form';

function Obrigado() {
    return (
        <div>
      <Navigation/>
      <FormSuccess/>
      </div>
  )
}

function FormSuccess() {
    return(
        <Container fluid >
		{/* <h1 align="center">Formulário de contato</h1> */}
        <Row>
        <Col xs={{ order: 1 }}>
        <Alert className="alert-success" align='center'>
			Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.
		</Alert>
        </Col>
        </Row>
        <Row >
        <Col xs={{ order: 1 }}>
			<Alert className='alert-warning' align='center'>
				*Cadastro sujeito a análise e aprovação. Retorno em até 48 horas úteis.
			</Alert>
        </Col>
        </Row>
	</Container>
    )

}


export default Obrigado