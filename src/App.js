import "./styles.css";
import React from "react";
import QuestionCard from "./QuestionCard.js";
import CrankyQuestions from "./CrankyQuestions.js";
import JockQuestions from "./JockQuestions.js";
import LazyQuestions from "./LazyQuestions";
import SmugQuestions from "./SmugQuestions";
import NormalQuestions from "./NormalQuestions";
import PeppyQuestions from "./PeppyQuestions";
import SnootyQuestions from "./SnootyQuestions";
import SisterlyQuestions from "./SisterlyQuestions";

export default function App() {
  return (
    <div>
      <QuestionCard />
      <CrankyQuestions />
      <JockQuestions />
      <LazyQuestions />
      <SmugQuestions />
      <NormalQuestions />
      <PeppyQuestions />
      <SnootyQuestions />
      <SisterlyQuestions />
    </div>
  );
}
