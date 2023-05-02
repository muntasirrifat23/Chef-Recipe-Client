import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home';
import Blog from './Component/blog/Blog';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
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
      }
    ]
  }
    

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)