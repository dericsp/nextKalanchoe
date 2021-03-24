import Navigation from './navbark'
import {Col, Row, ListGroup, Container} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'

function Home() {
    return (  
        <div>
            <Navigation/>
            <IndexPage/>
            </div>
            )
}

function IndexPage() {

    return(
        
        <Container align='center'>
			 <Row className='banner' >
				 <Col >
				 	<Link href='/formulario-contato'><Image src="/banner2.webp" alt="banner kalanchoê" width={500} height={400} layout='responsive' /></Link>
				 </Col>
			</Row>
        <div className="container-fluid textos">
			<p className="paragrafo">
				O seguimento de moda jovem feminina é um dos mercados que mais tem crescido no Brasil. Tornando-se uma revendedora Kalanchoê Modas você vai ter a oportunidade de lucrar vendendo moda feminina de qualidade, preço justo e peças diferenciadas.
			</p>
			<p className="paragrafo">
				Conheça os benefícios de ser uma revendedora, ganho extra, sua independência financeira, horário flexível e o melhor de tudo, sem investimento e com ganhos de até 35% sobre as vendas.
			</p>
				<p className="paragrafo">
					Venha fazer parte de nossa equipe, ajudamos você a conquistar seus sonhos.
				</p>
			<h4>A Kalanchoê possui equipe de vendas em várias cidades, dentre elas:</h4>

		</div>
		<Row className="justify-content-center" >
            <ListGroup horizontal>
                <ListGroup >
                    <ListGroup.Item className='paragrafo'>Mogi das Cruzes</ListGroup.Item>
                    <ListGroup.Item>Suzano</ListGroup.Item>
                    <ListGroup.Item>Arujá</ListGroup.Item>
                </ListGroup>
                <ListGroup >
                    <ListGroup.Item>Jacareí</ListGroup.Item>
                    <ListGroup.Item>São José dos Campos</ListGroup.Item>
                    <ListGroup.Item>Taubaté</ListGroup.Item>
                </ListGroup>
            </ListGroup>
		</Row>
		<div className="container colunas">
			<Row>
				<Col align='center'>
					<div>
						<img src="/mulher.webP" alt="kalanchoê foto mulher relogio"/>
						<div className="caption">
							<h3>Horário flexível</h3>
							<p>Você determina qual o período do dia e quantas horas deseja dedicar para atender seus clientes. Isso facilita sua vida, pois você pode conciliar essa atividade com outros afazeres, profissionais ou pessoais. Isso é independência.</p>
						</div>
					</div>
				</Col>
				<Col align='center' className='index'>
					<div>
						<img src="/mulherRoupa.webP" alt="kalanchoê foto mulher roupas"/>
						<div className="caption">
							<h3>Novidades toda semana</h3>
							<p>A Kalanchoê ao longo de toda semana, abastece seu show room com novidades, seguindo as tendências da estação e o estilo da marca, caracterizado pela ampla varidade de modelos e cores, com produtos atuais, arrojados, práticos e confortáveis. Isso é mais varidade para o seu cliente.</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	</Container>
    )
}

export default Home