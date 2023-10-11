import React from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function GlobalToast(){
    return(
        <ToastContainer
                position="bottom-center"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            /> 
    )
}