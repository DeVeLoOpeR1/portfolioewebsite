import React from 'react';

function Card(props) {
return (
    <>

<div className='card-holder'>
  <img className='card-img' src={props.image}/>
  <h3>{props.title}</h3>
  <p>{props.description}</p>
  <a className='btname' href={props.link} target="_blank">Explore More</a>
</div>

    </> )
}

export default Card;