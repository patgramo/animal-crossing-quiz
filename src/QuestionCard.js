import React, { useState } from "react";
import questionsArray from "../data/personalityQuestions";

export default function QuestionCard() {
  const [lazy, setLazy] = useState(1);
  const [jock, setJock] = useState(1);
  const [cranky, setCranky] = useState(1);
  const [smug, setSmug] = useState(1);
  const [normal, setNormal] = useState(1);
  const [peppy, setPeppy] = useState(1);
  const [snooty, setSnooty] = useState(1);
  const [sisterly, setSisterly] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="card-container">
      <div className="question">
        <h2>{questionsArray[count].question}</h2>
      </div>
      <div className="answers">
        <p
          className="individual-answer"
          id="lazy"
          onClick={() => {
            setLazy(lazy + 1);
            setCount(count + 1);
          }}
        >
          {questionsArray[count].lazy}
        </p>
        <p
          className="individual-answer"
          id="jock"
          onClick={() => {
            setJock(jock + 1);
            setCount(count + 1);
          }}
        >
          {questionsArray[count].jock}
        </p>
        <p
          className="individual-answer"
          id="cranky"
          onClick={() => {
            setCranky(cranky + 1);
            setCount(count + 1);
          }}
        >
          {questionsArray[count].cranky}
        </p>
        <p
          className="individual-answer"
          id="smug"
          onClick={() => {
            setSmug(smug + 1);
            setCount(count + 1);
          }}
        >
          {questionsArray[count].smug}
        </p>
        <p
          className="individual-answer"
          id="normal"
          onClick={() => {
            setNormal(normal + 1);
            setCount(count + 1);
          }}
        >
          {questionsArray[count].normal}
        </p>
        <p
          className="individual-answer"
          id="peppy"
          onClick={() => {
            setPeppy(peppy + 1);
            setCount(count + 1);
            console.log(peppy);
          }}
        >
          {questionsArray[count].peppy}
        </p>
        <p
          className="individual-answer"
          id="snooty"
          onClick={() => {
            setSnooty(snooty + 1);
            setCount(count + 1);
            console.log(snooty);
          }}
        >
          {questionsArray[count].snooty}
        </p>
        <p
          className="individual-answer"
          id="sisterly"
          onClick={() => {
            setSisterly(sisterly + 1);
            setCount(count + 1);
            console.log(sisterly);
          }}
        >
          {questionsArray[count].sisterly}
        </p>
      </div>
    </div>
  );
}
