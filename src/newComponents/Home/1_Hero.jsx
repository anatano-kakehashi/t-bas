import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonTemplate,
    Container as ContainerTemplate
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { home_hero } from "assets/tbas-data/TBas_Info.jsx";

import background from "assets/tbas-images/background/homepage-pencil.png";

const Container = styled(ContainerTemplate)(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-auto h-160 lg:h-144 xl:h-144`
  ]);

const HeroContainer = tw.div`z-20 relative py-6 lg:py-0 px-2 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`md:px-4 py-8 flex flex-1 flex-col justify-center items-center`;

const Heading = styled(HeadingTitleTemplate)`
  ${tw`text-left text-main-white leading-snug mt-0 lg:ml-6 xl:ml-10 w-full xl:max-w-7xl`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Paragraph = tw(MainParagraphTemplate)`text-main-white w-full xl:max-w-7xl md:px-2 lg:px-4 my-8 lg:my-8 leading-loose`;

var currInfo = home_hero[0];
export default function Home_Hero(props) {
    if(props.language === "ENG"){
        currInfo = home_hero[1];
    }

    return (
        <>
            <br />
            <Container imageSrc={background} >
                <HeroContainer>
                    <Content>
                        <Heading>
                            {currInfo.Heading}
                        </Heading>
                        <Paragraph>
                            {currInfo.Paragraph}
                        </Paragraph>
                    </Content>
                </HeroContainer>
            </Container>
        </>
    );
};
