import React, { useState, useEffect } from "react";

export default function NormalQuestions() {
  const [normalVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Normal";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(normalVillager);
}
