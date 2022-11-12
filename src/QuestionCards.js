import React, { useState, useEffect } from "react";
import questionsArray from "../data/questionsArray";
import "./styles.css";

export default function QuestionCards() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nature, setNature] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [month, setMonth] = useState();
  const [catchphrase, setCatchphrase] = useState();
  const [villagerData, setVillagerData] = useState([]);
  const [personalityDone, setPersonalityDone] = useState(false);
  const [birthdayWasClicked, setBirthdayWasClicked] = useState(false);
  const [catchphraseWasClicked, setCatchphraseWasClicked] = useState(false);
  const [villagerFinal, setVillagerFinal] = useState();
  const [villagerImage, setVillagerImage] = useState();

  useEffect(() => {
    console.log(villagerData);
  }, [villagerData]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://acnhapi.com/v1a/villagers");
      const data = await response.json();
      if (birthdayWasClicked) {
        setVillagerData(
          data
            .map((obj) => ({
              name: obj.name["name-USen"],
              personality: obj.personality,
              birthday: obj["birthday-string"].split(" ")[0],
              catchphrase: obj["catch-phrase"],
              image: obj["image_uri"]
            }))
            .filter((obj) => {
              return obj.personality === nature;
            })
            .filter((obj) => {
              return obj.birthday === month;
            })
        );
        console.log(villagerData);
      }
    }
    getData();
  }, [birthdayWasClicked]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://acnhapi.com/v1a/villagers");
      const data = await response.json();
      if (catchphraseWasClicked) {
        setVillagerData(
          villagerData.filter((obj) => {
            return obj.catchphrase === catchphrase;
          })
        );
      }
    }
    getData();
  }, [catchphraseWasClicked]);
  //

  function personalityResults() {
    const max = Math.max(...nature);
    const index = nature.indexOf(max);
    if (index === 0) {
      setNature("Lazy");
    } else if (index === 1) {
      setNature("Jock");
    } else if (index === 2) {
      setNature("Cranky");
    } else if (index === 3) {
      setNature("Smug");
    } else if (index === 4) {
      setNature("Normal");
    } else if (index === 5) {
      setNature("Peppy");
    } else if (index === 6) {
      setNature("Snooty");
    } else if (index === 7) {
      setNature("Uchi");
    }
  }

  const handleAnswerOptionClick = (personality) => {
    if (personality === "lazy") {
      let lazyNature = [1, 0, 0, 0, 0, 0, 0, 0];
      let newNature = nature.map((a, i) => a + lazyNature[i]);
      setNature(newNature);
    } else if (personality === "jock") {
      let jockNature = [0, 1, 0, 0, 0, 0, 0, 0];
      let newNature = nature.map((a, i) => a + jockNature[i]);
      setNature(newNature);
    } else if (personality === "cranky") {
      let crankyNature = [0, 0, 1, 0, 0, 0, 0, 0];
      let newNature = nature.map((a, i) => a + crankyNature[i]);
      setNature(newNature);
    } else if (personality === "smug") {
      let smugNature = [0, 0, 0, 1, 0, 0, 0, 0];
      let newNature = nature.map((a, i) => a + smugNature[i]);
      setNature(newNature);
    } else if (personality === "normal") {
      let normalNature = [0, 0, 0, 0, 1, 0, 0, 0];
      let newNature = nature.map((a, i) => a + normalNature[i]);
      setNature(newNature);
    } else if (personality === "peppy") {
      let peppyNature = [0, 0, 0, 0, 0, 1, 0, 0];
      let newNature = nature.map((a, i) => a + peppyNature[i]);
      setNature(newNature);
    } else if (personality === "snooty") {
      let snootyNature = [0, 0, 0, 0, 0, 0, 1, 0];
      let newNature = nature.map((a, i) => a + snootyNature[i]);
      setNature(newNature);
    } else if (personality === "uchi") {
      let uchiNature = [0, 0, 0, 0, 0, 0, 0, 1];
      let newNature = nature.map((a, i) => a + uchiNature[i]);
      setNature(newNature);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= 5) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion > 5 && nextQuestion < 10) {
      setCurrentQuestion(nextQuestion);
      document.getElementById("personality-container").classList.add("hide");
      document
        .getElementById("image-questions-container")
        .classList.remove("hide");
    } else if (nextQuestion >= 10) {
      personalityResults();
      document
        .getElementById("image-questions-container")
        .classList.add("hide");
      document.getElementById("month-container").classList.remove("hide");
    }
  };
  const handleBirthdayAnswer = (birthday) => {
    setMonth(birthday);
    setBirthdayWasClicked(true);
    console.log(villagerData);
    document.getElementById("month-container").classList.add("hide");
    document.getElementById("catchphrase-container").classList.remove("hide");
  };
  const handleCatchphraseAnswer = (catchphrases) => {
    setCatchphrase(catchphrases);
    setCatchphraseWasClicked(true);
    console.log(villagerData);
    document.getElementById("catchphrase-container").classList.add("hide");
    document.getElementById("results").classList.remove("hide");
  };

  const finalAnswer = () => {
    setVillagerFinal(villagerData[0].name);
    setVillagerImage(villagerData[0].image);
  };

  //
  //
  return (
    <div className="large-container">
      <div id="personality-container" className="container">
        <div className="question">
          <h1>{questionsArray[currentQuestion].question}</h1>
        </div>
        <div className="answers">
          {questionsArray[currentQuestion].answers.map((answerOption) => (
            <button
              className="individual-answer"
              key={answerOption.id}
              onClick={() => handleAnswerOptionClick(answerOption.personality)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      {/* These are the image questions 7-10*/}
      <div id="image-questions-container" className="container hide">
        <div className="question">
          <h1>{questionsArray[currentQuestion].question}</h1>
        </div>
        <div className="answers">
          {questionsArray[currentQuestion].answers.map((answerOption) => (
            <img
              src={answerOption.answerText}
              alt={answerOption.personality}
              className="individual-answer"
              key={answerOption.id}
              onClick={() => handleAnswerOptionClick(answerOption.personality)}
            />
          ))}
        </div>
      </div>
      {/* This is the Month Question */}
      <div id="month-container" className="hide container">
        <div className="question">
          <h1>{questionsArray[10].question}</h1>
        </div>
        <div className="answers">
          {questionsArray[10].answers.map((answerOption) => (
            <button
              className="individual-answer"
              key={answerOption.id}
              onClick={() => handleBirthdayAnswer(answerOption.answerText)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      {/* This is the Catchphrase Question */}
      <div id="catchphrase-container" className="hide container">
        <div className="question">
          <h1>Choose a Catchphrase</h1>
        </div>
        <div className="answers">
          {villagerData.map((object) => (
            <button
              className="individual-answer"
              key={object.catchphrase}
              onClick={(event) => {
                handleCatchphraseAnswer(object.catchphrase);
                finalAnswer();
              }}
            >
              {object.catchphrase}
            </button>
          ))}
        </div>
      </div>
      <div id="results" className="hide">
        <h1>Your villager is {villagerFinal}!</h1>
        <img src={villagerImage} alt="villager" />
      </div>
    </div>
  );
}
