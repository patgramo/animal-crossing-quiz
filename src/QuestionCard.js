import React, { useState } from "react";
import { questionsArray } from "../data/personalityQuestions";

function QuestionCard() {
  const [state, setState] = useState(0);
  function handleClick() {
    setState(state + 1);
  }
  return (
    <div className="card-container">
      <div className="question">
        <h2>{questionsArray[state].question}</h2>
      </div>
      <div className="answers">
        <p className="individual-answer" id="lazy" onClick={handleClick}>
          {questionsArray[state].lazy}
        </p>
        <p className="individual-answer" id="jock" onClick={handleClick}>
          {questionsArray[state].jock}
        </p>
        <p className="individual-answer" id="cranky" onClick={handleClick}>
          {questionsArray[state].cranky}
        </p>
        <p className="individual-answer" id="smug" onClick={handleClick}>
          {questionsArray[state].smug}
        </p>
        <p className="individual-answer" id="normal" onClick={handleClick}>
          {questionsArray[state].normal}
        </p>
        <p className="individual-answer" id="peppy" onClick={handleClick}>
          {questionsArray[state].peppy}
        </p>
        <p className="individual-answer" id="snooty" onClick={handleClick}>
          {questionsArray[state].snooty}
        </p>
        <p className="individual-answer" id="sisterly" onClick={handleClick}>
          {questionsArray[state].sisterly}
        </p>
      </div>
    </div>
  );
}

export default QuestionCard;
