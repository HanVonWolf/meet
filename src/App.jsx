/*import React from 'react';*/
/*import { useEffect, useState } from 'react';*/
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';


import './App.css';

const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);

const fetchData = async () => {
  const allEvents = await getEvents();
  setEvents(allEvents.slice(0, currentNOE));
}
useEffect(() => {
  fetchData();
}, []);

const App = () => {
 return (
   <div>
     <CitySearch />
     <EventList />
   </div>
 );
}


export default App;
