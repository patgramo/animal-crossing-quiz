import React, { useState, useEffect } from "react";

export default function SisterlyQuestions() {
  const [sisterlyVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Uchi";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(sisterlyVillager);
}
