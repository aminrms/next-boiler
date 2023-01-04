import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import storeGenerator from '../redux/setup/store'
import '../styles/globals.css'
import "../styles/helper-classes.css"
import ParentLayout from "../components/template/ParentLayout";

export function reportWebVitals(metric) {
  console.warn("Metrix: ", metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={storeGenerator()?.store}>
      <PersistGate loading={null} persistor={storeGenerator()?.persistor}>
        <ParentLayout>
          <Component {...pageProps} />
        </ParentLayout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp