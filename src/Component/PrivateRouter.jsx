import React, { useContext } from 'react';
import { AuthContest } from './Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const location= useLocation();
const PrivateRouter = ({children}) => {
    const {user}= useContext(AuthContest);
    // if(user){
    //     return children;
    // }
    return (
       <Navigate to='/login' replace state={{from:location}}></Navigate>
    );
};

export default PrivateRouter;