import Navigation from './navbark'
import {Container, Row, Col, CardGroup, Card, Media} from 'react-bootstrap';
import Image from 'next/image'
function Depoimentos() {
    return (  
        <div>
            <Navigation/>
            <DepoimentosVendedoras/>
            </div>
            )
}

function DepoimentosVendedoras() {
    return (
        <Container fluid align='center' className='textos'>

		<h5>
				Você também pode fazer parte de nossa equipe de revendedoras. <br/>Confira abaixo a opnião de quem já faz parte da nossa equipe.
		</h5>
		<br/>
		<Row>
			<Col>
		<Media>
				<Image className='align-self-start mr-3'src="/helena.png" alt="kalanchoê foto revendedora Helena Franco" width={84} height={84}/>
				<Media.Body>
					<p className='textos'>Sou revendedora há 19 anos, satisfeita com a qualidade que sempre foi o compromisso desta empresa leal e parceira. Trazendo sempre as novidades da moda para a satisfação das clientes. Só tenho que agradecer este trabalho conjunto que se solidifica a cada ano.</p>
				<h6 className='assinatura'>Helena Franco da Cunha, 66 anos. Mogi das Cruzes</h6>
				</Media.Body>
		</Media>
		<Media>
				<Image className='align-self-start mr-3' src="/cleide.png" alt="kalanchoê foto revendedora Maria Cleide" width={84} height={84} />
				<Media.Body>
					<p className='textos'>Já estou neste ramo a uns 5 anos. Amo o que faço pois venho crescendo a cada ano que passa pois trabalho em uma empresa que valoriza seus colaboradores e incentivam os mesmos a crescerem juntos. Trabalhar com pessoas idôneas e produtos de qualidade, além de tudo isso faço o que gosto, me divirto trabalhando. Faço o meu horário e o que é melhor tenho uma renda.</p>
					<h6 className='assinatura'>Maria Cleide da Silva, 39 anos. São José dos Campos.</h6>
				</Media.Body>
		</Media>
		<Media>
				<Image className='align-self-start mr-3' src="/danubia.png" alt="kalanchoê foto revendedora Danubia Katia" width={84} height={84}/>
				<Media.Body>
				<p className='textos'>Olá meninas, estou aqui para falar um pouco da empresa a qual eu tenho orgulho em fazer parte. Trabalho com a Kalanchoê desde 2013, amo o que faço e também a mercadoria que vendo, essa venda tem sido a minha renda familiar pois com minhas comissões consigo ajudar nas despesas familiares. Uma empresa honesta, com produtos de qualidade onde você consegue fazer os seus horários e seus dias de trabalho.</p>
				<h6 className='assinatura'>Danubia Katia Silva, 34 anos. Mogi das Cruzes</h6>
				</Media.Body>
		</Media>
		</Col>
		</Row>
	</Container>

        )
}

export default Depoimentos