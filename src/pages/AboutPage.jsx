import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import AboutMe from 'newComponents/AboutMe/AboutMe.jsx';

import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";

export default function AboutPage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        
        <AboutMe language = {props.language}/>
        
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
