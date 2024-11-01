import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading2 as MainHeadingTemplate,
    PrimaryButton as PrimaryButtonBase,
    SectionDescription as SectionDescriptionBase,
    ContentFormatted
  } from "assets/styles/TailwindComponents.jsx";
import { courseInfo } from "assets/tbas-data/TBas_Info.jsx";

import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const Container = tw(ContentFormatted)`relative py-12`;

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const MainHeading = tw(MainHeadingTemplate)`w-full tracking-wide text-center text-tbasMain-purple900`;

const PlansContainer = tw.div`flex justify-center flex-col lg:flex-row items-center lg:items-stretch relative px-12`;

const Plan = styled.div(({ item }) => [
  tw`w-full max-w-sm mt-16 lg:mr-12 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col border-4`,
  item === 0 && tw`border-tbasMain-orange`,
  item === 1 && tw`border-tbasMain-lightBlue`,
  item === 2 && tw`border-tbasMain-purple500`
]);
const PlanHeading = styled.div(({ item }) => [
  tw`rounded-t-sm absolute -top-4 inset-x-0 h-8 flex mx-16`,
  item === 0 && tw`bg-tbasMain-orange`,
  item === 1 && tw`bg-tbasMain-lightBlue`,
  item === 2 && tw`bg-tbasMain-purple500`
]);
const PlanHeaderContainer = tw.div`flex flex-wrap flex-col sm:flex-row justify-between items-center my-6 `;
const PlanHeader = styled(MainHeadingTemplate)(({ item }) => [
  tw`font-medium tracking-widest w-full text-center`,
  item === 0 && tw`text-tbasMain-orange`,
  item === 1 && tw`text-tbasMain-lightBlue`,
  item === 2 && tw`text-tbasMain-purple500`
]);

const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
`;
const FeatureTextContainer = tw.div`flex flex-row`
const FeatureText = tw(SectionDescriptionBase)`font-medium text-gray-600 font-normal w-full text-left`

const PlanAction = tw.div`flex flex-row pt-6 px-32`;
const ButtonContainer = tw.div`w-1/2 p-6`
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`bg-tbasMain-gray text-tbasMain-purple900 w-full rounded-lg text-left tracking-wider py-10 px-12 text-sm relative
  hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

var currInfo = courseInfo[0];
var currNavPath = "/";
export default function CoursePlans (props){
  if(props.language === "ENG"){
    currInfo = courseInfo[1];
    currNavPath = "/eng/";
  }

  return (
    <Container>
      <HeaderContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeaderContainer>
      <PlansContainer>
        {currInfo.Courses.map((plan, index) => (
          <>
            {plan.SubHeading === "Pre-MYP" && props.removeMYP
            ? <></>
            : <Plan key={index} item={index}>
              <PlanHeading item={index}></PlanHeading>
              <PlanHeaderContainer>
                <PlanHeader item={index}>{plan.SubHeading}</PlanHeader>
              </PlanHeaderContainer>
              <PlanFeatures>
                {plan.Features.map((feature, index) => (
                    <FeatureTextContainer>
                      <CheckIcon tw="w-6 h-full inline mr-4 mt-2" />
                      <FeatureText key={index}>
                        {feature}
                      </FeatureText>
                    </FeatureTextContainer>
                ))}
              </PlanFeatures>
            </Plan>
            }
          </>
        ))}
      </PlansContainer>
      {!props.removeButton && 
        <PlanAction>
          <ButtonContainer>
            <BuyNowButton>
              {currInfo.Button1}
              <ArrowIcon tw="absolute right-0 w-6 h-6 inline mr-12" />
            </BuyNowButton>
          </ButtonContainer>
          <ButtonContainer>
            <BuyNowButton>
              {currInfo.Button2}
              <ArrowIcon tw="absolute right-0 w-6 h-6 inline mr-12" />
            </BuyNowButton>
          </ButtonContainer>
        </PlanAction>
      }
    </Container>
  );
};
