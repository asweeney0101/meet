

const Event = ({ event }) => {
    return(
        <li className="event">
            <h3>{event.summary}</h3>
        </li>
    );
}

export default Event;