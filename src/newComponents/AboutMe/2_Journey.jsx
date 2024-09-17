import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'assets/styles/ReactTimeline/ReactTimeline.css';

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
  } from "assets/styles/TailwindComponents.jsx";

import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as BookIcon } from "feather-icons/dist/icons/book-open.svg";
import { ReactComponent as CodeIcon } from "feather-icons/dist/icons/code.svg";
import { ReactComponent as GameIcon } from "feather-icons/dist/icons/monitor.svg";
import { ReactComponent as CloudIcon } from "feather-icons/dist/icons/cloud.svg";

import kazoku from "assets/ak-images/aboutMe/journeyPhotos/Kazoku.jpeg";
import japan from "assets/ak-images/aboutMe/journeyPhotos/japan.jpeg";
import invoca from "assets/ak-images/aboutMe/journeyPhotos/invoca.jpeg";
import ms from "assets/ak-images/aboutMe/journeyPhotos/ms.jpeg";
import ng from "assets/ak-images/aboutMe/journeyPhotos/ng.jpeg";
import ucsb from "assets/ak-images/aboutMe/journeyPhotos/ucsb-campus.jpeg";
import profile from "assets/ak-images/aboutMe/prof2.png";

/* ======== importing some data for text =========== */
import { aboutMe_JourneyHero } from "assets/ak-data/AK_Info.jsx";


const Container = tw.div`relative px-4 md:px-8 pt-4 md:pt-24 pb-8 md:pb-12 bg-main-white`;

const HeroContainer = tw.div`z-20 relative px-4 md:px-8 pt-8 pb-4 md:pb-16 mx-auto h-full flex flex-col`;

const Heading = tw(MainHeadingTemplate)`lg:px-8 pt-8 xl:pt-12 relative text-left text-main-blue`;
const Paragraph = tw(MainParagraphTemplate)`lg:px-8 pt-4 pb-12 text-main-black leading-loose`;

const CardParagraph = tw.h1`font-roboto font-light text-main-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`;
const CardHeading = tw.h1`font-openSans tracking-wide font-normal text-main-yellow text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center object-center m-auto 
    absolute 
    w-[225px] h-[150px]
    sm:w-[400px] sm:h-[200px]
    md:w-[275px] md:h-[225px]
    lg:w-[350px] lg:h-[275px] xl:w-[450px] xl:h-[375px] rounded`
]);

const Row = tw.div`flex flex-col md:flex-row justify-between items-center pt-8 md:pt-48 lg:pt-64 xl:pt-96 pb-8 max-w-screen-2xl mx-auto sm:px-8`;
const TextColumn = tw.div`relative z-20 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 md:py-4 md:px-12 lg:py-8 lg:px-16 xl:py-10 xl:px-20`; 
const ImageColumn = tw.div`relative pt-16 sm:pt-20 pb-4 sm:pb-8 md:py-0`;
const ImageContainer = tw.div`relative z-10`;
const ProfImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center object-center m-auto 
    w-[250px] h-[300px]
    sm:w-[400px] sm:h-[500px]
    md:w-[300px] md:h-[400px]
    lg:w-[375px] lg:h-[500px] xl:w-[500px] xl:h-[650px] rounded rounded-b-none`
]);
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-light tracking-normal max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`;
const Description2 = tw(MainParagraphTemplate)`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-main-lightBlue font-openSans font-normal italic tracking-wider leading-relaxed max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`;


var currInfo = aboutMe_JourneyHero[0];
var photos = [ucsb, japan, ng, invoca, kazoku, ms];
export default function JourneyAbout(props) {
    if(props.language === "ENG"){
        currInfo = aboutMe_JourneyHero[1];
    }

    return (
        <Container>
            <HeroContainer>
                <Heading>
                    {currInfo.Heading}
                </Heading>
                <Paragraph>
                    {currInfo.Paragraph}
                </Paragraph>
            </HeroContainer>
            <VerticalTimeline lineColor="#121212" layout = '2-columns'>
                {currInfo.Journey.map((experience, index) => (
                    <VerticalTimelineElement
                        contentStyle={{ background: '#FBFBFB', color: '#fff', 'box-shadow': 'none' }}
                        contentArrowStyle={{ borderRight: '10px solid #FBA70E' }}
                        shadowSize = 'large'
                        iconStyle={{ background: '#FBA70E', color: '#FBFBFB' }}
                        icon={
                            (index === 0)? <BookIcon />
                            : (index === 1)? <BriefcaseIcon />
                            : (index === 2 || index === 3)? <CodeIcon />
                            : (index === 4)? <GameIcon />
                            : <CloudIcon />
                        }
                        tw='pb-32 sm:pb-40 md:pb-4 lg:pb-8 xl:pb-12'
                    >
                        <CardHeading style={{color:'#FBA70E'}}>{experience.Date}</CardHeading>
                        <CardParagraph>
                            {experience.Description}
                        </CardParagraph>
                        <br />
                        <Image imageSrc={photos[index]} /> 
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <Row>
                <ImageColumn>
                    <ImageContainer>
                        <ProfImage imageSrc={profile} />
                    </ImageContainer>
                </ImageColumn>
                <TextColumn>
                    <Description>{currInfo.Description1}</Description>
                    <Description2>{currInfo.Description2}</Description2>
                </TextColumn>
            </Row>
        </Container>
    );
};
