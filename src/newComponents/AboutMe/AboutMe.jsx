import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading2 as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    ContentFormatted as BaseContainer,
    LargerMainParagraph as LargerMainParagraphTemplate,
    MainParagraph2 as MainParagraph2Template,
    ContentFormatted2
  } from "assets/styles/TailwindComponents.jsx";

import { access } from "assets/tbas-data/TBas_Info.jsx";
import walk from "assets/tbas-images/tutors/walk.jpeg";
import svgDotPattern from "assets/tbas-images/background/dotBackground.svg";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-down.svg";

const Container = tw(BaseContainer)`py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px]`;
const SubHeading = tw(SubMainHeadingTemplate)`inline-block text-left lg:tracking-[3.6px] ml-4 text-main-black font-normal`;


const Row = tw.div`flex flex-col md:flex-row 
max-w-screen-lg xl:max-w-screen-xl 
justify-between items-center lg:my-12 mx-auto h-112 rounded-3xl space-x-4`;

const TextColumn = tw.div`
w-1/4 h-full flex flex-col justify-center px-8 rounded-3xl`;

const TextContent = tw.div`relative max-w-screen-lg xl:max-w-screen-xl text-left bg-tbasMain-purple400 p-10`;
const TextContentHeading = tw(LargerMainParagraphTemplate)`text-left text-tbasMain-purple700 font-medium mt-4`
const TextContentDescription = tw(MainParagraph2Template)`text-left text-main-black font-light`;
const ClosingRemark = tw(TextContentDescription)`text-right`

const ImageColumn = tw.div`w-3/4 h-full flex flex-col space-y-4`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto 
  w-full h-full`
]);

const OffsetSvg = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`absolute inset-0 bg-cover bg-center m-auto w-full h-full left-0 -translate-x-10 translate-y-10 -z-10`
]);

var currInfo = access[0];
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = access[1];
  }

  return (
    <Container>
      <Heading tw="pt-10">
        {currInfo.heading}
      </Heading>
      <hr/>
      <ContentFormatted2 tw="mb-12">
        <Row>
          <TextColumn tw="space-y-2">
            <Heading>
              T<SubHeading>amagawa</SubHeading>
            </Heading>
            <Heading>
              B<SubHeading>est</SubHeading>
            </Heading>
            <Heading>
              A<SubHeading>fter</SubHeading>
            </Heading>
            <Heading>
              S<SubHeading>chool</SubHeading>
            </Heading>
          </TextColumn>
          <ImageColumn>
            <Image imageSrc={walk}/>
          </ImageColumn>
        </Row>
        <TextContent>
          <TextContentHeading>
          T-BAS玉川学園は、子供達に玉川学園の地で
          最高の放課後を提供したいという思いを込めた塾です。
          </TextContentHeading>
          <TextContentDescription>
          現在、国内では国際バカロレア認定校が少しずつ増えてきています。 IBは長期的な継続学習が何よりも大切です。毎日の学習をきちんと理解しながらコツコツと積み重ねていくことで、 やがて英語力も含めたDP試験に対応できる大きな力がつきます。そして、学校の成績を出来るだけ高くキープすればするほど大学の推薦入試は有利になります。 また、DPでは理系・文系の両方から６科目を選択する必要があるため、低学年の頃から不得意な科目を作らないようにすることも大切です。T-BASのIBコースのチューター達はIBディプロマを高い点数で取得し、国内や国外の大学受験も成功させています。 IBDPを取得した彼らにしか出来ないサポートが沢山あります。勉強の仕方が分からない、 毎日の学習をしっかり定着させたい、親が教えられず困っている、先取り学習をしたい、DP試験や大学受験対策をしたい、 などなどお困りの事はないでしょうか？お1人お1人のご要望に合ったレッスンをご提案させて頂きますのでどうぞお気軽にご相談下さい。また、一般クラス生のための数学フォローアップコースも併設しました。私は長年に渡る塾講師や某通信教育での数学指導の経験を活かして、 数学で困っているお子様のお力になりたいと思っています。他にも頼もしいチューター達がおりますので、数学が苦手な方や学校の勉強を強化したい方など、基礎力をしっかり着けて自信を持って学習が出来るようにサポートさせて頂きます。小さな塾ですが皆様を心よりお待ちしております。
          </TextContentDescription>
          <ClosingRemark>
          T-BAS玉川学園塾長　溝口
          </ClosingRemark>
          <OffsetSvg imageSrc={svgDotPattern} />
        </TextContent>
      </ContentFormatted2>
    </Container>
  );
};
