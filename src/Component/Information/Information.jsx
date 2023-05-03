import React from 'react';
import './Info.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Information = ({ item }) => {
    const { pic_, name, experience, recipe, likes, title, description } = item;

    return (
        <div className='info'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={pic_} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Food Name: {title}</h4>
                            <h5 className="card-title">Chef Name: {name}</h5>
                            <div className='d-flex justify-content-between mt-3 mb-3'>
                                <h6>{experience} </h6>
                                <h6> {likes}</h6>
                            </div>

                            <p>{description}..........
                            
                            <Link to="/chef"><div><Button className='bg-danger'>View More</Button></div></Link>
                            
                            </p>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;