import './App.css';
import Geolocation from './Services/Geolocation';
import DataService from './Services/DataService'
import Landing from './Components/Landing'


function App() {
  return (
    <div>
      <button onClick={Geolocation}><p>Geolocation</p></button>
      <button onClick={DataService}><p>This is a Test</p></button>
      <Landing />
    </div>
  );
}

export default App;
