import React from 'react';
import Landing from './Landing';
import Common from './Common';

function About() {
  return (<>
   <Landing 
        title="You Want Know"
        title1="Something About Me"
        desc="React Js Developer With 4 Months Experience"
        btname="Contact Me"
        location="/contact"
      />
      <Common />
  </>
   
  )
}

export default About