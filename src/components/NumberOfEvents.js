import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        
        
        if (isNaN(value)) {
            setErrorAlert("Please Enter a Number of Events");
        }
        else if 
        (value <= 0){ 
            setErrorAlert("Please Enter a Positive Number");
        }
        else if 
        (value > 100 ){ 
            setErrorAlert("Please Limit Searches to Less Than 100");
        }
        else {
            setErrorAlert("")
            setCurrentNOE(value);
        }



    }
    
    
    return(
        <div id="number-of-events">
           <input
                id="number-of-events-input" 
                type="text"
                defaultValue="32"
                onChange={handleInputChange}        
           />
        </div>
    )
}

export default NumberOfEvents;
