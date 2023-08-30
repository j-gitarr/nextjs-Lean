// import PageContainer from "../../components/PageContainer";


// export default function(){
//     return(
//         <PageContainer>
//             <div style={{height: "30vh"}}/>
//             <p className="text-center">Bitte tragen Sie hier den Ermittelten EAWS Score ein:</p>
//             <div className="d-flex justify-content-center">
//                 <input type="number"/>

//             </div>
//         </PageContainer>
//     );
// }


import { useState } from 'react';
import PageContainer from "../../components/PageContainer";

export default function YourPage() {
    const [eawsScore, setEawsScore] = useState(""); // State to store the EAWS Score

    const handleEawsScoreChange = (event) => {
        setEawsScore(event.target.value);
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        try {
        const response = await fetch('/api/create-EAWS-entry', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value:eawsScore }),
        });
        if (response.ok) {
            console.log('Entry created successfully');
            // Clear form fields or show a success message
        } else {
            console.error('Failed to create entry');
        }
        } catch (error) {
        console.error('Error creating entry:', error);
        }
        // // Reset the input after submission
        // setEawsScore("");
    };






    return (
        <PageContainer>
            <div style={{ height: "30vh" }} />
            <p className="text-center">Bitte tragen Sie hier den ermittelten EAWS Score ein:</p>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="number"
                        value={eawsScore}
                        onChange={handleEawsScoreChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </PageContainer>
    );
}