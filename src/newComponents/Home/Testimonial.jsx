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
    SectionDescription as SectionDescriptionBase,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { home_testimonials } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom.png";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const Container = tw(BaseContainer)`bg-tbasMain-purple500 py-12 lg:px-32`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 max-w-screen-xl mx-auto shadow-lg rounded-3xl bg-main-white`;

const TextColumn = tw.div`
w-4/5 h-full flex flex-col py-16 px-8 rounded-l-3xl`;
const TestimonialHeading = tw(MainParagraphTemplate)`w-full text-left text-tbasMain-purple700 font-bold lg:tracking-[3.6px]`;
const TesimonialDescription = tw(SectionDescriptionBase)`mt-4 text-main-black font-roboto font-medium max-w-full`;

const Heading = tw(MainHeadingTemplate)`text-center text-tbasMain-purple900 lg:tracking-[3.6px]`;
const ButtonRow = tw.div`flex justify-center items-center lg:my-12 mx-auto`;
const PrimaryButton = tw(PrimaryButtonBase)`px-8 w-1/5 mt-8 tracking-wide text-center rounded-md `;

const ImageColumn = tw.div`w-1/5 flex`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-32 h-32`
]);

var currInfo = home_testimonials[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = home_testimonials[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>
        {currInfo.heading}
      </Heading>
      {currInfo.reviews.map((review, index) => (
        <Row key={index}>
          <ImageColumn>
            <Image imageSrc={background} />
          </ImageColumn>
          <TextColumn>
            <TestimonialHeading>{review.subHeading}</TestimonialHeading>
            <TesimonialDescription>{review.description}</TesimonialDescription>
          </TextColumn>
        </Row>
      ))}
      <ButtonRow>
        <PrimaryButton onClick={() => navigate(currNavPath + "aboutMe")}>
          {currInfo.learnMore}
          <ArrowIcon tw="w-6 h-6 inline ml-4" />
        </PrimaryButton>
      </ButtonRow>
    </Container>
  );
};
