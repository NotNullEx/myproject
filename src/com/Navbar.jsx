import React from 'react'
import { Link } from 'react-router-dom'; // react에서는 a태그 대신 Link를 사용함
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/guestbook">GuestBook</Link>
      <Link to="/scrollText">ScrollText</Link>
    </nav>
  )
}

export default Navbar