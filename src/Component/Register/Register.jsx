import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContest } from '../Auth/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContest);
    const formRef = useRef(null);

    const handleRegister= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        const file= form.file.value;
        console.log(name,email,password,file);
        formRef.current.reset();
        createUser(email,password)
        .then(result=>{
            const myUser = result.user;
            console.log(myUser);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    return (
        <div className='register'>
            <form onSubmit={handleRegister} ref={formRef}>
                <h1 className='text-success'>Please Registration:</h1>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" name='name' className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your name' />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" required placeholder='Enter your password' id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Your Photo</label>
                    <input type="file" name='file' className="form-control" required placeholder='Give your photo' id="exampleInputPassword1" />
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