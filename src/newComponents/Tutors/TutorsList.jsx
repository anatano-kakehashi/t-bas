import React, { useState } from "react";
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
    ContentFormatted,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import Pagination from "./Pagination.jsx";

import { tutors_list } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom.png";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px] pt-10`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto shadow-lg rounded-3xl bg-tbasMain-purple400`;

const ImageColumn = tw.div`w-1/5 flex flex-col items-center justify-center`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center rounded-full object-center m-auto w-48 h-48`
]);
const ImageHeading = tw(SubMainHeadingTemplate)`pt-6 text-center text-main-black`;

const TextColumn = tw.div`
w-4/5 h-full flex flex-col py-16 pr-8 rounded-l-3xl`;

const TextColumnRow = tw.div`flex flex-col bg-main-white mb-4 p-4 rounded-xl `

const TextColumnHeading = tw(MainParagraphTemplate)`w-full text-left text-main-black font-bold lg:tracking-[3.6px]`;
const TextColumnDescription = tw(SectionDescriptionBase)`mt-4 text-main-black font-roboto font-light max-w-full`;

const BulletList = tw.ul`my-4 ml-12 list-disc`;
const BulletItem = tw.li`text-sm md:text-base lg:text-lg font-light leading-relaxed text-main-black`;


const ButtonRow = tw.div`flex justify-center items-center lg:my-12 mx-auto`;
const PrimaryButton = tw(PrimaryButtonBase)`px-8 w-1/5 mt-8 tracking-wide text-center rounded-md `;

var currInfo = tutors_list[0];
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = tutors_list[1];
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 2;

  // Calculate the index of the last tutor on the current page
  const lastTutorIndex = currentPage * tutorsPerPage;
  // Calculate the index of the first tutor on the current page
  const firstTutorIndex = lastTutorIndex - tutorsPerPage;
  // Get the current tutors
  const currentTutors = currInfo.tutors.slice(firstTutorIndex, lastTutorIndex);

  // Change page function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  };


  return (
    <ContentFormatted>
      <Heading>
        {currInfo.heading}
      </Heading>
      <hr/>
      {currentTutors.map((tutor, index) => (
        <Row key={index}>
          <ImageColumn>
            <Image imageSrc={background} />
            <ImageHeading>
              {tutor.name}
            </ImageHeading>
          </ImageColumn>
          <TextColumn>
            <TextColumnRow>
              <TextColumnHeading>
                経歴：
              </TextColumnHeading>
              <BulletList>
                {tutor.education.map((program, programIndex) => (
                  <BulletItem key={programIndex}>
                    {program}
                  </BulletItem>
                ))}
              </BulletList>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>
                担当科目：
              </TextColumnHeading>
              <BulletList>
                {tutor.subjects.map((subject, subjectIndex) => (
                  <BulletItem key={subjectIndex}>
                    {subject}
                  </BulletItem>
                ))}
              </BulletList>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>
                コメント：
              </TextColumnHeading>
              <TextColumnDescription>
                {tutor.comment}
              </TextColumnDescription>
            </TextColumnRow>
          </TextColumn>
        </Row>
      ))}
      {/* Pagination */}
      <Pagination
        tutorsPerPage={tutorsPerPage}
        totalTutors={currInfo.tutors.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </ContentFormatted>
  );
};
