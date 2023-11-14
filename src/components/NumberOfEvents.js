
const NumberOfEvents = ({ setCurrentNOE }) => {
    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setCurrentNOE(value);
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