import React from 'react'
import Currentcity from './Currentcity';

export default function GeoLocation() {
    const successCallback = (position) => {
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude); 
        Currentcity(position.coords.latitude, position.coords.longitude)          
      };
      
      const errorCallback = (error) => {
        console.log(error);
        alert("Please click Allow on Geolocation otherwise this app would not work")    
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return (
    <div>GeoLocation</div>
  )
}
