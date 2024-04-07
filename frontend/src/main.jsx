import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import Header from './componenets/Header.jsx';
import Footer from './componenets/Footer.jsx';
import { AuthContextProvider } from './context/authContext.jsx';

const Layout = () =>{
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element: <Single/>,
      },
      {
        path:"/write",
        element: <Write/>,
      },
    ]
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
    
  </React.StrictMode>
);

