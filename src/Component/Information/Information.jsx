import React from 'react';
import './Info.css'
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaStarHalf, FaStar, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Information = ({ item }) => {
    const { pic_, name, experience, recipe, likes, title, description } = item;

    return (
        <div className='info'>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <Card >
                        <div className="col">
                            <div className="card">
                                <img src={pic_} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className='text-success'>Food: {title}</h3>
                                    <h5 className="card-title text-secondary">Chef Name: {name}</h5>

                                    <div className='d-flex justify-content-between mt-3 mb-3'>
                                        <h6>{experience} </h6>

                                        <div className='align-items-center'>
                                        <h6>{likes}
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
                                        <Link to="/chef"><div><Button className='bg-danger' >View More</Button></div></Link>
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