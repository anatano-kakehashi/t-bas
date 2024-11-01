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
    Container as BaseContainer,
    ContentFormatted
  } from "assets/styles/TailwindComponents.jsx";

import { testimonials } from "assets/tbas-data/TBas_Info.jsx";
import feedbackOrange from "assets/tbas-images/home/FeedbackIconOrange.svg";
import feedbackBlue from "assets/tbas-images/home/FeedbackIconBlue.svg";

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

const PageContainer = tw(ContentFormatted)`py-12`;
const MainHeading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px] pt-10`;

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
        <hr/>
        {currInfo.reviews.map((review, index) => (
          <>
            {index % 2 == 0
            ?
            <Row key={index} tw="bg-tbasMain-purple400">
              <ImageColumn>
                <Image imageSrc={feedbackOrange} />
              </ImageColumn>
              <TextColumn>
                <TestimonialHeading tw="text-main-black">{review.subHeading}</TestimonialHeading>
                <TesimonialDescription>{review.description}</TesimonialDescription>
              </TextColumn>
            </Row>
            :
            <Row key={index} tw="bg-tbasMain-purple400">
              <ImageColumn>
                <Image imageSrc={feedbackBlue} />
              </ImageColumn>
              <TextColumn>
                <TestimonialHeading tw="text-main-black">{review.subHeading}</TestimonialHeading>
                <TesimonialDescription>{review.description}</TesimonialDescription>
              </TextColumn>
            </Row>
            }
          </>
        ))}
      </PageContainer>
      }
    </>
  );
};
