import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContest } from '../Auth/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContest);
    const formRef = useRef(null);
    const [error, setError] = useState(''); 

    const handleRegister = (event) => {
        event.preventDefault();       

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const file = from.file.value;
        console.log(name, email, password, file); 

        if (password.length<6) {
            setError("Add at least 6 character password");
            return;
        }
        formRef.current.reset();

        createUser(email, password)
            .then(result => {
                const myUser = result.user;
                console.log(myUser);
                setError('');
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
            

    }
    return (
        <div className='justify-content-center'>
            <div className='register w-75'>
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

                    <p className='text-danger'>{error}</p>

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
        </div>

    );
};

export default Register;