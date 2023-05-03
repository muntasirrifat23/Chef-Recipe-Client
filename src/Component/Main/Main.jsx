import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Page from '../Page/Page';
import HomeLeft from '../HomeLeft/HomeLeft';

const Main = () => {
    return (
        <div>
             <Row  className='register'>
                
                <Col lg={3}>
                    <HomeLeft></HomeLeft>
                </Col>

                <Col lg={9}>
                <Page></Page>

                </Col>
            </Row>
        </div>
    );
};

export default Main;