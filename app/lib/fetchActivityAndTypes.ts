export const fetchActivity = async (activityType: string) => {
  const queryString = activityType !== "Random" ? `type=${activityType}` : '';

  try{
    const response = await fetch(`/api/activity?${queryString}`);
    const data = await response.json();
    return data.activity;
  }catch(error) {
    console.log("Error fetching data: ",error);
  } 
}

export const fetchActivityTypes = async () => {
  try{
    const response = await fetch("/api/activityTypes");
    const data = await response.json();
    return data.activityTypes;
  }catch(error) {
    console.log("Error fetching data: ",error);
  } 
}