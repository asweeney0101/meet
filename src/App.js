import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventChart';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { extractLocations, getEvents } from './api'
import { useEffect, useState } from 'react';


import './App.css';





const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  
  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("You are Currently Navigating Offline")
    }
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
           {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
           {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
        </div>

        <div className="title-container">
            <h1>Meet App</h1>
            <p>Grow your knowledge by finding tech events near you!</p>
        </div>

        <div>
            <CitySearch 
              allLocations={allLocations} 
              setCurrentCity={setCurrentCity} 
              setInfoAlert={setInfoAlert}
           />  
          <div className="noe-container">
            <p># of Events: </p>
            <NumberOfEvents 
              setCurrentNOE={setCurrentNOE}
              setErrorAlert={setErrorAlert}
             />
          </div>
        </div>

        <CityEventsChart events={events} />
        <EventList events={events}/>

   </div>
   
 );
 

}

export default App;