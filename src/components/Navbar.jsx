import React from 'react';


const Navbar = () => {
    return (
        <div className="header">
        <div className="logo">
          <h2>Code width Wasik</h2>
        </div>
        <div className="link">
          <ul>
            <li><a className='link' href="">Home</a></li>
            <li><a className='link' href="">Course</a></li>
            <li><a className='link' href="">Online payment</a></li>

            <li><a href="" className="applay_btn">apply fo admission</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar;