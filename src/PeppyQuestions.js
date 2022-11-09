import React, { useState, useEffect } from "react";

export default function PeppyQuestions() {
  const [peppyVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Peppy";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(peppyVillager);
}
