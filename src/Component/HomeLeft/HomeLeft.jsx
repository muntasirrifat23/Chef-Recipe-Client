import React, { useEffect, useState } from 'react';
import './HomeLeft.css'
import Left from '../Left/Left';
const HomeLeft = () => {
    const[details,setDetails]= useState([])
    useEffect(() => {
        fetch('https://assignment-10-express-muntasirrifat23.vercel.app/')
          .then(res => res.json())
          .then(data => setDetails(data))
          .catch(err => console.log(err))
      }, [])
    return (
        <div className='mb-3'>
            
            <h1 className='left'>Chef's Information</h1>
            {
                details.map(detail=><Left 
                key={detail.id}
                detail={detail}>

                </Left>)
            }
        </div>

    );
};

export default HomeLeft;