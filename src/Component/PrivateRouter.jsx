import React, { useContext } from 'react';
import { AuthContest } from './Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRouter = ({children}) => {
    const {user, loading}= useContext(AuthContest);
    const location= useLocation();
    if(user){
        return children;
    }
    if(loading){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }
    return (
       <Navigate state={{from:location}} to='/login' replace></Navigate>
    );
};

export default PrivateRouter;