import { useState } from 'react';

const NumberOfEvents = () => {
    const [value, setValue] = useState('32');
    return(
        <div id="number-of-events">
           <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
           />
        </div>
    )
}

export default NumberOfEvents;