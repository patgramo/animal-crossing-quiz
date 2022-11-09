import React, { useState, useEffect } from "react";

export default function JockQuestions() {
  const [jockVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Jock";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(jockVillager);
}
