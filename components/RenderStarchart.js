import React, { useEffect, useState } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import fetchStarData from './FetchStarData'; // Your API function

const { width, height } = Dimensions.get('window');
const RADIUS = width / 2; // Half of screen width for circular mapping

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

const StarMap = () => {
    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getStars = async () => {
        const starData = await fetchStarData();
        console.log('Fetched stars:', starData); // Log fetched data
        if (Array.isArray(starData)) {
          setStars(starData);
        } else {
          console.error('Star data is not an array:', starData);
          setStars([]); // Ensure it doesn’t break the map function
        }
        setLoading(false);
      };
  
      getStars();
    }, []);
  
    if (loading) {
      return <ActivityIndicator size="large" color="white" />;
    }
  
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Svg height="100%" width="100%">
          {stars.map((star, index) => {
            const azimuthRad = degreesToRadians(star.azimuth);
            const altitudeRad = degreesToRadians(star.altitude);
  
            const x = RADIUS + RADIUS * Math.cos(azimuthRad) * Math.cos(altitudeRad);
            const y = RADIUS - RADIUS * Math.sin(altitudeRad);
  
            return <Circle key={index} cx={x} cy={y} r="2" fill="white" />;
          })}
        </Svg>
      </View>
    );
  };
  

export default StarMap;
