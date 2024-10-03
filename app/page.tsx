'use client'
import { useState, useEffect } from 'react';
import ActivityTypeDropdown from './components/ActivityTypeDropdown'
import Footer from './components/Footer'
import { fetchActivity } from '@/app/lib/fetchActivityAndTypes'

export default function Page() {

  const [activity, SetActivity] = useState('');
  const [selectedActivityType, SetSelectedActivityType] = useState('Random');

  const fetchNewActivity = async() => {
    try{
      const activity = await fetchActivity(selectedActivityType);
      SetActivity(activity);
    } catch(error){
      console.log("Error fetching data: ",error);
    }
  }

  const handleSelectActivityType = (selectedType: string) => {
    SetSelectedActivityType(selectedType);
  }

  useEffect( ()=>{
    fetchNewActivity();
  }, []);

  return (
    <div className="container">

      <div className="options-container">
        <ActivityTypeDropdown
          selectedActivityType={selectedActivityType}
          handleSelectActivityType={handleSelectActivityType}
        />
        <button className="btn" onClick={ fetchNewActivity }>Generate New Activity</button>
      </div>

      <div className="activity-container">
        <h1 className="activity">{activity || "Loading..."}</h1>
      </div>

      <Footer/>

    </div>
  )
}