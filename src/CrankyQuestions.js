import React, { useState, useEffect } from "react";

function CrankyQuestions() {
  const [crankyVillager, setVillager] = useState([]);

  const fetchData = () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) =>
        setVillager(
          data.filter((obj) => {
            return obj.personality === "Cranky";
          })
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(crankyVillager);
}
//   const questionData = [
//     {
//       question: "",
//       answerA: "",
//       answerB: "",
//       answerC: "",
//       answerD: "",
//       answerE: "",
//       answerF: ""
//     },
//     {
//       question: "",
//       answerA: "",
//       answerB: "",
//       answerC: "",
//       answerD: "",
//       answerE: "",
//       answerF: ""
//     },
//     {
//       question: "",
//       answerA: "",
//       answerB: "",
//       answerC: "",
//       answerD: "",
//       answerE: "",
//       answerF: ""
//     }
//   ];

//   const [count, setCount] = useState(0);

//   return (
//     <div className="card-container">
//       <div className="question">
//         <h2>{questionsArray[count].question}</h2>
//       </div>
//       <div className="answers">
//         <p
//           className="individual-answer"
//           id="lazy"
//           onClick={() => {
//             setLazy(lazy + 1);
//             setCount(count + 1);
//           }}
//         >
//           {questionsArray[count].lazy}
//         </p>
//         <p
//           className="individual-answer"
//           id="jock"
//           onClick={() => {
//             setJock(jock + 1);
//             setCount(count + 1);
//           }}
//         >
//           {questionsArray[count].jock}
//         </p>
//         <p
//           className="individual-answer"
//           id="cranky"
//           onClick={() => {
//             setCranky(cranky + 1);
//             setCount(count + 1);
//           }}
//         >
//           {questionsArray[count].cranky}
//         </p>
//         <p
//           className="individual-answer"
//           id="smug"
//           onClick={() => {
//             setSmug(smug + 1);
//             setCount(count + 1);
//           }}
//         >
//           {questionsArray[count].smug}
//         </p>
//         <p
//           className="individual-answer"
//           id="normal"
//           onClick={() => {
//             setNormal(normal + 1);
//             setCount(count + 1);
//           }}
//         >
//           {questionsArray[count].normal}
//         </p>
//         <p
//           className="individual-answer"
//           id="peppy"
//           onClick={() => {
//             setPeppy(peppy + 1);
//             setCount(count + 1);
//             console.log(peppy);
//           }}
//         >
//           {questionsArray[count].peppy}
//         </p>
//         <p
//           className="individual-answer"
//           id="snooty"
//           onClick={() => {
//             setSnooty(snooty + 1);
//             setCount(count + 1);
//             console.log(snooty);
//           }}
//         >
//           {questionsArray[count].snooty}
//         </p>
//         <p
//           className="individual-answer"
//           id="sisterly"
//           onClick={() => {
//             setSisterly(sisterly + 1);
//             setCount(count + 1);
//             console.log(sisterly);
//           }}
//         >
//           {questionsArray[count].sisterly}
//         </p>
//       </div>
//     </div>
//   );
// }

export default CrankyQuestions;
