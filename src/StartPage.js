import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className='startPage'>
        <button className='playBtn'><Link to="/game" className='plink'>Play</Link></button>
    </div>
  )
}

export default StartPage