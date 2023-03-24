import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityinput from '../Services/Cityinput';
import { Row, Col, Card, Button, input } from 'react-bootstrap';

export default function () {
    const [userInput, setUserInput] = useState('');
    const [cityName, setcityName] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [maxTemp, setMaxtemp] = useState('');
    const [minTemp, setMintemp] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');
    const [iconUrl, setIconUrl] = useState(''); // Define iconUrl as a state variable
    
    //Tuesday
    const [cityName1, setcityName1] = useState('');
    const [mainTemp1, setMainTemp1] = useState('');
    const [maxTemp1, setMaxtemp1] = useState('');
    const [minTemp1, setMintemp1] = useState('');
    const [weatherDescription1, setWeatherDescription1] = useState('');
    const [iconUrl1, setIconUrl1] = useState(''); // Define iconUrl as a state variable
    //Wednesday
    const [cityName2, setcityName2] = useState('');
    const [mainTemp2, setMainTemp2] = useState('');
    const [maxTemp2, setMaxtemp2] = useState('');
    const [minTemp2, setMintemp2] = useState('');
    const [weatherDescription2, setWeatherDescription2] = useState('');
    const [iconUrl2, setIconUrl2] = useState(''); // Define iconUrl as a state variable
    //Thursday
    const [cityName3, setcityName3] = useState('');
    const [mainTemp3, setMainTemp3] = useState('');
    const [maxTemp3, setMaxtemp3] = useState('');
    const [minTemp3, setMintemp3] = useState('');
    const [weatherDescription3, setWeatherDescription3] = useState('');
    const [iconUrl3, setIconUrl3] = useState(''); // Define iconUrl as a state variable
    //Friday
    const [cityName4, setcityName4] = useState('');
    const [mainTemp4, setMainTemp4] = useState('');
    const [maxTemp4, setMaxtemp4] = useState('');
    const [minTemp4, setMintemp4] = useState('');
    const [weatherDescription4, setWeatherDescription4] = useState('');
    const [iconUrl4, setIconUrl4] = useState(''); // Define iconUrl as a state variable


    const handleOnClick = async (e) => {
        //Today
        const data = await Cityinput(userInput)
        let city = data.city.name;
        let temp = data.list[0].main.temp;
        let maxtemp = data.list[0].main.temp;
        let mintemp = data.list[0].main.temp_min;
        let wdescription = data.list[0].weather[0].description
        const iconCode = data.list[0].weather[0].icon; // get the icon code from the API response
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`; // construct the URL of the icon image

        setcityName(city); // update the state with city name
        setMainTemp(temp);
        setMaxtemp(maxtemp);
        setMintemp(mintemp);
        setWeatherDescription(wdescription);
        setIconUrl(iconUrl); // Update iconUrl state variable
        setUserInput(''); // clear the input field

        //Tuesday
        let city1 = data.city.name;
        let temp1 = data.list[8].main.temp;
        let maxtemp1 = data.list[8].main.temp;
        let mintemp1 = data.list[8].main.temp_min;
        let wdescription1 = data.list[8].weather[0].description
        const iconCode1 = data.list[8].weather[0].icon; // get the icon code from the API response
        const iconUrl1 = `http://openweathermap.org/img/w/${iconCode1}.png`; // construct the URL of the icon image

        setcityName1(city1); // update the state with city name
        setMainTemp1(temp1);
        setMaxtemp1(maxtemp1);
        setMintemp1(mintemp1);
        setWeatherDescription1(wdescription1);
        setIconUrl1(iconUrl1); // Update iconUrl state variable

        //Wednesday
        let city2 = data.city.name;
        let temp2 = data.list[16].main.temp;
        let maxtemp2 = data.list[16].main.temp;
        let mintemp2 = data.list[16].main.temp_min;
        let wdescription2 = data.list[16].weather[0].description
        const iconCode2 = data.list[16].weather[0].icon; // get the icon code from the API response
        const iconUrl2 = `http://openweathermap.org/img/w/${iconCode2}.png`; // construct the URL of the icon image

        setcityName2(city2); // update the state with city name
        setMainTemp2(temp2);
        setMaxtemp2(maxtemp2);
        setMintemp2(mintemp2);
        setWeatherDescription2(wdescription2);
        setIconUrl2(iconUrl2); // Update iconUrl state variable

        //Thursday
        let city3 = data.city.name;
        let temp3 = data.list[24].main.temp;
        let maxtemp3 = data.list[24].main.temp;
        let mintemp3 = data.list[24].main.temp_min;
        let wdescription3 = data.list[24].weather[0].description
        const iconCode3 = data.list[24].weather[0].icon; // get the icon code from the API response
        const iconUrl3 = `http://openweathermap.org/img/w/${iconCode3}.png`; // construct the URL of the icon image

        setcityName3(city2); // update the state with city name
        setMainTemp3(temp2);
        setMaxtemp3(maxtemp2);
        setMintemp3(mintemp2);
        setWeatherDescription3(wdescription3);
        setIconUrl3(iconUrl3); // Update iconUrl state variable

        //Friday
        let city4 = data.city.name;
        let temp4 = data.list[32].main.temp;
        let maxtemp4 = data.list[32].main.temp;
        let mintemp4 = data.list[32].main.temp_min;
        let wdescription4 = data.list[32].weather[0].description
        const iconCode4 = data.list[32].weather[0].icon; // get the icon code from the API response
        const iconUrl4 = `http://openweathermap.org/img/w/${iconCode4}.png`; // construct the URL of the icon image

        setcityName4(city4); // update the state with city name
        setMainTemp4(temp4);
        setMaxtemp4(maxtemp4);
        setMintemp4(mintemp4);
        setWeatherDescription4(wdescription4);
        setIconUrl4(iconUrl4); // Update iconUrl state variable

    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const fetchData = async () => {
                    const data = await Cityinput({ lat, lon }); // call the API with the latitude and longitude values
                    // use the data to update the state variables
                    // ...
                };
                fetchData();
            });
        }
    }, []);

    return (
        <div>
            <Row>
                <Col className='ms-5'>
                    <input
                        className='ButtonFormat'
                        placeholder='Enter Zip or City Name'
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button className='ButtonFormat1' onClick={handleOnClick}>Get Weather</button>{' '}

                </Col>
            </Row>
            <Row className='text-center mt-2'>
                <Col>
                    <h2>Monday</h2>
                </Col>

                <Col>
                    <h2>Tuesday</h2>
                </Col>

                <Col>
                    <h2>Wednesday</h2>
                </Col>

                <Col>
                    <h2>Thursday</h2>
                </Col>

                <Col>
                    <h2>Friday</h2>
                </Col>
            </Row>

            {/* Weekday Cards goes her */}
            <Row className='text-center mt-2'>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }}>
                        <img className=' d-flex justify-content-center square bg-primary rounded-9' src={iconUrl} alt="Weather Icon" />
                        <Card.Body>
                            <Card.Title>WEATHER INFO</Card.Title>
                            <Card.Text>
                                <li className='textbold' >City Name: {cityName}</li> {/* update city name in the card */}
                                <li>Temp: {mainTemp}</li>
                                <li>Max Temp: {maxTemp} </li>
                                <li>Min Temp: {minTemp}</li>
                                <li>Description: {weatherDescription}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }}>
                        <img className='d-flex justify-content-center square bg-primary rounded-9' src={iconUrl1} alt="Weather Icon" />
                        <Card.Body>
                            <Card.Title>WEATHER INFO</Card.Title>
                            <Card.Text>
                                <li>City Name: {cityName1}</li> {/* update city name in the card */}
                                <li>Temp: {mainTemp1}</li>
                                <li>Max Temp: {maxTemp1} </li>
                                <li>Min Temp: {minTemp1}</li>
                                <li>Description: {weatherDescription1}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }}>
                        <img className='d-flex justify-content-center square bg-primary rounded-9' src={iconUrl2} alt="Weather Icon" />
                        <Card.Body>
                            <Card.Title>WEATHER INFO</Card.Title>
                            <Card.Text>
                                <li>City Name: {cityName2}</li> {/* update city name in the card */}
                                <li>Temp: {mainTemp2}</li>
                                <li>Max Temp: {maxTemp2} </li>
                                <li>Min Temp: {minTemp2}</li>
                                <li>Description: {weatherDescription2}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }}>
                        <img className='d-flex justify-content-center square bg-primary rounded-9' src={iconUrl3} alt="Weather Icon" />
                        <Card.Body>
                            <Card.Title>WEATHER INFO</Card.Title>
                            <Card.Text>
                                <li>City Name: {cityName3}</li> {/* update city name in the card */}
                                <li>Temp: {mainTemp3}</li>
                                <li>Max Temp: {maxTemp3} </li>
                                <li>Min Temp: {minTemp3}</li>
                                <li>Description: {weatherDescription3}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }}>
                        <img className='d-flex justify-content-center square bg-primary rounded-9' src={iconUrl4} alt="Weather Icon" />
                        <Card.Body>
                            <Card.Title>WEATHER INFO</Card.Title>
                            <Card.Text>
                                <li>City Name: {cityName4}</li> {/* update city name in the card */}
                                <li>Temp: {mainTemp4}</li>
                                <li>Max Temp: {maxTemp4} </li>
                                <li>Min Temp: {minTemp4}</li>
                                <li>Description: {weatherDescription4}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
