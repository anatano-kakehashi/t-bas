import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonBase,
    SectionDescription as SectionDescriptionBase,
    Container as BaseContainer,
    ContentFormatted, ContentFormatted2
  } from "assets/styles/TailwindComponents.jsx";

import { testimonials } from "assets/tbas-data/TBas_Info.jsx";
import feedbackOrange from "assets/tbas-images/home/FeedbackIconOrange.svg";
import feedbackBlue from "assets/tbas-images/home/FeedbackIconBlue.svg";

import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const Container = tw(BaseContainer)`bg-tbasMain-purple500 py-20 lg:px-32`;

const Row = tw(ContentFormatted2)`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto shadow-lg rounded-3xl bg-main-white`;

const TextColumn = tw.div`w-5/6 h-full flex flex-col py-16 pr-8 rounded-l-3xl`;
const TestimonialHeading = tw(MainParagraphTemplate)`w-full text-left text-tbasMain-purple900 font-bold tracking-widest`;
const TesimonialDescription = tw(SectionDescriptionBase)`mt-4 text-main-black font-light max-w-full`;

const Heading = tw(MainHeadingTemplate)`text-center text-tbasMain-purple900 tracking-widest py-10`;
const ButtonRow = tw.div`flex justify-center items-center lg:my-12 mx-auto`;
const PrimaryButton = tw(PrimaryButtonBase)`px-8 w-1/5 mt-8 tracking-wide text-center rounded-md `;

const ImageColumn = tw.div`w-1/6 flex`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-32 h-32`
]);

const PageContainer = tw(ContentFormatted)`py-12`;
const MainHeading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

var currInfo = testimonials[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = testimonials[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <>
      {props.isHome
      ?
      <Container>
        <Heading>
          {currInfo.heading}
        </Heading>
        <Row>
          <ImageColumn>
            <Image imageSrc={feedbackOrange} />
          </ImageColumn>
          <TextColumn>
            <TestimonialHeading>{currInfo.reviews[0].subHeading}</TestimonialHeading>
            <TesimonialDescription>{currInfo.reviews[0].description}</TesimonialDescription>
          </TextColumn>
        </Row>
        <Row>
          <ImageColumn>
            <Image imageSrc={feedbackBlue} />
          </ImageColumn>
          <TextColumn>
            <TestimonialHeading>{currInfo.reviews[1].subHeading}</TestimonialHeading>
            <TesimonialDescription>{currInfo.reviews[1].description}</TesimonialDescription>
          </TextColumn>
        </Row>
        <Row>
          <ImageColumn>
            <Image imageSrc={feedbackOrange} />
          </ImageColumn>
          <TextColumn>
            <TestimonialHeading>{currInfo.reviews[2].subHeading}</TestimonialHeading>
            <TesimonialDescription>{currInfo.reviews[2].description}</TesimonialDescription>
          </TextColumn>
        </Row>
        <ButtonRow>
          <PrimaryButton onClick={() => navigate(currNavPath + "feedback")}>
            {currInfo.learnMore}
            <ArrowIcon tw="w-6 h-6 inline ml-4" />
          </PrimaryButton>
        </ButtonRow>
      </Container>
      :
      <PageContainer>
        <MainHeading>
          {currInfo.heading}
        </MainHeading>
        <HorizontalLine />
        {currInfo.reviews.map((review, index) => (
          <Row key={index} tw="bg-tbasMain-purple400">
            <ImageColumn>
            {index % 2 == 0
              ? <Image imageSrc={feedbackOrange} />
              : <Image imageSrc={feedbackBlue} />
            }
            </ImageColumn>
            <TextColumn>
              <TestimonialHeading tw="text-main-black">{review.subHeading}</TestimonialHeading>
              <TesimonialDescription>{review.description}</TesimonialDescription>
            </TextColumn>
          </Row>
        ))}
      </PageContainer>
      }
    </>
  );
};
