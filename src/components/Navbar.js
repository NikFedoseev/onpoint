import React from 'react';

import './Navbar.css'

const Navbar = props => {
  const current = props.current || 0
  return (
    <div className='navbar'>
      <button className="navbar-item" id='0' onClick={props.changeSlide} style={{background: (current == 0) ? '#f78b1f': '#fff'}}/>
      <button className="navbar-item" id='1' onClick={props.changeSlide} style={{background: (current == 1) ? '#f78b1f': '#fff'}}/>
      <button className="navbar-item" id='2' onClick={props.changeSlide} style={{background: (current == 2) ? '#f78b1f': '#fff'}}/>
    </div>
  )
}

export default Navbar;