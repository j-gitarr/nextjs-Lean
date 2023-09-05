import { useState } from 'react';
import PageContainer from "../../components/style/PageContainerApp";
import {toast } from 'react-toastify';
import GlobalToast from '@components/GlobalToast';
import Space from '@components/style/Space';

export default function EAWS() {
    const [eawsScore, setEawsScore] = useState(""); // State to store the EAWS Score

    const handleEawsScoreChange = (event) => {
        setEawsScore(event.target.value);
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        if(eawsScore == ""){
            toast.info("kein Wert eingetragen!");
            return;
        }else{
            try {


                const response = await fetch('/api/create-EAWS-entry', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ value:eawsScore, companyName:localStorage.getItem("companyName")}),
                });
                if (response.ok) {
                    console.log('Wert erfolgreich übernommen');
                    toast.info('Wert erfolgreich gespeichert');
                    // Reset the input after submission
                    setEawsScore("");
    
                } else {
                    console.error('Failed to create entry');
                }
            } catch (error) {
            console.error('Error creating entry:', error);
            }
        }
    };


    



//LAYOUT
    return (
        <PageContainer>
            <main>

            <Space height="30vh"/>

            <p className="text-center">Bitte tragen Sie hier den ermittelten EAWS Score ein:</p>
            <div className="d-flex justify-content-center input-group input-group-lg">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="number"
                        className='form-control'
                        value={eawsScore}
                        onChange={handleEawsScoreChange}
                    />
                    <br/>
                    <div className='d-flex justify-content-center'>
                        <button 
                            type="submit"
                            className='btn btn-secondary'
                            onClick={handleFormSubmit}
                            >
                            Bestätigen
                        </button>    
                    </div>
                </form>
                </div>
            </main>
            <GlobalToast/> 
        </PageContainer>
    );
}