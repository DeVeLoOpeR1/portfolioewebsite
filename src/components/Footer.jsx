import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const d = new Date();
const year = d.getFullYear();

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-nav'>

                    <Link to="/home" className='nav-item'>Home</Link>

                    <Link to="/project" className='nav-item'>Project</Link>
                    <Link to="/contact" className='nav-item'>Contact</Link>
                    <Link to="/about" className='nav-item'>About</Link>
                </div>


                <p className='copyright'>̥© {year} Saurabh Yadav. All Right Reserved </p>

            </div>

        </>
    )
}

export default Footer