import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <form>
                <h1 className='text-success'>Please Registration:</h1>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="email" name='email' className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your name' />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" name='name' className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" required placeholder='Enter your password' id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Your Photo</label>
                    <input type="url" name='photo' className="form-control" required placeholder='Give your photo' id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary bg-success">Submit</button> <br></br>
                <div >
                    <Link to="/login" className='text-success'>Have Account? Please Login</Link>
                </div>
            </form>

        </div>
    );
};

export default Register;