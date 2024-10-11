import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonBase,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { home_trialLessons } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom.png";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";

const Container = tw(BaseContainer)`py-12 lg:px-32`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 max-w-screen-2xl mx-auto shadow-lg h-96 rounded-3xl `;

const TextColumn = tw.div`
w-1/2 h-full flex flex-col bg-main-white py-16 pl-16 rounded-l-3xl`;

const Heading = tw(SubMainHeadingTemplate)`text-left text-main-black lg:tracking-[3.6px]`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-medium lg:max-w-lg xl:max-w-xl`;
const PrimaryButton = tw(PrimaryButtonBase)`px-2 w-2/5 mt-8 inline-block tracking-wide text-center rounded-md`;

const ImageColumn = tw.div`w-1/2 h-full flex flex-col`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-full h-full rounded-r-3xl`
]);

var currInfo = home_trialLessons[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = home_trialLessons[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <TextColumn>
          <Heading>
            {currInfo.Heading[0]}
            <Heading tw="inline text-tbasMain-purple900">{currInfo.Heading[1]}</Heading>
            {currInfo.Heading[2]}
            <br/>
            {currInfo.Heading[3]}
          </Heading>
          <Description>{currInfo.Subheading}</Description>
          <PrimaryButton onClick={() => navigate(currNavPath + "aboutMe")}>
            <EmailIcon tw="w-6 h-6 inline mr-4" />
            {currInfo.ActionButton}
          </PrimaryButton>
        </TextColumn>
        <ImageColumn>
          <Image imageSrc={background} />
        </ImageColumn>
      </Row>
    </Container>
  );
};
