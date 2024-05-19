import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About.jsx';
import Resume from './pages/resume/Resume.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About></About> 
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
