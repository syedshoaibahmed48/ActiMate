export const fetchActivity = async (activityType: string) => {
  
  const API_URL = "https://www.boredapi.com/api/activity?";

  const queryString = activityType !== "Random" ? `type=${activityType.toLowerCase()}` : '';

  try{
    const response = await fetch(API_URL + queryString);
    const data = await response.json();
    return data.activity;
  }catch(error) {
    console.log("Error fetching data: ",error);
  } 
}