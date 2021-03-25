import '../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import ReactGA from 'react-ga';

function MyApp ({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url, { shallow }) => {

        ReactGA.set({ page: url })
        ReactGA.pageview(url)

      }
      ReactGA.initialize( process.env.GOO_ANA, { debug: false })
      ReactGA.set({ page: router.pathname })
      ReactGA.pageview(router.pathname)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [])

  
    return (
        
        <Component {...pageProps} />
    )
  }
  
  export default MyApp


