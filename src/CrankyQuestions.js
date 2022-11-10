import React, { useState, useEffect } from "react";
import {
  extraQuestions,
  extraQuestion2,
  extraQuestion3
} from "../data/extraQuestions";

function CrankyQuestions() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://acnhapi.com/v1a/villagers");
      const data = await response.json();
      setState(
        data
          .map((obj) => ({
            name: obj.name["name-USen"],
            personality: obj.personality,
            birthday: obj["birthday-string"],
            catchphrase: obj["catch-phrase"],
            image: obj["image_uri"]
          }))
          .filter((object) => {
            return object.personality === "Cranky";
          })
      );
    }
    getData();
  }, []);
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="card-container">
      <div className="question"></div>
    </div>
  );
}

export default CrankyQuestions;
