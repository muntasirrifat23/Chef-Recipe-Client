import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import { Container } from 'react-bootstrap';

const Page = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-express-muntasirrifat23.vercel.app/data')
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      {
        items.map(item=> <Information
        key={item.id}
        item={item}>

        </Information>)
      }
    </Container>
  );
};

export default Page;