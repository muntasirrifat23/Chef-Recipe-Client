import React from 'react';
import { Card } from 'react-bootstrap';

const Left = ({detail}) => {
    const{profile_, details,name_}= detail;
    return (
        <div className='left'>
            <Card>
            <div className='p-4'>
            <img src={profile_} style={{width:'100%'}}/>
            <div className='mt-4'>
            <h3 className='text-info'>{name_}</h3>
            <h6>{details}</h6>
            </div>
            </div>
            </Card>
            
        </div>
    );
};

export default Left;