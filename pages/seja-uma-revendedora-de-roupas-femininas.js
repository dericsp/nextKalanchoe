import Navigation from './navbark'


function RevendedoraRoupas() {
    return (  
        <div>
            <Navigation/>
            </div>
            )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return(
        <Jumbotron>
           <Row >
               <Col align='center'>{contador}</Col></Row>
               <Row><Col align='center'><button onClick={adicionarContador}>Adicionar</button></Col>
            </Row>
        </Jumbotron>
    )
}

export default RevendedoraRoupas