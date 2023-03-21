import React from 'react'
import GetWeather from './DataService';

export default function Geolocation() {

    const successCallback = (position) => {
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);    
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude; 
        GetWeather(latitude, longitude);      
      };
      
      const errorCallback = (error) => {
        console.log(error);
        alert("Please click Allow on Geolocation otherwise this app would not work")    
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return (
    <div>Geolocation</div>
  )
}

Geolocation()
