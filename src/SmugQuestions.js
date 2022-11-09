import React, { useState, useEffect } from "react";

export default function SmugQuestions() {
  const [smugVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Smug";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(smugVillager);
}
