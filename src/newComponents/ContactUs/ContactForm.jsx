import React, {useState} from "react";
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
    ContentFormatted as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { tutors_acceptance } from "assets/tbas-data/TBas_Info.jsx";

const Container = tw(BaseContainer)`py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 lg:tracking-[3.6px] pt-10`;

const Row = tw.div`flex flex-col
max-w-screen-lg xl:max-w-screen-xl bg-tbasMain-purple400 
justify-between items-center 
lg:my-12 py-12 mx-auto rounded-3xl`;

const Form = tw.form`flex flex-col w-4/5 py-12 text-sm md:text-base lg:text-lg xl:text-xl`;
const Label = tw.label`font-semibold mt-8 mb-3 first:mt-0`;
const RedLabel = tw.span`bg-tbasMain-orange text-main-white font-semibold p-2 mr-4 rounded-lg`;
const Input = tw.input` 
border-b-2 p-4 px-6
font-medium
focus:outline-none transition duration-300 hocus:border-tbasMain-purple700`;
const DropDown = tw.select`text-sm md:text-base lg:text-lg xl:text-xl p-4`;
const Options = tw.option`text-sm md:text-base lg:text-lg xl:text-xl`;
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-40`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

var currInfo = tutors_acceptance[0];
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = tutors_acceptance[1];
  }

  const [name, setName] = useState('');
  const [furigana, setFurigana] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('entry.535335213', name); 
    formData.append('entry.339977056', furigana); 
    formData.append('entry.1118025010', phoneNumber); 
    formData.append('entry.1200010804', email); 
    formData.append('entry.727892621', school); 
    formData.append('entry.1595237345', subject); 
    formData.append('entry.1321699481', gradeLevel); 
    formData.append('entry.582929859', questionCategory); 
    formData.append('entry.2028139216', question);  

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe-S7A9nNFB-023aMo_4c4nRbbcf5tffofd4l57HoRAJ7x-Lg/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode to avoid CORS issues
        body: formData,
      });
      setResponseMessage('Submission successful!');
      setName('');
      setFurigana('');
      setPhoneNumber('');
      setEmail('');
      setSchool('');
      setSubject('');
      setGradeLevel('');
      setQuestionCategory('');
      setQuestion('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Submission failed. Please try again.');
    }
  };

  return (
    <Container>
      <Heading>
        {currInfo.heading}
      </Heading>
      <hr/>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Label for="name">
            <RedLabel>必須</RedLabel>
            名前（生徒）
          </Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="例：山田太郎" required />

          <Label for="furigana">
            <RedLabel>必須</RedLabel>
            フリガナ
          </Label>
          <Input id="furigana" type="text" value={furigana} onChange={(e) => setFurigana(e.target.value)} placeholder="例：ヤマダタロウ" required />
          
          <Label for="phone">
            <RedLabel>必須</RedLabel>
            電話番号
          </Label>
          <Input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="例：000-0000-0000" required />

          <Label for="email">
            <RedLabel>必須</RedLabel>
            メールアドレス
          </Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="例：user@example.jp" required/>

          <Label for="school">
            <RedLabel>必須</RedLabel>
            学校名
          </Label>
          <Input id="school" type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="例：T-BAS玉川学園" required />

          <Label for="subject">
            <RedLabel>必須</RedLabel>
            科目
          </Label>
          <DropDown id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <Options value="Math">Math</Options>
          </DropDown>

          <Label for="grade">
            <RedLabel>必須</RedLabel>
            学年
          </Label>
          <Input id="grade" type="text" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} placeholder="例：６年生" required />

          <Label for="contactType">
            <RedLabel>必須</RedLabel>
            お問い合わせ種別
          </Label>
          <DropDown id="contactType" value={questionCategory} onChange={(e) => setQuestionCategory(e.target.value)}>
            <Options value="Price">Price</Options>
          </DropDown>
          
          <Label for="question">
            <RedLabel>必須</RedLabel>
            お問い合わせ内容
          </Label>
          <Textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="現在の成績・相談内容" />

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        {responseMessage && <div>{responseMessage}</div>}
      </Row>
    </Container>
  );
};
