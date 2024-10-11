import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutPage from "pages/AboutPage.jsx";
import WhyLearnPage from "pages/WhyLearnPage.jsx";
import ServicesPage from "pages/ServicesPage";
import ScrollToTop from "helpers/scrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element = {<HomePage language = "JP"/>} />
          <Route exact path="/eng" element = {<HomePage language = "ENG"/>} />
          <Route path="/aboutTbas" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/aboutTbas" element = {<AboutPage language = "ENG"/>} />
          <Route path="/inPerson" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/inPerson" element = {<AboutPage language = "ENG"/>} />
          <Route path="/online" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/online" element = {<AboutPage language = "ENG"/>} />
          <Route path="/tutors" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/tutors" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/feedback" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/feedback" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/faq" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/faq" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/access" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/access" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/access" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/access" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/contact" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/contact" element = {<ServicesPage language = "ENG"/>} />
        </Routes>
      </Router>
    </>
    
  );
}
