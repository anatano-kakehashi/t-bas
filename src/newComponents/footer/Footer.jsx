import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { useNavigate, useLocation } from 'react-router-dom';

/* ========= importing assets ============ */
import { ContentWithVerticalPadding as ContainerBase
} from "assets/styles/TailwindComponents.jsx";

import logo from "assets/tbas-images/logo/TBAS-white-logo.svg";

import { header_footer } from "assets/tbas-data/TBas_Info.jsx";

const NavLinks = tw.div`inline-block cursor-pointer pt-4 text-main-white`;

const NavLink = tw.a`
  text-sm lg:text-lg mx-2 lg:mx-6 my-2 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-main-lightBlue hocus:text-main-lightBlue
`;

const Container = tw(ContainerBase)`bg-tbasMain-purple700 text-main-black -mx-8 -mb-8`
const Content = tw.div`max-w-screen-2xl mx-auto py-16`;

const Row = tw.div`flex items-center justify-center flex-col`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoRow = tw.div`flex items-center justify-center flex-row pb-10`

const LogoImageContainer = tw.div`w-2/5 flex items-center justify-center pr-8`;
const LogoLink = styled(NavLink)`
  ${tw`cursor-pointer flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-80 lg:w-96`}
  }
`;
const LogoTextContainer = tw.div`flex flex-col w-3/5`;
const LogoText = tw.h5`pl-4 pt-6 text-lg lg:text-xl font-roboto text-main-white tracking-[.15em] font-medium`;
const TopLogoText = tw(LogoText)`pt-0`
const LogoLightText = tw(LogoText)`pt-2 font-light text-base lg:text-lg`;

var currPath = "/";
var currInfo = header_footer[0];
export default function Footer(props) {
  const navigate = useNavigate();

  let location = useLocation();
  currPath = (location.pathname);

  // currPath = window.location.hash;
  let pathArr = currPath.split("/");
  pathArr = pathArr.slice(1);
  let currNavPath = "/";
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
    currNavPath = "/eng/";
    currInfo = header_footer[1];
  }
  currPath = pathArr.join("/");

  const tbasLogoLink = (
    <LogoRow>
      <LogoImageContainer>
        <LogoLink onClick={() => navigate(currNavPath)}>
          <img src={logo} alt="logo" />
        </LogoLink>
      </LogoImageContainer>
      
      <LogoTextContainer>
        <TopLogoText>
          {currInfo.address}
        </TopLogoText>
        <LogoText>
          {currInfo.phone}
        </LogoText>
        <LogoLightText>
          {currInfo.hours}
        </LogoLightText>
        <LogoText>
          {currInfo.email}
        </LogoText>
      </LogoTextContainer>
    </LogoRow>
  );

  const tbasNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[0])}>{currInfo.links[0]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[1])}>{currInfo.links[2]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[2])}>{currInfo.links[3]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[3])}>{currInfo.links[4]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[4])}>{currInfo.links[5]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[5])}>{currInfo.links[6]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[6])}>{currInfo.links[7]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[7])}>{currInfo.links[8]}</NavLink>
    </NavLinks>
  ];

  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {tbasLogoLink}
          </LogoContainer>
          {tbasNavLinks}
        </Row>
      </Content>
    </Container>
  );
};
