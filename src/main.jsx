import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home';
import Blog from './Component/blog/Blog';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Main from './Component/Main/Main';
import Chef from './Component/Chef/Chef';
import AuthProvider from './Component/Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Main></Main>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chef',
        element: <Chef></Chef>
      },
      {
        path:'*',
        element: <Navigate to='/404' />
      }
    ]
  }
    

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
)