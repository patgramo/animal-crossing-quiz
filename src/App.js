import "./styles.css";
import React, { useState, useEffect } from "react";
import CrankyQuestions from "./CrankyQuestions";
import JockQuestions from "./JockQuestions";
import QuestionCards from "./QuestionCards";

export default function App() {
  return (
    <div>
      <QuestionCards />
      {/* <CrankyQuestions />
      <JockQuestions /> */}
      {/* <LazyQuestions />
      <SmugQuestions />
      <NormalQuestions />
      <PeppyQuestions />
      <SnootyQuestions />
      <SisterlyQuestions /> */}
    </div>
  );
}
