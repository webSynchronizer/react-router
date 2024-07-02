import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className='navbar navbar-expand navbar-dark bg-dark'>
                    <h1 className='navbar-brand'>React-Router</h1>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-items'>
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-link' to="/about">About</Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-link' to="/services">Service</Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Header
