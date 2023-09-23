//add Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import { CompanyProvider } from '@components/context/CompanyContext'
import "../styles/global.css"
import MobileDeviceAlert from '@components/utility/MobileDeviceAlert'
import GlobalToast from '@components/GlobalToast'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import FloatingCTAButton from '@components/utility/FloatingCallToActionButton'


library.add(fas)

export default function App ({Component, pageProps}){
    return(
        <CompanyProvider>
            <Component {...pageProps}/>
            <FloatingCTAButton/>
            <MobileDeviceAlert/>
            <GlobalToast/>
        </CompanyProvider>
    ); 
}


