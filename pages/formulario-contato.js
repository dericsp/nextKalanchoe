
import Navigation from './navbark'
import { Container, Col, Row, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { GoogleReCaptcha, GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import React, { useState, FC, useCallback } from 'react'


function FormContato() {
	const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY
	return (
		<div>
			<GoogleReCaptchaProvider
				useRecaptchaNet
				reCaptchaKey={siteKey}
				scriptProps={{ async: true, defer: true, appendTo: 'body' }}
			>
				<Navigation />
				<Formulario />
			</GoogleReCaptchaProvider>
		</div>
	)
}

function Formulario() {
	const { register, handleSubmit, errors, reset } = useForm();
	const router = useRouter();
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [token, setToken] = useState('');
	const [noOfVerifications, setNoOfVerifications] = useState(0);
	const [dynamicAction, setDynamicAction] = useState('homepage');
	const [actionToChange, setActionToChange] = useState('');

	const clickHandler = useCallback(async () => {
		if (!executeRecaptcha) {
			return;
		}

		const result = await executeRecaptcha('dynamicAction');

		setToken(result);
		setNoOfVerifications(noOfVerifications => noOfVerifications + 1);
	}, [dynamicAction]);

	const handleReCaptchaVerify = useCallback(
		token => {
			setToken(token);
			setNoOfVerifications(noOfVerifications => noOfVerifications + 1);
		},
		[setNoOfVerifications, setToken]
	);

	const handleTextChange = useCallback(event => {
		setActionToChange(event.target.value);
	}, []);

	const handleCommitAction = useCallback(() => {
		setDynamicAction(actionToChange);
	}, [actionToChange]);

	async function onSubmitForm(values) {
		document.getElementById('sendButton').disabled = true
		document.getElementById('contact-form').hidden = true
		document.getElementById('spinner').hidden = false

		let config = {
			method: 'post',
			url: `api/contact`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: values
		};

		try {
			await axios(config);
			router.push('/obrigado')
			// if (response.status == 200) {
			// 	// reset()
			// 	// document.getElementById('sendButton').disabled = false
			// }
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Container>
			<Col>
				<h1 align="center">Formul??rio de contato</h1>
				<p className="textos">Preencha o formul??rio somente se voc?? atender os requisitos abaixo</p>
				<ul>
					<li >N??o ter nenhuma restri????o de cr??dito. A empresa far?? consultas no CPF para verificar;</li>
					<li>Ser maior de 21 anos;</li>
					<li>Possuir conta corrente com cart??o de cr??dito ativo;</li>
				</ul>
				<Form id="contact-form" onSubmit={handleSubmit(onSubmitForm)}>
					<Form.Group>
						<Row>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_name">Nome *</Form.Label>
									<input ref={register} id="form_name" type="text" name="name" className="form-control" placeholder="Por favor digite seu nome *" required="required" data-error="Nome ?? obrigat??rio." />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_lastname">Sobrenome *</Form.Label>
									<input ref={register} id="form_lastname" type="text" name="surname" className="form-control" placeholder="Por favor digite seu Sobrenome *" required="required" data-error="Sobrenome ?? obrigat??rio." />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_cpf">C.P.F. *</Form.Label>
									<input ref={register} id="form_cpf" type="text" name="cpf" maxLength="14" className="form-control" placeholder="XXX.XXX.XXX-XX " required="required" data-error="C.P.F. ?? obrigat??rio." />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_cidade">Cidade *</Form.Label>
									<input ref={register} id="form_cidade" type="text" name="cidade" className="form-control" placeholder="Por favor digite a cidade onde mora *" required="required" data-error="Cidade ?? obrigat??rio." />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_email">E-mail *</Form.Label>
									<input ref={register} id="form_email" type="email" name="email" className="form-control" placeholder="Por favor digite seu e-mail *" required="required" data-error="Um endere??o de e-mail v??lido ?? obrigat??rio." />
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
									<Form.Label htmlFor="form_revende">J?? revende algum produto? Quais? *</Form.Label>
									<input ref={register} id="form_revende" type="text" name="revende" className="form-control" placeholder="Responda n??o se n??o renveder nada *" required="required" data-error="Responda n??o se n??o revender nada." />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_tempo">Quanto tempo revende ? *(meses)</Form.Label>
									<input ref={register} id="form_tempo" type="number" name="tempo" maxLength="10" className="form-control" placeholder="H?? quanto tempo revende *" />
									<div className="help-block with-errors"></div>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm>
								<Form.Group>
									<Form.Label htmlFor="form_restr">Possui alguma restri????o de cr??dito ?</Form.Label>&emsp;
							<Form.Label><input ref={register} id="form_restr_sim" type="radio" name="restricao" required="required" data-error="Responda Sim ou N??o." value="Sim" />&emsp;Sim</Form.Label>&emsp;
							<Form.Label><input ref={register} id="form_restr_nao" type="radio" name="restricao" required="required" data-error="Responda Sim ou N??o." value="N??o" />&emsp;N??o</Form.Label>
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
				<Col sm id='spinner' className='assinatura' hidden>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
					<br/>Enviando
					
				</Col>
				<div className="textos">
					<p className="paragrafo">
						*Cadastro sujeito a an??lise e aprova????o. Retorno em at?? 48 horas ??teis.
			</p>
				</div>
			</Col>
			<GoogleReCaptcha
				onVerify={handleReCaptchaVerify}
				executeRecaptcha
			/>
		</Container>
	)




}




export default FormContato