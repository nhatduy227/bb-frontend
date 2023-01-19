import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    // TODO: replace links to to links to Create/View components once created
    <nav className='nav'>
      <Link to="/" className='link'>Create</Link> 
      <Link to="/home" className='link'>View</Link>
    </nav>
  )
}