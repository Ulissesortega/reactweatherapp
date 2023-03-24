//Student Name: Ulises Ortega
//Project: React Weather App Rebuild
//Description: Create a React app the show the weather for the week using the open weather APi HTML CSS JAVAscript.
//Peer Review: Elizar Garcia
//Review: Your app does meet the requitements as far as having components being call to the app.js, after checking your code I like the fact that I was able to read through it and undestand it, I like how did you pull the info with in order way and the set it passing as a variable, make sure to clean the lines of codes in comments that you are no longer using.


import './App.css';
import Geolocation from './Services/Geolocation'
import Currentcity from './Services/Currentcity';
import Weekweather from './Services/Weekweather';
import Header from './Components/Header';
import Body from './Components/Body'
import WCard from './Components/WCard';

function App() {
  return (
    <div className='BgImage'>
      {/* <button onClick={Geolocation}><p>1</p></button>
      <button onClick={Currentcity}><p>2</p></button>
      <button onClick={Weekweather}><p>3</p></button> */}
      <Header />
      <Body />
    </div>
  );
}

export default App;
