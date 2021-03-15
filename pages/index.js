import { useState } from 'react'
import Navigation from './nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
    return (

        <div>
            <Navigation/>
            <Contador/>
        </div> 
    )


}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home