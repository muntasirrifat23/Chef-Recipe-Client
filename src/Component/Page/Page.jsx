import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';

const Page = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {
        items.map(item=> <Information
        key={item.id}
        item={item}>

        </Information>)
      }
    </div>
  );
};

export default Page;