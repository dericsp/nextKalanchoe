
import Navigation from './navbark'
import {Container, Col, Row, Form} from 'react-bootstrap';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router'
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from 'react-google-recaptcha-v3'
import React from 'react'


function FormContato() {
	const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY
	console.log(siteKey)
    return (
        <div>
			<GoogleReCaptchaProvider reCaptchaKey={siteKey} >
			<Navigation/>
			<Formulario/>
			</GoogleReCaptchaProvider>
      </div>
  )
}

function Formulario() {
	const {register, handleSubmit, errors, reset} = useForm();
	const router = useRouter();
	const [token, setToken] = React.useState("");
	const { executeRecaptcha } = useGoogleReCaptcha()

  async function onSubmitForm(values) {
	//   console.log('hi from onsubmitform')
	  document.getElementById('sendButton').disabled = true
	  let config = {
		  method: 'post',
		  url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
		  headers: {
			  'Content-Type': 'application/json'
		  },
		  data: values
	  };
	  if (!executeRecaptcha) {
		return;
	}

	const result = await executeRecaptcha("homepage");

	setToken(result);
	console.log(token)
	  try {
		//   console.log('hi from try formulario')
		const response = await axios(config);
		if(response.status == 200) {
			router.push('/obrigado')
			reset()
			// document.getElementById('sendButton').disabled = false

		}
	} catch (error) {
		  console.log(error)
	  }
  }


  const clickHandler = async () => {
	 
  };

    return (
        <Container>
            <Col>
            <h1 align="center">Formulário de contato</h1>
            <p className="textos">Preencha o formulário somente se você atender os requisitos abaixo</p>
            <ul>
                <li >Não ter nenhuma restrição de crédito. A empresa fará consultas no CPF para verificar;</li>
			    <li>Ser maior de 21 anos;</li>
			    <li>Possuir conta corrente com cartão de crédito ativo;</li>
		    </ul>
            <Form id="contact-form" onSubmit={handleSubmit(onSubmitForm)}>
                <Form.Group>
                    <Row>
                        <Col sm>
                            <Form.Group>
                                <Form.Label htmlFor="form_name">Nome *</Form.Label>
                                <input ref={register} id="form_name" type="text" name="name" className="form-control" placeholder="Por favor digite seu nome *" required="required" data-error="Nome é obrigatório." />
                                <div className="help-block with-errors"></div>
                            </Form.Group>
					    </Col>
					    <Col sm>
                            <Form.Group>
                                <Form.Label htmlFor="form_lastname">Sobrenome *</Form.Label>
                                <input ref={register} id="form_lastname" type="text" name="surname" className="form-control" placeholder="Por favor digite seu Sobrenome *" required="required" data-error="Sobrenome é obrigatório." />
                                <div className="help-block with-errors"></div>
                            </Form.Group>
					    </Col>
				    </Row>
				<Row>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_cpf">C.P.F. *</Form.Label>
							<input ref={register} id="form_cpf" type="text" name="cpf" maxLength="14" className="form-control" placeholder="XXX.XXX.XXX-XX " required="required" data-error="C.P.F. é obrigatório."/>
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_cidade">Cidade *</Form.Label>
							<input ref={register} id="form_cidade" type="text" name="cidade" className="form-control" placeholder="Por favor digite a cidade onde mora *" required="required" data-error="Cidade é obrigatório." />
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_email">E-mail *</Form.Label>
							<input ref={register} id="form_email" type="email" name="email" className="form-control" placeholder="Por favor digite seu e-mail *" required="required" data-error="Um endereço de e-mail válido é obrigatório."/>
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_phone">Telefone *</Form.Label>
							<input ref={register} id="form_phone" type="tel" name="phone" maxLength="13" className="form-control" placeholder="(XX)-XXXX-XXXX" required="required" />
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_revende">Já revende algum produto? Quais? *</Form.Label>
							<input ref={register} id="form_revende" type="text" name="revende" className="form-control" placeholder="Responda não se não renveder nada *" required="required" data-error="Responda não se não revender nada."/>
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_tempo">Quanto tempo revende ? *(meses)</Form.Label>
							<input ref={register} id="form_tempo" type="number" name="tempo" maxLength="10" className="form-control" placeholder="Há quanto tempo revende *" />
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_restr">Possui alguma restrição de crédito ?</Form.Label>&emsp;
							<Form.Label><input ref={register} id="form_restr" type="radio" name="restricao" required="required" data-error="Responda Sim ou Não." value="Sim" />&emsp;Sim</Form.Label>&emsp;
							<Form.Label><input ref={register} id="form_restr" type="radio" name="restricao" required="required" data-error="Responda Sim ou Não." value="Não" />&emsp;Não</Form.Label>
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<Form.Group>
							<Form.Label htmlFor="form_message">Mensagem *</Form.Label>
							<textarea ref={register} id="form_message" name="message" className="form-control" placeholder="Escreva a sua mensagem. *" rows="3" data-error="Digite uma mensagem"></textarea>
							<div className="help-block with-errors"></div>
						</Form.Group>
					</Col>
				</Row>
                <Col sm align='center'>
                    {/* <button className="btn btn-success btn-send g-recaptcha" data-sitekey="6LcL_F8UAAAAANB-FABG9dkPGN4pagjMpceOCjrf" data-callback={submitForm}> Enviar</button> */}
                    <input id='sendButton' type='submit' value='Enviar' className="btn btn-success btn-send" />

					</Col>
			</Form.Group>
		</Form>                     
		<div className="textos">
			<p className="paragrafo">
				*Cadastro sujeito a análise e aprovação. Retorno em até 48 horas úteis.
			</p>
		</div>
	</Col>
    </Container>
    )
	
    


}




export default FormContato