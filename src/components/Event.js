

const Event = ({ event }) => {
    return(
        <li className="event">
            <h3>{event.summary}</h3>
            <p>{event.start?.dateTime || 'Start Time Not Provided'}</p>
        </li>
    );
}

export default Event;