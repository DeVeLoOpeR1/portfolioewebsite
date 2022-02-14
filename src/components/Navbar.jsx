import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    var flag = 0;
    function handleclick() {
        const v = document.getElementById("mobileview");
        if (flag === 0){
            v.style.display = "block";
            flag=1;
        }
        else{
            flag=0;
            v.style.display = "none";

        }
    }

    function closemenu(){
        const v = document.getElementById("mobileview");
        v.style.display = "none";
    }
    return (
        <>

            <nav>
                <Link to="/home" className='nav-logo' onClick={closemenu}>
                    Portfolio
                </Link>
                <div className='menu-icon' onClick={handleclick}>
                    <hr />
                    <hr />
                    <hr />
                    <hr />

                </div>


                <ul id="mobileview">
                    <li onClick={closemenu}>
                        <Link to="/home" className='nav-item'>Home</Link>
                    </li>
                    <li onClick={closemenu}>
                        <Link to="/project" className='nav-item'>Project</Link>
                    </li>
                    <li onClick={closemenu}>
                        <Link to="/contact" className='nav-item'>Contact</Link>
                    </li>
                    <li onClick={closemenu}>
                        <Link to="/about" className='nav-item'>About</Link>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar