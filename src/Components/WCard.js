import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap'
import Sunny from '../Assets/Sunny.png'



export default function WCard() {
    return (
        <div>
            <Card style={{ width: '12rem' }}>
             <img className='d-flex justify-content-center' src={Sunny} alt="Logo"/>;
                <Card.Body>
                    <Card.Title>Current Temp</Card.Title><br/>
                    <Card.Text>
                        <li>Current Temp</li><br/>
                        <li>Max Temp</li><br/>
                        <li>Min Temp</li><br/>
                    </Card.Text>
                </Card.Body>
            </Card>

            
        </div>
    )
}
