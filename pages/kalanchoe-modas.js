import Navigation from './navbark'
import {Container, Row, Col} from 'react-bootstrap'

function Kalanchoe() {
    return (
        <div>
            <Navigation/>
            <SobreK/>
        </div>
        
    )
}

function SobreK() {
    return (
        <Container fluid >
            <Row>
                <Col>
            <div className="center-block textos">
                <p className="paragrafo">A Kalanchoê Modas é uma distribuidora de roupas femininas, atua desde 1998 na cidade de Mogi das Cruzes repassando mercadorias direto para suas revendedoras. O objetivo principal da marca é conquistar e manter suas clientes plenamente satisfeitas com forte conteúdo modal, estilo exclusivo e elevado padrão de qualidade.</p>
                <p className="paragrafo">Hoje a empresa conta com mais de 100 consultoras espalhadas entre as cidades do alto tiête, vale do paraíba e região de Campinas.</p>
                <p className="paragrafo">Entre em contato agora mesmo, teremos um enorme prazer em atendê-la.</p>
                <p className="ano">Conheça abaixo um pouco da história da empresa. </p>
                <div className="span12">
                        <img className="elza" src="/elza.png" />
                        <p className="paragrafo">A empresa teve início em 1990 com a sua fundadora Sra. Elza Yoshimoto que era uma revendedora de suas roupas, uma consultora batalhadora e empenhada! Efetuava suas vendas de porta em porta e com isso cativando sua clientela.</p>
                        <p className="paragrafo">Em 1998 nasceu a empresa Yoshimoto Malhas, devido a grande procura da cliente em revender as pecas da Sra. Elza, ela resolveu então que criaria um empresa que forneceria sua mercadoria para outras consultoras interessadas. Foi ai que iniciou a contratação das consultoras. Inicialmente a empresa tinha 10 consultoras e ela foi crescendo a cada dia.</p>
                        <p className="paragrafo">Em 2000 a empresa passou a se chamar Kalanchoê Modas, que era a flor preferida da Sra. Elza, ela tem um significado especial, é considerada a flor da fortuna e da felicidade. E era exatamente isso que ela queria levar felicidade para suas clientes. E a empresa foi a cada dia crescendo e cativando suas consultoras.</p>
                        <p className="paragrafo">Hoje a empresa já tem o seu nome consolidado e grandes parcerias com fornecedores. Podendo assim ser a cada dia mais competitiva e forte na venda de roupas femininas.</p>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
    ) 
}

export default Kalanchoe