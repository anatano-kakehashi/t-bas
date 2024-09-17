import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { aboutMe_WhyMeHero } from "assets/ak-data/AK_Info.jsx";
import profile from "assets/ak-images/aboutMe/home_profile.png";

const Container = tw(BaseContainer)`bg-main-backgroundBlue px-8 py-12 md:py-20`;

const MainHeading = tw(MainHeadingTemplate)`text-main-white sm:px-16 sm:pt-6 relative text-center`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center py-4 lg:max-w-screen-2xl xl:max-w-screen-3xl mx-auto sm:px-8`;

const TextColumn = tw.div`relative z-20 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl py-4 lg:py-8 xl:py-10`;
const TextRightColumn = tw(TextColumn)`md:pr-12 lg:pr-16`;
const TextLeftColumn = tw(TextColumn)`md:pl-12 lg:pl-16`;
const ImageColumn = tw.div`relative py-4 md:py-0`;


const ImageContainer = tw.div`relative z-10`;

const Heading = tw(SubMainHeadingTemplate)`text-left text-main-blue tracking-wide leading-snug`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-white font-roboto font-light leading-relaxed `;

const Image1SizingTemplate = tw.div`m-auto rounded
w-[325px] h-[200px]
sm:w-[500px] sm:h-[300px]
md:w-[300px] md:h-[400px]
lg:w-[400px] lg:h-[550px] xl:w-[500px] xl:h-[650px] `;
const Image1 = styled(Image1SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center`}
`;

const Image2SizingTemplate = tw.div`m-auto rounded
w-[325px] h-[200px]
sm:w-[500px] sm:h-[300px]
md:w-[300px] md:h-[300px]
lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]`;
const Image2 = styled(Image2SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center`}
`;

var currInfo = aboutMe_WhyMeHero[0];
export default function WhyMeHero(props) {
    if(props.language === "ENG"){
        currInfo = aboutMe_WhyMeHero[1]
    }
    return (
        <Container>
            <MainHeading>
                {currInfo.Heading}
            </MainHeading>
            <Row>
                <ImageColumn tw="md:hidden">
                    <ImageContainer>
                        <Image1 />
                    </ImageContainer>
                </ImageColumn>
                <TextRightColumn>
                    <Heading>{currInfo.SubHeading1}</Heading>
                    <br tw="hidden md:block"/>
                    <Description>{currInfo.Paragraph1}</Description>
                </TextRightColumn>
                <ImageColumn tw="hidden md:block">
                    <ImageContainer>
                        <Image1 />
                    </ImageContainer>
                </ImageColumn>
            </Row>
            <Row>
                <ImageColumn>
                    <ImageContainer>
                        <Image2 />
                    </ImageContainer>
                </ImageColumn>
                <TextLeftColumn>
                    <Heading tw="text-main-yellow">{currInfo.SubHeading2}</Heading>
                    <br tw="hidden md:block"/>
                    <Description>{currInfo.Paragraph2}</Description>
                </TextLeftColumn>
            </Row>
        </Container>
    );
};
