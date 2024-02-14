import './App.css';
import Container from './Components/Container';
import data from "./data";
import React, { useState } from 'react';
function App() {
  const [tours,setTours] = useState(data);
  
  function removeTours(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return(
      <div className='refresh-container'>
        <h2>No tours left</h2>
        <button className='refresh-btn' onClick={()=>{setTours(data)}}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Container tours={tours} removeTours={removeTours}></Container>
    </div>
  );
}

export default App;
