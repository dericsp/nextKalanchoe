import '../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({Component, pageProps}) {

    return (
        <div>
                <Component{...pageProps}/>
                
                </div>
            )
}


