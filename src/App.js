import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api'
import { useEffect, useState } from 'react';

import './App.css';




const App = () => {

// why aren't we importing the value/use state we made in number of events
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  }

  return (
   <div className="App">
     <NumberOfEvents />
     <CitySearch allLocations={allLocations}/>
     <EventList events={events}/>

   </div>
   
 );
 

}

export default App;