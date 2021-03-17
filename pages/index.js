import { useState } from 'react'
import Navigation from './navbark'
import {Col, Row, Image, ListGroup} from 'react-bootstrap';
import Link from 'next/link'

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
        <div className='container-fluid principal'>
            <Row>
                <Col align='center' >
                    <Link href="formulario-contato.html"><a><Image className="index img-fluid" src="/banner2.jpg" alt="banner kalanchoê"/></a></Link>
					
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
            <ListGroup horizontal variant="flush">
                <ListGroup>
                    <ListGroup.Item>Mogi das Cruzes</ListGroup.Item>
                    <ListGroup.Item>Suzano</ListGroup.Item>
                    <ListGroup.Item>Arujá</ListGroup.Item>
                </ListGroup>
            </ListGroup>
            <ListGroup horizontal variant="flush">
                <ListGroup >
                    <ListGroup.Item>Jacareí</ListGroup.Item>
                    <ListGroup.Item>São José dos Campos</ListGroup.Item>
                    <ListGroup.Item>Taubaté</ListGroup.Item>
                </ListGroup>
            </ListGroup>
			{/* <Col align='center' className="row tabelaCidades">
				<div className="col-sm-3">Mogi das Cruzes</div>
				<div className="col-sm-3">Suzano</div>
				<div className="col-sm-3">Arujá</div>
				<div className="col-6 col-sm-3">Jacareí</div>
				<div className="clearfix hidden-sm-up"></div>
				<div className="col-6 col-sm-3">São José dos Campos</div>
				<div className="col-6 col-sm-3">Taubaté</div>
				<div className="col-6 col-sm-3">Tremembé</div>
				<div className="col-6 col-sm-3">Pindamonhangaba</div>
				<div className="clearfix hidden-sm-up"></div>
				<div className="col-6 col-sm-3">Campinas</div>
				<div className="col-6 col-sm-3">Itatiba</div>
				<div className="col-6 col-sm-3">Valinhos</div>
				<div className="col-6 col-sm-3">Sumaré</div>
				<div className="col-6 col-sm-3">Hortolândia</div>

			</Col> */}
		</Row>
		<div className="container colunas">
			<Row>
				<Col align='center'>
					<div>
						<img src="/mulher.jpg" alt="kalanchoê foto mulher relogio"/>
						<div className="caption">
							<h3>Horário flexível</h3>
							<p className='justif'>Você determina qual o período do dia e quantas horas deseja dedicar para atender seus clientes. Isso facilita sua vida, pois você pode conciliar essa atividade com outros afazeres, profissionais ou pessoais. Isso é independência.</p>
						</div>
					</div>
				</Col>
				<Col align='center'>
					<div>
						<img src="/mulherRoupa.jpg" alt="kalanchoê foto mulher roupas"/>
						<div className="caption">
							<h3>Novidades toda semana</h3>
							<p className='jutif'>A Kalanchoê ao longo de toda semana, abastece seu show room com novidades, seguindo as tendências da estação e o estilo da marca, caracterizado pela ampla varidade de modelos e cores, com produtos atuais, arrojados, práticos e confortáveis. Isso é mais varidade para o seu cliente.</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	</div>
    )
}

export default Home