import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Contact from './components/Contact'
import Faculty from './pages/Faculty.jsx'
import Gallery from './pages/Gallery.jsx'
import Students from './pages/Students.jsx'
import Timeline from './pages/Timeline.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <Timeline />,
      },
      {
        path: 'academics',
        element: <Academics />,
      },
      {
        path: 'admissions',
        element: <Admissions />,
      },
      {
        path: 'faculty',
        element: <Faculty />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
