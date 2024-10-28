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
    ContentFormatted as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { tutors_acceptance } from "assets/tbas-data/TBas_Info.jsx";
import collegeLecture from "assets/tbas-images/tutors/collegeLecture.jpeg";
import gradCap from "assets/tbas-images/tutors/gradCap.jpeg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";

const Container = tw(BaseContainer)`py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px] pt-10`;

const Row = tw.div`flex flex-col md:flex-row 
max-w-screen-lg xl:max-w-screen-xl 
justify-between items-center lg:my-12 mx-auto h-192 rounded-3xl space-x-4`;

const TextColumn = tw.div`
w-1/2 h-full flex flex-col justify-center bg-tbasMain-purple500 py-16 px-8 rounded-3xl`;

const BulletList = tw.ul`my-4 ml-12 list-disc`;
const BulletItem = tw.li`text-sm md:text-base lg:text-lg font-light leading-relaxed text-main-black`;

const Closing = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-medium`;

const ImageColumn = tw.div`w-1/2 h-full flex flex-col space-y-4`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto 
  w-full h-1/2 rounded-3xl`
]);

var currInfo = tutors_acceptance[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = tutors_acceptance[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>
        {currInfo.heading}
      </Heading>
      <hr/>
      <Row>
        <TextColumn>
          <BulletList>
            {currInfo.colleges.map((college, collegeIndex) => (
              <BulletItem key={collegeIndex}>
                {college}
              </BulletItem>
            ))}
          </BulletList>
          <Closing>{currInfo.closer}</Closing>
        </TextColumn>
        <ImageColumn>
          <Image imageSrc={collegeLecture} />
          <Image imageSrc={gradCap} />
        </ImageColumn>
      </Row>
    </Container>
  );
};
