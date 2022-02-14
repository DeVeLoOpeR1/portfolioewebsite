import React from 'react';
import Card from './Card';
import Card1 from './Card1';
import image1 from "../images/project1.png";
import image2 from "../images/project2.png";
import image3 from "../images/project3.png";
import image4 from "../images/project4.png";
import image5 from "../images/project5.png";
import image6 from "../images/project6.png";
import image7 from "../images/project7.png";
import image8 from "../images/project8.png";
import image9 from "../images/project9.png";
import image10 from "../images/project10.png";

function Common() {
  return (
    <>
        <h2>Project</h2>

<div className='project-card'>

  <div className='card-wrap'>

    <Card
      image={image1}
      title="Build Online Food Order UI"
      description="Build online food ordering website using html css bootstrap and javascript"
      link="https://develooper1.github.io/lunch/" />


    <Card
      image={image2}
      title="Build Online Hotel Site UI"
      description="Build online hote website using html css bootstrap and javascript"
      link="https://develooper1.github.io/hotel-site/" />


    <Card
      image={image3}
      title="Build Online Dating Site UI"
      description="Build online dating website using html css bootstrap and javascript"
      link="https://develooper1.github.io/tinderclone/" />


  </div>

  <div className='card-wrap1'>
    <Card1
      image={image5}
      title="Build Online Ecommerce Site"
      description="Build online shopping website using html css bootstrap and javascript"
      link="https://develooper1.github.io/tinderclone/" />

    <Card1
      image={image4}
      title="Build Digital Marketing Site"
      description="Build digital marketing website using html css bootstrap and javascript"
      link="https://develooper1.github.io/digital-marketing/" />


  </div>
  <div className='card-wrap'>
    <Card
      image={image6}
      title="Build Church site ui design"
      description="Build church website using html css bootstrap and javascript"
      link="https://develooper1.github.io/churchSite/" />

    <Card
      image={image7}
      title="Build Find Dog Nearby Chating Site"
      description="Build online dog dating website using html css bootstrap and javascript"
      link="https://develooper1.github.io/tindog/" />

    <Card
      image={image8}
      title="Build Login And Registration Site UI"
      description="Build login and registration website using html css bootstrap and javascript"
      link="https://develooper1.github.io/login/" />
  </div>
  <div className='card-wrap1'>
    <Card1
      image={image9}
      title="Build Google Keeper App"
      description="Build google keeper app using html css bootstrap javascript and reactjs"
      link="https://2vv57.csb.app/" />
    <Card1
      image={image10}
      title="Build To Do List App"
      description="Build to-do list app using html css bootstrap javascript and reactjs"
      link="https://49lol.csb.app/" />

  </div>


</div>
    </>
  )
}

export default Common;