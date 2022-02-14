import React from 'react';
import Landing from './Landing';
import Common from './Common';


function Home() {
  return (
    <>
      <Landing 
        title="Grow Your Skill With"
        title1=" Learning New Technology"
        desc="ReactJs Developer With 4 Months Experience"
        btname="Get Started"
        location="/project"
      />
      <Common />

    </>
  )
}

export default Home;