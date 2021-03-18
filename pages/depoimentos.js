import Navigation from './navbark'
import {Container, Card} from 'react-bootstrap'

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
        <div class="container-fluid textos">

		<h1>
			<p class="ano">
				Você também pode fazer parte de nossa equipe de revendedoras. Confira abaixo a opnião de quem já faz parte da nossa equipe.
			</p>
		</h1>
		<br/>
		<div class="row">
			<div class="span12">
				<img class="depoimentos" src="/helena.png" alt="kalanchoê foto revendedora Helena Franco" />
				<p class="paragrafo">
					Sou revendedora há 19 anos, satisfeita com a qualidade que sempre foi o compromisso desta empresa leal e parceira. Trazendo sempre as novidades da moda para a satisfação das clientes. Só tenho que agradecer este trabalho conjunto que se solidifica a cada ano.
				</p>
				<br/>
				<p class="assinatura">Helena Franco da Cunha, 66 anos. Mogi das Cruzes</p>
			</div>
		</div>
		<div class="row">
			<div class="span12">
				<img class="depoimentos" src="/cleide.png" alt="kalanchoê foto revendedora Maria Cleide" />
				<p class="paragrafo">
					Já estou neste ramo a uns 5 anos. Amo o que faço pois venho crescendo a cada ano que passa pois trabalho em uma empresa que valoriza seus colaboradores e incentivam os mesmos a crescerem juntos. Trabalhar com pessoas idôneas e produtos de qualidade, além de tudo isso faço o que gosto, me divirto trabalhando. Faço o meu horário e o que é melhor tenho uma renda.
				</p>
				<p class="assinatura">Maria Cleide da Silva, 39 anos. São José dos Campos.</p>
			</div>
		</div>
		<div class="row">
			<div class="span12">
				<img class="depoimentos" src="/danubia.png" alt="kalanchoê foto revendedora Danubia Katia" />
				<p class="paragrafo">Olá meninas, estou aqui para falar um pouco da empresa a qual eu tenho orgulho em fazer parte. Trabalho com a Kalanchoê desde 2013, amo o que faço e também a mercadoria que vendo, essa venda tem sido a minha renda familiar pois com minhas comissões consigo ajudar nas despesas familiares. Uma empresa honesta, com produtos de qualidade onde você consegue fazer os seus horários e seus dias de trabalho.</p>
				<p class="assinatura">Danubia Katia Silva, 34 anos. Mogi das Cruzes</p>
			</div>
		</div>

	</div>

        )
}

export default Depoimentos