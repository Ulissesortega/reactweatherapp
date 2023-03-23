import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap'

export default function () {
    return (
        <div>
            <Row>
                <Col className='text-start HeaderFormat ms-5'>
                    <p>5 Days forecast</p>
                </Col>
            </Row>
        </div>
    )
}
