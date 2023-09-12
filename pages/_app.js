//add Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import { CompanyProvider } from '@components/context/CompanyContext'
import "../styles/global.css"
import MobileDeviceAlert from '@components/utility/MobileDeviceAlert'
import GlobalToast from '@components/GlobalToast'

export default function App ({Component, pageProps}){
    return(
        <CompanyProvider>
            <Component {...pageProps}/>
            <MobileDeviceAlert/>
            <GlobalToast/>
        </CompanyProvider>
    ); 
}


