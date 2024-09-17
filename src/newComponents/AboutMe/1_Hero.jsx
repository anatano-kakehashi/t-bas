import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainSectionHeading as MainSectionHeadingTemplate,
    MainHeading as MainHeadingTemplate,
    MainHeading2 as SubMainHeadingTemplate,
    Container as ContainerTemplate
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { aboutMe_IntroHero } from "assets/ak-data/AK_Info.jsx";
import background from "assets/ak-images/aboutMe/background.png";
import profile from "assets/ak-images/aboutMe/prof.png";


const BackgroundContainer = styled(ContainerTemplate)`
    ${tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-32 md:h-56 lg:h-72 xl:h-96`}
    background-image: url("https://images.unsplash.com/photo-1457195740896-7f345efef228?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
const Container = styled(ContainerTemplate)`
    ${tw`px-8 pt-20 pb-20 lg:pb-40`}
    background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center 
lg:py-10 
mx-auto lg:mt-10 sm:px-8
xl:max-w-screen-2xl 2xl:max-w-screen-3xl 3xl:max-w-screen-4xl`;

const MainHeading = tw(MainSectionHeadingTemplate)`md:px-8 absolute 
-top-[25px] sm:-top-[57.5px] md:-top-[70px] lg:-top-[80px] xl:-top-[92px] 
text-left text-main-blue tracking-[.25em]`;

const TextColumn = tw.div`pt-10 md:pt-0 
mr-auto md:mr-6 xl:mr-12 
max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl`;

const SubHeading = tw(SubMainHeadingTemplate)`pt-4 text-left text-main-blue font-bold leading-snug`;
const Description = tw(MainHeadingTemplate)`mt-4 text-main-black font-extrabold`;

const ImageColumn = tw.div`ml-auto relative hidden md:inline mt-16 md:mt-0 md:mr-10`;
const MobileImageColumn = tw.div`relative md:hidden`;
const ImageContainer = tw.div`relative z-40 right-[10px] lg:right-[0px]`;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center object-center m-auto 
    w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded rounded-b-none`
  ]);

const Offsetbackground = styled.div`
    background-image: url("https://images.unsplash.com/photo-1618339279706-df3b511d7742?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`absolute inset-0 bg-cover bg-center m-auto 
    lg:ml-8
    left-[30px] lg:left-[0px]
    w-[280px] h-[340px] lg:w-[380px] lg:h-[460px] xl:w-[500px] xl:h-[600px] rounded rounded-b-none`}
`;

var currInfo = aboutMe_IntroHero[0];
export default function IntroAbout(props) {
    if(props.language === "ENG"){
        currInfo = aboutMe_IntroHero[1];
    }

    return (
        <>
            <br />
            <BackgroundContainer />
            <br />
            <Container>
                <MainHeading>
                    {currInfo.Heading}
                </MainHeading>
                <Row>
                    <MobileImageColumn>
                        <ImageContainer>
                            <Image imageSrc={profile} />
                        </ImageContainer>
                        <Offsetbackground imageSrc={background}/>
                    </MobileImageColumn>
                    <TextColumn>
                        <SubHeading>{currInfo.SubHeading}</SubHeading>
                        <Description>
                            { (props.language === "ENG")?
                                <>
                                    {currInfo.Paragraph[0]}
                                    <span tw="text-main-lightBlue">
                                        {currInfo.Paragraph[1]} 
                                    </span>
                                    <br />
                                    {currInfo.Paragraph[2]}
                                    <span tw="text-main-yellow">
                                        {currInfo.Paragraph[3]} 
                                    </span>
                                </>
                                : 
                                <>
                                    <span tw="text-main-yellow">
                                        {currInfo.Paragraph[0]} 
                                    </span>
                                    <br tw="hidden md:block"/>
                                    <span tw="text-main-yellow">
                                        {currInfo.Paragraph[1]} 
                                    </span>
                                    <br tw="block sm:hidden"/>
                                    {currInfo.Paragraph[2]}
                                    <br tw="block sm:hidden"/>
                                    <span tw="text-main-lightBlue">
                                        {currInfo.Paragraph[3]} 
                                    </span>
                                    {currInfo.Paragraph[4]}
                                </>
                            }
                        </Description>
                    </TextColumn>
                    <ImageColumn>
                        <ImageContainer>
                        <Image imageSrc={profile} />
                        </ImageContainer>
                        <Offsetbackground />
                    </ImageColumn>
                </Row>
            </Container>
        </>
    );
};
