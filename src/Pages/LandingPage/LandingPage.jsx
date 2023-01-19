import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='landingPageContent'>
        <h1>Verifiable Legal Entity Identifier (vLEI)</h1>
      </div>
    </div>
  )
}