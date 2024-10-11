import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    MainHeading2 as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonBase,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { home_keyAspects } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom.png";
import profile from "assets/ak-images/aboutMe/home_profile.png";

const Container = tw(BaseContainer)`py-12 lg:px-32`;
const Wrapper = tw.div`divide-y my-24`;
const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-32 max-w-screen-2xl mx-auto h-96`;

const TextColumn = tw.div`
w-1/2 h-full flex flex-col py-16 pl-16 rounded-l-3xl`;

const MainHeading = tw(MainHeadingTemplate)`font-openSans lg:tracking-[3.6px] text-tbasMain-purple900 font-extrabold`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Heading = tw(SubMainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px]`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-medium lg:max-w-lg xl:max-w-xl lg:text-lg xl:text-xl`;

const KeyNumber = tw.h1`text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-20xl font-YuGothic font-extrabold tracking-widest text-tbasMain-orange`;

const ImageColumn = tw.div`w-1/2 h-full flex flex-col`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-full h-full rounded-r-3xl`
]);

var currInfo = home_keyAspects[0];
var currNavPath = "/";

export default function KeyAspects(props) {
  if(props.language === "ENG"){
    currInfo = home_keyAspects[1];
    currNavPath = "/eng/";
  }

  return (
    <Container>
      <HeadingInfoContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeadingInfoContainer>
      <Wrapper>
        {currInfo.KeyAspects.map((keyaspect, index) => (
          <Row key={index}>
            <TextColumn>
              {index != 1 ? <KeyNumber>0{index + 1}</KeyNumber>: <KeyNumber tw="text-tbasMain-lightBlue">0{index + 1}</KeyNumber>}
              <Heading>
                {keyaspect.SubHeading}
              </Heading>
              <Description>{keyaspect.Description}</Description>
            </TextColumn>
            <ImageColumn>
              <Image imageSrc={keyaspect.ImageUrl} />
            </ImageColumn>
          </Row>
        ))}
      </Wrapper>
      
    </Container>
  );
};
