import React from 'react'
import PropTypes from 'prop-types';
const Navbar = (props)=>  {
    const {title}= props;
  return (
    <div className=''>
         <nav className="navbar navbar-expand-sm navbar-dark bg-success">
             <a className="navbar-brand" href="#">{title}</a>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="nav-item active">
                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Contact</a>
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
