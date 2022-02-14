import React from 'react';
import "./contactme.css";

function Contactme() {
  return (
    <>
        <div className='contact-form'>
        <form>
            <label for="fullName">Full Name</label>
            <input type="text" placeholder='Enter Your Name ?' id='fullName'/>

            <label for="mobileNo">Mobile No</label>
            <input type="text" placeholder='Enter Mobile No ?' id='mobileNo'/>

            <label for="Email">Email ID</label>
            <input type="text" placeholder='Email ID?' id='Email'/>

            <label for="message">Message</label>
            <input type="textArea" row="3" placeholder='Enter Your Message' id='message'/>

            <a className='btname' >Submit Now</a>


        </form>

        </div>
    </>
  )
}

export default Contactme;