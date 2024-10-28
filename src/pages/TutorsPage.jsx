import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";

import TutorsList from "newComponents/Tutors/TutorsList.jsx";
import AcceptedColleges from "newComponents/Tutors/AcceptedColleges.jsx";

import TrialLesson from 'newComponents/Home/TrialLesson';

export default function TutorsPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      
      <TutorsList language = {props.language} />
      <AcceptedColleges language = {props.language} />
      
      <TrialLesson language = {props.language}/>
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
