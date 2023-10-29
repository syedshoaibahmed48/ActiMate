'use client'
import React, { useState } from 'react';

interface Props {
  activityType: string;
  handleSelectActivityType: (type: string) => void;
}

export default function ActivityTypeDropdown({activityType, handleSelectActivityType}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const activityTypes = [
    'Random',
    'Education',
    'Recreational',
    'Social',
    'DIY',
    'Charity',
    'Cooking',
    'Relaxation',
    'Music',
    'Busywork',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left mx-2">
      <button onClick={toggleDropdown} type="button"
        className="inline-flex items-center justify-between w-44 py-2 px-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none"
      >
        <label className=''>Type:</label>
        {activityType || 'Random'}
        <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-full mt-1 max-h-52 rounded-md shadow-lg bg-gray-800 overflow-y-auto">
          <div className="py-2">
            {activityTypes.map((type) => (
              <p 
                key={type} 
                className="block pl-4 py-2 cursor-pointer select-none hover:bg-gray-700"
                onClick={()=>{
                  handleSelectActivityType(type); 
                  toggleDropdown();
                }}
              >
                {type}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};