import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = (props)=>  {
    const {title}= props;
  return (
    <div className=''>
         <nav className="navbar navbar-expand-sm navbar-dark bg-success">
             <a className="navbar-brand" href="#">{title}</a>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="nav-item active">
                         <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/contact/add"> Add Contact</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/about/12"> About</Link>
                     </li>
                 </ul>
        
         </nav>
    </div>
  )
}
Navbar.defaultProps = {
    title : "deafualt title "
}
Navbar.propTypes= {
    title: PropTypes.string.isRequired
}

export default  Navbar;
