import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Information from '../Information/Information';
import { AuthContest } from '../Auth/AuthProvider';
import { Link } from 'react-router-dom';

const Chef = () => {
    const [items, setItem] = useState([]);

    const {user,logOut} = useContext(AuthContest);
    const handleOut=()=>{
      logOut()
      .then(result=>
        console.log(result)
      )
      .catch(err=>
        console.log(err.message)
        )
    }
    useEffect(() => {
      fetch('https://assignment-10-express-muntasirrifat23.vercel.app/data')
        .then(res => res.json())
        .then(data => setItem(data))
        .catch(err => console.log(err))
    }, [])
    return (
        <Container>
          <div className='mb-4'>
          {
          user?
          (<Button onClick={handleOut} className='bg-danger'>LogOut <span  className='text-dark'>
            <span></span>{user?.email} 
             </span> </Button>):
          (<Link to='/login'></Link>)
        }
          </div>
        {
          items.map(item=> <Information
          key={item.id}
          item={item}>
  
          </Information>)
        }
        
      </Container>
    );
};

export default Chef;