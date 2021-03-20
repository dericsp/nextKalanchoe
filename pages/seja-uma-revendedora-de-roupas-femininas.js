import Navigation from './navbark'
import {Container, Card} from 'react-bootstrap'

function RevendedoraRoupas() {
    return (  
        <div>
            <Navigation/>
            <Revendedora/>
            </div>
            )
}

function Revendedora() {
    return (
        <Container fluid className='textos'>

		<h1 align="center">
			<p className="ano">Revenda Roupas Feminina Consignada</p>
		</h1>

		<p className="paragrafo">A Kalanchoê modas trabalha com revendedoras que queiram entrar no mercado de trabalho ou conseguir uma renda complementar, inicialmente é feito um cadastro sujeito a aprovação.</p>

		<p className="paragrafo">Após a aprovação cadastral voce já pode iniciar as vendas, não sendo necessário nenhum investimento financeiro: o que você não conseguir vender, você simplesmente devolve, ganhando comissão sobre as vendas.</p>
		<br/>
			{/* <div align='center'>
				<img className="media-object" src="/ganhos.jpg" alt="kalanchoê mulher escada ganhos"/>
			</div> */}
		<br/>
		<p className="ano">Condições para ser um(a) consultor(a) :</p>
		<ul>
			<li >Não ter restrições de crédito;</li>
			<li >Ser maior de 21 anos.</li>
		</ul>
		<p className="ano">Benefícios de ser um(a) consultor(a) :</p>
		<ul>
			<li >Lucratividade de até 35%;</li>
			<li >Participar das promoções com prêmios em mercadorias;</li>
			<li >Você não faz investimento financeiro;</li>
			<li >Horário e dias flexíveis para trabalhar;</li>
			<li >Trabalhar com nossa máquina de cartão de crédito;</li>
		</ul>
	</Container>

        )
}

export default RevendedoraRoupas