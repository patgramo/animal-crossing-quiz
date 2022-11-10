import React, { useState, useEffect } from "react";
import questionsArray from "../data/personalityQuestions";

export default function QuestionCards() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState();
  const [score, setScore] = useState([]);
  useEffect(() => {
    console.log(score);
  }, [score]);

  const handleAnswerOptionClick = (personality) => {
    setScore(score.concat(personality));
    console.log(score);
    //I need to fix the setScore max method. What if there are 2 indices that have the max number?
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsArray.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    }
  };
  //
  //
  return (
    <div className="container">
      <div id="question-container">
        <div className="question">
          <h1>{questionsArray[currentQuestion].question}</h1>
        </div>
        <div className="answers">
          {questionsArray[currentQuestion].answers.map((answerOption) => (
            <button
              className="individual-answer"
              key={answerOption.personality}
              onClick={() => handleAnswerOptionClick(answerOption.personality)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      <div className="hide" id="results">
        <h1>You have a {score} personality!</h1>
      </div>
    </div>
  );
}
