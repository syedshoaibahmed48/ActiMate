'use client'
import { useState, useEffect } from 'react';
import ActivityTypeDropdown from './components/ActivityTypeDropdown'
import Footer from './components/Footer'
import { fetchActivity } from './lib/fetchActivity'

export default function Page() {

  const [activity, SetActivity] = useState('');
  const [activityType, SetActivityType] = useState('Random');

  const fetchNewActivity = async() => {
    try{
      const activity = await fetchActivity(activityType);
      SetActivity(activity);
    } catch(error){
      console.log("Error fetching data: ",error);
    }
  }

  const handleSelectActivityType = (selectedType: string) => {
    SetActivityType(selectedType);
  }

  useEffect( ()=>{
    fetchNewActivity();
  }, []);

  return (
    <div className="container">

      <div className="options-container">
        <button className="btn" onClick={ fetchNewActivity }>Generate New Activity</button>
        <ActivityTypeDropdown
          activityType={activityType}
          handleSelectActivityType={handleSelectActivityType}
        />
      </div>

      <div className="activity-container">
        <h1 className="activity">{activity || "Loading..."}</h1>
      </div>

      <Footer/>

    </div>
  )
}