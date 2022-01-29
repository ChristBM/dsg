import '../styles/globals.css'
import { GlobalContext } from '../contexts/GlobalContext'
import useGlobalStates from '../hooks/useGlobalStates'
import '../styles/slider.css'

function MyApp({ Component, pageProps }) {
  let globalStates = useGlobalStates()
  return (
    <GlobalContext.Provider value={globalStates}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
