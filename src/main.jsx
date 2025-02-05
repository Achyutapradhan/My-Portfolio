import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// for routing
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';


// manual routes created by me.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },
]);


// {router} no re-rendering will be done
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
