//add Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import { CompanyProvider } from '@components/context/CompanyContext'

import "../styles/global.css"

export default function App ({Component, pageProps}){
    return(
        <CompanyProvider>
            <Component {...pageProps}/>
        </CompanyProvider>
    ); 
}