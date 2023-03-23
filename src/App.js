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
