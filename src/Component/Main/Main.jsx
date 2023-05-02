import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Page from '../Page/Page';

const Main = () => {
    return (
        <div>
             <Row  className='register'>
                
                <Col lg={3}>
                </Col>

                <Col lg={9}>
                <Page></Page>

                </Col>
            </Row>
        </div>
    );
};

export default Main;