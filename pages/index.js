import Navigation from './navbark'
import {Col, Row, ListGroup, Container} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'


function Home() {
    return (  
        <div>
            <Navigation />

            <IndexPage/>
            </div>
            )
}

function IndexPage(){
    return(
		<div>
        <Container align='center'>
			 <Row className='banner' >
				 <Col >
				 	<Link href='/formulario-contato'><a><Image src="/banner2.jpg" alt="banner kalanchoê" width={1.25} height={1} layout='responsive' lazy='true'/></a></Link>
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
			<h5>A Kalanchoê possui equipe de vendas em várias cidades, dentre elas:</h5>

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
			<Row className='cardsPagIni'>
				<Col md={6}>
						<Image className='imagemCanto' src="/mulher.jpg" alt="kalanchoê foto mulher relogio" width={0.1} height={0.05} layout='responsive' lazy='true'/>
						<h4>Horário flexível</h4>
					<p className='textos'>
							Você determina qual o período do dia e quantas horas deseja dedicar para atender seus clientes. Isso facilita sua vida, pois você pode conciliar essa atividade com outros afazeres, profissionais ou pessoais. Isso é independência.
					</p>
				</Col>
				<Col md={6} >
						<Image className='imagemCanto' src="/mulherRoupa.jpg"  alt="kalanchoê foto mulher roupas" width={0.1} height={0.05} layout='responsive' lazy='true'/>
						<h4>Novidades toda semana</h4>
						<p className="textos">
							A Kalanchoê ao longo de toda semana, abastece seu show room com novidades, seguindo as tendências da estação e o estilo da marca, caracterizado pela ampla varidade de modelos e cores, com produtos atuais, arrojados, práticos e confortáveis. Isso é mais varidade para o seu cliente.
						</p>
				</Col>
			</Row>
	</Container>
	</div>
    )
}

export default Home