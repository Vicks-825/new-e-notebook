import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  
    <div className="collapse navbar-collapse flex flex-row space-x-4 flex-grow items-center" id="navbarSupportedContent">
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
    </div>
    </nav>
    </>
    )
}

export default Navbar