import React from 'react';


function Card1(props) {
  return (
    <>
 

          <div className='card-holder1'>
            <img className='card-img1' src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className='btname' href={props.link} target="_blank">Explore More</a>
          </div>
          

        
    </>
  )
}

export default Card1;