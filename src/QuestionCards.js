import React, { useState, useEffect } from "react";
import questionsArray from "../data/personalityQuestions";

export default function QuestionCards() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState();
  const [score, setScore] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    console.log(score);
  }, [score]);
  const handleAnswerOptionClick = (personality) => {
    if (personality === "lazy") {
      let lazyScore = [1, 0, 0, 0, 0, 0, 0, 0];
      let newScore = score.map((a, i) => a + lazyScore[i]);
      setScore(newScore);
    } else if (personality === "jock") {
      let jockScore = [0, 1, 0, 0, 0, 0, 0, 0];
      let newScore = score.map((a, i) => a + jockScore[i]);
      setScore(newScore);
    } else if (personality === "cranky") {
      let crankyScore = [0, 0, 1, 0, 0, 0, 0, 0];
      let newScore = score.map((a, i) => a + crankyScore[i]);
      setScore(newScore);
    } else if (personality === "smug") {
      let smugScore = [0, 0, 0, 1, 0, 0, 0, 0];
      let newScore = score.map((a, i) => a + smugScore[i]);
      setScore(newScore);
    } else if (personality === "normal") {
      let normalScore = [0, 0, 0, 0, 1, 0, 0, 0];
      let newScore = score.map((a, i) => a + normalScore[i]);
      setScore(newScore);
    } else if (personality === "peppy") {
      let peppyScore = [0, 0, 0, 0, 0, 1, 0, 0];
      let newScore = score.map((a, i) => a + peppyScore[i]);
      setScore(newScore);
    } else if (personality === "snooty") {
      let snootyScore = [0, 0, 0, 0, 0, 0, 1, 0];
      let newScore = score.map((a, i) => a + snootyScore[i]);
      setScore(newScore);
    } else if (personality === "sisterly") {
      let sisterlyScore = [0, 0, 0, 0, 0, 0, 0, 1];
      let newScore = score.map((a, i) => a + sisterlyScore[i]);
      setScore(newScore);
    }
    //I need to fix the setScore max method. What if there are 2 indices that have the max number?
    const nextQuestion = currentQuestion + 1;
    const max = Math.max(...score);
    const index = score.indexOf(max);
    if (nextQuestion < questionsArray.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion >= questionsArray.length && index === 0) {
      setScore("Lazy");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 1) {
      setScore("Jock");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 2) {
      setScore("Cranky");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 3) {
      setScore("Smug");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 4) {
      setScore("Normal");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 5) {
      setScore("Peppy");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 6) {
      setScore("Snooty");
      document.getElementById("results").classList.remove("hide");
      document.getElementById("question-container").classList.add("blur");
    } else if (nextQuestion >= questionsArray.length && index === 7) {
      setScore("Sisterly");
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
