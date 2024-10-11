import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {SectionDescription,
    MainHeading2 as MainHeadingTemplate,
    PrimaryButton as PrimaryButtonBase,
    Container as ContainerBase, ContentWithVerticalPadding, Content2Xl, ContentWithPaddingXl
  } from "assets/styles/TailwindComponents.jsx";

import { startJourneyInfo } from "assets/tbas-data/TBas_Info.jsx";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const PrimaryBackgroundContainer = styled.div`
    ${tw`text-gray-100 bg-no-repeat bg-cover bg-left md:bg-center content-center w-full h-auto lg:h-128 z-10`}
    background-image: url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const Row = tw.div`flex items-center flex-row`;
const TextColumn = tw.div`md:ml-6 lg:ml-16 lg:mt-10 px-8 md:px-0 text-center md:text-left `;

const Heading = tw(MainHeadingTemplate)`font-openSans max-w-3xl lg:max-w-4xl lg:text-left leading-tight lg:tracking-[3.6px] mb-12`;
const Description = tw(SectionDescription)`tracking-wide font-roboto mt-4 text-gray-100 mx-auto lg:mx-0 font-light text-left`;

const PrimaryButton = tw(PrimaryButtonBase)`font-roboto mt-8 text-sm sm:text-base py-4 px-6 bg-tbasMain-purple900 inline-block hocus:bg-tbasMain-orange rounded-lg`;

var currInfo = startJourneyInfo[0];
export default function StartJourneyHero(props) {
    if(props.language === "ENG"){
        currInfo = startJourneyInfo[1];
    }
    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <Row>
                    <TextColumn>
                        <Heading>{currInfo.Heading}</Heading>
                        <Description>{currInfo.Description}</Description>
                        <PrimaryButton as="a" href={'mailto:anatano.koki@gmail.com'}>
                            {currInfo.Button}
                            <ArrowIcon tw="w-6 h-6 inline ml-4" />
                        </PrimaryButton>
                    </TextColumn>
                </Row>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
