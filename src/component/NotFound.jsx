import React from 'react'
import { Link } from 'react-router-dom'

export default function 
NotFoundPage() {
  return (
    <div>
        <h1>404</h1>
        
         <Link to = "/"> <button className='btn btn-primary'> Back to home </button></Link>
    </div>
  )
}
