import { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return(
        <li className="event">
            <h3>{event.summary}</h3>
            <p>{event.start?.dateTime || 'Start Time Not Provided'}</p>
            <p>{event.location}</p>
            <button
                className='show-hide-details'
             onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : "Show Details"}
            </button>
            {showDetails ? (
                <div className='details'>
                    <h4>Event Details</h4>
                    <p>Description: {event.description}</p>
                </div>
            ) : null}
        </li>
    );
}

export default Event;