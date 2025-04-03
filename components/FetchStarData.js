import axios from 'axios';
import { encode } from 'base-64';



const API_URL = 'https://api.astronomyapi.com/api/v2/bodies/positions';
const APPLICATION_ID = '02ee078a-3d29-49ab-b100-4b9909fa793b'; // Replace with your actual app ID
const APPLICATION_SECRET = 'bb8a11a3fc90f31fd55fff397512aea66e3853f5affa28ffa0e71c2e5f26b9331a92be81d517cbd18bd29885f8f88bb35258af7a63c3e26b4525c1cf17873b9a2b351f29fd9972cff264bd0f0e8aede4e7a3c4d99464cf9af13056f3f0654e84589d53581269b118d9905115c9cf3f8d'; // Replace with your actual secret

console.log("Fetching star data..."); // Add this BEFORE the API call

const fetchStarData = async () => {
  try {
    console.log("Attempting API request...");
    
    const authString = encode(`${APPLICATION_ID}:${APPLICATION_SECRET}`);



    const response = await axios.get(API_URL, {
      params: {
        latitude: 29.6516,
        longitude: -82.3248,
        elevation: 15,  // Elevation in meters
        from_date: '2025-04-03',  // Date of observation
        to_date: '2025-04-03',  // Same date for both "from" and "to"
        time: '20:00:00',  // Time of observation (8:00 PM)
        output: 'table',  // Choose "table" or "rows" for the output format
      },
      headers: {
        Authorization: `Basic ${authString}`,
      },
    });

    console.log("API Response:", response.data); // Log full response

    return response.data.data?.stars || []; // Ensure an array is returned
  } catch (error) {
    console.error("Error fetching star data:", error.response ? error.response.data : error.message);
    return [];
  }
};


export default fetchStarData;
