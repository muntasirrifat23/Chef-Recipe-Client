import React, { useContext, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContest } from '../Auth/AuthProvider';


const Login = () => {
    const {signIn}= useContext(AuthContest);
    const formRef = useRef(null);
    const[error,setError]=useState()
    
    const handleLog= (event)=>{
        event.preventDefault();
        const from = event.target;
        const email= from.email.value;
        const password= from.password.value;
        console.log(email,password);
        formRef.current.reset();
        signIn(email,password)
        .then(result=>{
            const myUser = result.user;
            console.log(myUser);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return (
        <Container className='login justify-content-center'>
            <form className='w-50' onSubmit={handleLog} ref={formRef}> 
                <h1 className='text-info'>Please Login:</h1>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" required placeholder='Enter Your Password' id="exampleInputPassword1" />
                </div>
                <p>{error}</p>

                <button type="submit" className="btn btn-primary">Submit</button> <br></br>
                <div >
                <Link to="/register" className='text-info'>Don't Have Account? Please Register</Link>
                </div>
                
            </form>
        </Container>
    );
};

export default Login;