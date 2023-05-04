import React, { useState } from 'react';
import './Info.css'
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Toast } from 'react-bootstrap';
import {  FaStar, FaRegStar, FaAllergies } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = ({ item }) => {
    const { pic_, name, experience, recipe, likes, title, description } = item;

    const [disabled, setDisabled] = useState(false);

    const notify = () => {
        toast("Is it your favourite food!")
        setDisabled(true);
    };



    return (
        <div className='info'>
            {/*  xs={1} md={2} lg={3} */}
            <Row>
                <Col>
                    <Card>
                        <div className="col">
                            <div className="card">
                                <div className='info-pic'>
                                <img src={pic_} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h3 className='text-success'>Food: {title}</h3>
                                    <h5 className="card-title text-secondary">Chef Name: {name}</h5>

                                    <div className='d-flex justify-content-between mt-3 mb-3'>
                                        <h6>{experience} </h6>

                                        <div className='align-items-center'>
                                        <h6 className='align-items-center'>{likes}
                                            <Rating placeholderRating={likes}
                                                readonly
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar />}
                                                fullSymbol={<FaStar />}>

                                            </Rating>
                                        </h6>
                                        </div>
                                    </div>

                                    <p>{description}..........
                                        <div className='d-flex justify-content-between'>
                                        <Link to="/chef"><div><Button className='bg-danger' >View More</Button></div></Link>
{/* Toast */}
                                        <Button disabled={disabled} onClick={notify} className='bg-warning text-black' > Favourite <FaAllergies/>
                                        <ToastContainer /></Button>
                                        
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Information;