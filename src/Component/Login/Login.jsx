import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container className='login'>
            <form> 
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

                <button type="submit" className="btn btn-primary">Submit</button> <br></br>
                <div >
                <Link to="/register" className='text-info'>Don't Have Account? Please Register</Link>
                </div>
                
            </form>
        </Container>
    );
};

export default Login;