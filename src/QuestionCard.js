import React, { useState } from "react";
import questionsArray from "../data/personalityQuestions";

// const renderCard = (card) => {
//   return (
//     <div key={card.id} className="card-container">
//       <div className="question">
//         <h2>{card.question}</h2>
//       </div>
//       <div className="answers">
//         <p className="individual-answer" id="lazy">
//           {card.lazy}
//         </p>
//         <p className="individual-answer" id="jock">
//           {card.jock}
//         </p>
//         <p className="individual-answer" id="cranky">
//           {card.cranky}
//         </p>
//         <p className="individual-answer" id="smug">
//           {card.smug}
//         </p>
//         <p className="individual-answer" id="normal">
//           {card.normal}
//         </p>
//         <p className="individual-answer" id="peppy">
//           {card.peppy}
//         </p>
//         <p className="individual-answer" id="snooty">
//           {card.snooty}
//         </p>
//         <p className="individual-answer" id="sisterly">
//           {card.sisterly}
//         </p>
//       </div>
//     </div>
//   );
// };

function QuestionCard() {
  const [state, setState] = useState(0);
  const individualQuestion = questionsArray.slice(0, 1);
  console.log(individualQuestion);
}

QuestionCard();
