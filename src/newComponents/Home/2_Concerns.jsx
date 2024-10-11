import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading2 as HeadingTitleTemplate, 
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    Container
  } from "assets/styles/TailwindComponents.jsx";
/* ======== importing some data for text =========== */
import { home_concerns } from "assets/tbas-data/TBas_Info.jsx";

/* ===== define some twin / tailwind css for components ===== */


const HeadingTitle = tw(SubMainHeadingTemplate)`font-openSans lg:tracking-[3.6px] font-extrabold text-main-black`;
const HeadingRedTitle = tw(HeadingTitleTemplate)`inline font-openSans lg:tracking-[3.6px] font-extrabold text-tbasMain-red`;

const HeadingInfoContainer = tw.div`py-6 flex flex-col items-center bg-tbasMain-purple500`;
const TriangleContainer = tw.div`flex flex-col items-center`;

const Triangle = tw.div`flex justify-center w-0 h-0 
border-l-[50px] border-l-transparent
border-t-[75px] border-tbasMain-purple500
border-r-[50px] border-r-transparent`
const WhiteTriangle = tw.div`flex justify-center w-0 h-0 
border-l-[50px] border-l-transparent
border-t-[75px] border-main-white
border-r-[50px] border-r-transparent`

const Card = tw.div` p-8 lg:mx-4 xl:mx-8 bg-main-white rounded-[1rem] flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-center m-auto w-[260px] h-[260px] rounded rounded-b-none`
]);

const Details = tw.div`rounded rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;

const Title = tw.h5`mt-4 leading-snug font-openSans text-main-blue font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center`;
const Description = tw(MainParagraphTemplate)`lg:px-6 pt-2 pb-6 mt-2 font-roboto font-light text-main-black text-left`;

var currInfo = home_concerns[0];
export default function Concerns(props) {
    if(props.language === "ENG"){
        currInfo = home_concerns[1];
    }
    return (
        <Container tw="pt-12">
            <HeadingInfoContainer>
                <HeadingTitle>      
                    {currInfo.Heading[0]}
                    <HeadingRedTitle>{currInfo.Heading[1]}</HeadingRedTitle>
                    {currInfo.Heading[2]}
                </HeadingTitle>
            </HeadingInfoContainer>
            <TriangleContainer>
                <Triangle />
            </TriangleContainer>
            
            <TriangleContainer tw="bg-tbasMain-purple700 pb-10">
                <WhiteTriangle />
                <HeadingTitle tw="pt-6 text-center text-main-white">      
                    {currInfo.Subheading[0]} <br/>
                    {currInfo.Subheading[1]}
                </HeadingTitle>
            </TriangleContainer>
        </Container>
    );
};
