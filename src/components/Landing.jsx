import React from 'react';
import { Link } from 'react-router-dom';
import v from "../../src/video/video-2.mp4";

function Landing(props) {
  return (
    <div className='home-page'>

    <video src={v} muted autoPlay loop />
    <div className='home-content'>
      <h1>{props.title}<br/>{props.title1}</h1>
      <p>{props.desc}</p>
      <Link className='button' to={props.location}>{props.btname}</Link>
    </div>
    </div>
    
  )
}

export default Landing;