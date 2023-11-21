import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { InfoAlert } from './components/Alert';
import { extractLocations, getEvents } from './api'
import { useEffect, useState } from 'react';


import './App.css';




const App = () => {

// why aren't we importing the value/use state we made in number of events
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ? 
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
   <div className="App">
        <div className="alerts-container">
           {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        </div>
     <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
     <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
     <EventList events={events}/>

   </div>
   
 );
 

}

export default App;