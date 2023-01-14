import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import './Login.css'

export default function Login() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='content'>
        <div className='title'></div>
        <h1>Verifiable Legal Entity Identifier (vLEI)</h1>
        <div className='form-container'>
          <form className="login-form"  >
            <label className='heading'>Validate Your Credentials</label>
            <label >Log into your account to manage your vLEI registrations and related requests</label>
            <label>Username</label>
            <input type="text" placeholder="Your Institutional Account Username" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Your Email' id="email" name='email' />
            <button type="submit">Log In</button>
          </form>
          <button className='link-btn'>New institution? Sign up here.</button>
          <button className='link-btn'>How to share this account with colleagues?</button>
          <button className='link-btn'>Forgot password? Reset it here.</button>
          <button className='link-btn'>Forgot username? Ask for help here.</button>
        </div>
      </div>
    </div>
  )
}
