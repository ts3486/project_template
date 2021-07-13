import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto';
import type { AppProps } from 'next/app'

import NavComponent from "../components/NavComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavComponent/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
