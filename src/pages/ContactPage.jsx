import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";
import ContactForm from "newComponents/ContactUs/ContactForm.jsx";

export default function ContactPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <ContactForm language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
