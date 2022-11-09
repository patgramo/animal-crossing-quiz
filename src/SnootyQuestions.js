import React, { useState, useEffect } from "react";

export default function SnootyQuestions() {
  const [snootyVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Snooty";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(snootyVillager);
}
