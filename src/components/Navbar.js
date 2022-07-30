import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let Navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    Navigate("/login", { replace: true });
  }
  return (
    <>
    <nav className="relative w-full flex flex-row flex-wrap items-center justify-between content-center py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  
    <div className="collapse navbar-collapse flex flex-row space-x-4 flex-grow items-center mx-4" id="navbarSupportedContent">
    <Link className="text-xl text-black" to="/">E-Notebook</Link>
    <ul className="navbar-nav flex flex-row space-x-4 pl-0 list-style-none mr-auto">
      <li className="nav-item px-2">
        <Link className="nav-link active text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item pr-2">
        <Link className="nav-link active text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/about">About</Link>
      </li>
    </ul>
    </div>
    {!localStorage.getItem('token')?
    <div className="auth flex flex-row space-x-2 justify-center content-center mx-6">
      <div className="flex justify-center">
      <Link type="button" to='/login' className="inline-block px-4 py-2.5 bg-blue-600 text-white font-bold text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">LogIn</Link>
      </div>
      <div className="flex justify-center">
      <Link type="button" to='/signup' className="inline-block px-4 py-2.5 bg-blue-600 text-white font-bold text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SignUp</Link>
      </div>
    </div>: <div className="flex justify-center mx-6">
      <button type="button" className="inline-block px-4 py-2.5 bg-blue-600 text-white font-bold text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleLogout}>LogOut</button>
      </div>
    }
    </div>
    </nav>
    </>
    )
}

export default Navbar