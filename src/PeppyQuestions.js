import React, { useState, useEffect } from "react";

export default function PeppyQuestions() {
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
            return object.personality === "Peppy";
          })
      );
    }
    getData();
  }, []);
}
