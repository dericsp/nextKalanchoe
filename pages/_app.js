import '../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import ReactGA from 'react-ga';
import GoogleTagManager from '../components/GoogleTagManager'

function MyApp ({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url, { shallow }) => {
        ReactGA.set({ page: url })
        ReactGA.pageview(url)
      }
      ReactGA.initialize('UA-66520244-1', { debug: false })
      ReactGA.set({ page: router.pathname })
      ReactGA.pageview(router.pathname)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    },
    [])
    // console.log('myapp')
    return (
        
          <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
    )
  }
  
  export default MyApp


