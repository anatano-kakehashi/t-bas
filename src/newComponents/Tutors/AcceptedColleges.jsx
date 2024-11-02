import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    ContentFormatted as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { tutors_acceptance } from "assets/tbas-data/TBas_Info.jsx";
import collegeLecture from "assets/tbas-images/tutors/collegeLecture.jpeg";
import gradCap from "assets/tbas-images/tutors/gradCap.jpeg";

const Container = tw(BaseContainer)`pt-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const Row = tw.div`flex flex-col md:flex-row 
max-w-screen-lg xl:max-w-screen-xl 
justify-between items-center lg:my-12 mx-auto h-272 rounded-3xl space-x-4`;

const TextColumn = tw.div`
w-2/5 h-full flex flex-col justify-center bg-tbasMain-purple500 py-16 px-8 rounded-3xl`;

const BulletList = tw.ul`mb-4 ml-8 list-disc`;
const BulletItem = tw.li`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed text-main-black`;

const Closing = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-medium`;

const ImageColumn = tw.div`w-3/5 h-full flex flex-col space-y-4`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto 
  w-full h-1/2 rounded-3xl`
]);

var currInfo = tutors_acceptance[0];
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = tutors_acceptance[1];
  }

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
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
