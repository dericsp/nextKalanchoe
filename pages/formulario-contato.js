
import Navigation from './navbark'
import {Container, Col, Row, Form} from 'react-bootstrap';

function FormContato() {
    return (
        <div>
      <Navigation/>
      <Formulario/>
      </div>
  )

}

function Formulario() {
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

		<Form id="contact-form" method="post" action="contact.php" role="form">

			<div className="messages"></div>

			<div className="controls">
				<Row>
					<Col>
						<div className="form-group">
							<Form.Label for="form_name">Nome *</Form.Label>
							<input id="form_name" type="text" name="name" className="form-control" placeholder="Por favor digite seu nome *" required="required" data-error="Nome é obrigatório."/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
					<Col>
						<div className="form-group">
							<label for="form_lastname">Sobrenome *</label>
							<input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Por favor digite seu Sobrenome *" required="required" data-error="Sobrenome é obrigatório."/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="form-group">
							<label for="form_cpf">C.P.F. *</label>
							<input id="form_cpf" type="text" name="cpf" maxlength="14" className="form-control" placeholder="XXX.XXX.XXX-XX " required="required" data-error="C.P.F. é obrigatório."/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
					<Col>
						<div className="form-group">
							<label for="form_cidade">Cidade *</label>
							<input id="form_cidade" type="text" name="cidade" className="form-control" placeholder="Por favor digite a cidade onde mora *" required="required" data-error="Cidade é obrigatório."/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="form-group">
							<label for="form_email">E-mail *</label>
							<input id="form_email" type="email" name="email" className="form-control" placeholder="Por favor digite seu e-mail *" required="required" data-error="Um endereço de e-mail válido é obrigatório."/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
					<Col>
						<div className="form-group">
							<label for="form_phone">Telefone *</label>
							<input id="form_phone" type="tel" name="phone" maxlength="13" className="form-control" placeholder="(XX)-XXXX-XXXX" required="required"/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="form-group">
							<label for="form_revende">Já revende algum produto? Quais? *</label>
							<input id="form_revende" type="text" name="revende" className="form-control" placeholder="Responda não se não renveder nada *" required="required" data-error="Responda não se não revender nada." />
							<div className="help-block with-errors"></div>
						</div>
					</Col>
					<Col>
						<div className="form-group">
							<label for="form_tempo">Quanto tempo revende ? *(meses)</label>
							<input id="form_tempo" type="number" name="tempo" maxlength="10" className="form-control" placeholder="Há quanto tempo revende *"/>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="form-group">
							<label for="form_restr">Possui alguma restrição de crédito ?</label>&emsp;
							<label><input id="form_restr" type="radio" name="restricao" required="required" data-error="Responda Sim ou Não." value="Sim" />&emsp;Sim</label>&emsp;
							<label><input id="form_restr" type="radio" name="restricao" required="required" data-error="Responda Sim ou Não." value="Não" />&emsp;Não</label>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="form-group">
							<label for="form_message">Mensagem *</label>
							<textarea id="form_message" name="message" className="form-control" placeholder="Escreva a sua mensagem. *" rows="3" data-error="Digite uma mensagem"></textarea>
							<div className="help-block with-errors"></div>
						</div>
					</Col>
				</Row>
                <Col>
                    <button className="btn btn-success btn-send g-recaptcha" data-sitekey="6LcL_F8UAAAAANB-FABG9dkPGN4pagjMpceOCjrf" data-callback="submitForm"> Enviar</button>
                    </Col>
			</div>
		</Form>
							{/* <script>
function submitForm () {
 document.getElementById("contact-form").submit();

}
</script>
                     <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                     <!--  async defer></script>--> */}
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